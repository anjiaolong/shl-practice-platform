import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { assessments } from '../data/assessments'
import { useProgress } from '../context/ProgressContext'
import { runPython, runTestCase } from '../utils/pythonRunner'
import './Assessment.css'

function Assessment() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { saveResult } = useProgress()
  const [assessment, setAssessment] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [code, setCode] = useState('')
  const [answers, setAnswers] = useState({})
  const [timeLeft, setTimeLeft] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState('')
  const [testResults, setTestResults] = useState(null)
  const timerRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    const found = assessments.find(a => a.id === id)
    if (found) {
      // Randomly pick 2 questions each time
      const shuffled = [...found.questions].sort(() => Math.random() - 0.5)
      const limited = { ...found, questions: shuffled.slice(0, 2) }
      setAssessment(limited)
      setTimeLeft(limited.duration * 60)
      startTimeRef.current = Date.now()
      const question = limited.questions[0]
      setCode(question.starterCode || question.buggyCode || '')
    } else {
      navigate('/')
    }
  }, [id, navigate])

  useEffect(() => {
    if (timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmit()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }

    return () => clearInterval(timerRef.current)
  }, [timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleCodeChange = (value) => {
    setCode(value)
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: { code: value, type: 'code' }
    }))
  }

  const handleMultipleChoice = (optionId) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: { selected: optionId, type: 'multiple-choice' }
    }))
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Loading Python runtime...')

    try {
      const question = assessment.questions[currentQuestion]

      if (question.type === 'coding' || question.type === 'debugging') {
        if (question.testCases && question.testCases.length > 0) {
          const results = []
          let passed = 0

          for (let idx = 0; idx < question.testCases.length; idx++) {
            const test = question.testCases[idx]
            // Build test assertion code
            const args = test.input.map(a => JSON.stringify(a)).join(', ')
            const expected = JSON.stringify(test.expected)
            // Convert JS literals to Python literals
            const toPython = s => s
              .replace(/\btrue\b/g, 'True')
              .replace(/\bfalse\b/g, 'False')
              .replace(/\bnull\b/g, 'None')
            const pyArgs = toPython(args)
            const pyExpected = toPython(expected)
            const fnName = code.match(/^def (\w+)/m)?.[1] || 'solution'
            const testCode = `
_result = ${fnName}(${pyArgs})
_expected = ${pyExpected}
print('PASS' if str(_result) == str(_expected) or _result == _expected else f'FAIL: got {_result}')
`
            const { output } = await runTestCase(code, testCode)
            const lastLine = output.trim().split('\n').pop()
            const testPassed = lastLine === 'PASS'
            if (testPassed) passed++
            results.push({
              test: idx + 1,
              passed: testPassed,
              input: JSON.stringify(test.input),
              expected: pyExpected,
              actual: output
            })
          }

          setTestResults({ results, passed, total: question.testCases.length })
          setAnswers(prev => ({
            ...prev,
            [currentQuestion]: { code, type: 'code', passed: passed === question.testCases.length }
          }))
          setOutput(`Test Results: ${passed}/${question.testCases.length} passed\n\n${
            results.map(r =>
              `Test ${r.test}: ${r.passed ? '✓ PASS' : '✗ FAIL'}\n` +
              `  Input: ${r.input}\n` +
              `  Expected: ${r.expected}\n` +
              `  Got: ${r.actual}`
            ).join('\n\n')
          }`)
        } else {
          const { success, output } = await runPython(code)
          setOutput(success ? output || '(no output)' : `Error: ${output}`)
        }
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`)
    }
    setIsRunning(false)
  }

  const nextQuestion = () => {
    if (currentQuestion < assessment.questions.length - 1) {
      const nextQ = currentQuestion + 1
      setCurrentQuestion(nextQ)
      const question = assessment.questions[nextQ]
      setCode(answers[nextQ]?.code || question.starterCode || question.buggyCode || '')
      setOutput('')
      setTestResults(null)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1
      setCurrentQuestion(prevQ)
      const question = assessment.questions[prevQ]
      setCode(answers[prevQ]?.code || question.starterCode || question.buggyCode || '')
      setOutput('')
      setTestResults(null)
    }
  }

  const handleSubmit = () => {
    clearInterval(timerRef.current)

    const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000)
    // Score = number of questions where user actually wrote code (not just starter code)
    const score = Object.values(answers).filter(a => a.code && a.passed).length

    saveResult(id, {
      completed: true,
      score,
      total: assessment.questions.length,
      timeSpent,
      answers,
      date: new Date().toISOString()
    })

    navigate('/results', { state: { assessment, answers, score, timeSpent } })
  }

  if (!assessment) return <div className="loading">Loading...</div>

  const question = assessment.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / assessment.questions.length) * 100

  return (
    <div className="assessment">
      <header className="assessment-header">
        <div className="header-left">
          <h1>{assessment.title}</h1>
          <div className="question-nav">
            Question {currentQuestion + 1} of {assessment.questions.length}
          </div>
        </div>
        <div className="header-right">
          <div className={`timer ${timeLeft < 300 ? 'warning' : ''}`}>
            <span className="timer-icon">⏱️</span>
            <span className="timer-value">{formatTime(timeLeft)}</span>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit Assessment
          </button>
        </div>
      </header>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="assessment-content">
        <div className="question-panel">
          <div className="question-header">
            <h2>{question.title}</h2>
            {question.type && (
              <span className="question-type">{question.type}</span>
            )}
          </div>

          <div className="question-description">
            {question.description}
          </div>

          {question.examples && question.examples.length > 0 && (
            <div className="examples">
              <h3>Examples:</h3>
              {question.examples.map((ex, idx) => (
                <div key={idx} className="example">
                  <div><strong>Input:</strong> {ex.input}</div>
                  <div><strong>Output:</strong> {ex.output}</div>
                </div>
              ))}
            </div>
          )}

          {question.hint && (
            <div className="hint">
              <strong>💡 Hint:</strong> {question.hint}
            </div>
          )}

          {question.type === 'multiple-choice' && (
            <div className="multiple-choice">
              <div className="code-block">{question.code}</div>
              <div className="options">
                {question.options.map(option => (
                  <label key={option.id} className="option">
                    <input
                      type="radio"
                      name="answer"
                      checked={answers[currentQuestion]?.selected === option.id}
                      onChange={() => handleMultipleChoice(option.id)}
                    />
                    <span>{option.text}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {question.type === 'code-review' && question.code && (
            <div className="code-review">
              <h3>Code to Review:</h3>
              <pre className="code-block">{question.code}</pre>
              <div className="review-prompt">
                <p>Identify the issues and write your review below:</p>
              </div>
            </div>
          )}
        </div>

        {(question.type === 'coding' || question.type === 'debugging' || question.type === 'code-review') && (
          <div className="code-panel">
            <div className="editor-header">
              <span>Code Editor</span>
              <button
                className="run-btn"
                onClick={runCode}
                disabled={isRunning}
              >
                {isRunning ? '⏳ Running...' : '▶️ Run Code'}
              </button>
            </div>

            <Editor
              height="400px"
              language={question.language || assessment.language}
              value={code}
              onChange={handleCodeChange}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true,
              }}
            />

            {output && (
              <div className="output-panel">
                <div className="output-header">
                  Output
                  {testResults && (
                    <span className={`test-summary ${testResults.passed === testResults.total ? 'success' : 'partial'}`}>
                      {testResults.passed}/{testResults.total} tests passed
                    </span>
                  )}
                </div>
                <pre className="output-content">{output}</pre>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="navigation-footer">
        <button
          className="nav-btn"
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
        >
          ← Previous
        </button>

        <div className="question-indicators">
          {assessment.questions.map((_, idx) => (
            <div
              key={idx}
              className={`indicator ${idx === currentQuestion ? 'active' : ''} ${answers[idx] ? 'answered' : ''}`}
              onClick={() => {
                setCurrentQuestion(idx)
                const q = assessment.questions[idx]
                setCode(answers[idx]?.code || q.starterCode || q.buggyCode || '')
                setOutput('')
                setTestResults(null)
              }}
            >
              {idx + 1}
            </div>
          ))}
        </div>

        <button
          className="nav-btn"
          onClick={nextQuestion}
          disabled={currentQuestion === assessment.questions.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  )
}

export default Assessment
