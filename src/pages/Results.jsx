import { useLocation, useNavigate } from 'react-router-dom'
import './Results.css'

function Results() {
  const location = useLocation()
  const navigate = useNavigate()
  const { assessment, answers, score, timeSpent } = location.state || {}

  if (!assessment) {
    navigate('/')
    return null
  }

  const totalQuestions = assessment.questions.length
  const percentage = Math.round((score / totalQuestions) * 100)

  const getPerformanceLevel = (pct) => {
    if (pct >= 80) return { level: 'Excellent', color: '#4caf50', emoji: '🎉' }
    if (pct >= 60) return { level: 'Good', color: '#ff9800', emoji: '👍' }
    if (pct >= 40) return { level: 'Fair', color: '#ff9800', emoji: '📚' }
    return { level: 'Needs Improvement', color: '#f44336', emoji: '💪' }
  }

  const performance = getPerformanceLevel(percentage)

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  return (
    <div className="results">
      <div className="results-container">
        <div className="results-header">
          <div className="performance-icon" style={{ color: performance.color }}>
            {performance.emoji}
          </div>
          <h1>Assessment Complete!</h1>
          <p className="performance-level" style={{ color: performance.color }}>
            {performance.level}
          </p>
        </div>

        <div className="score-card">
          <div className="score-circle" style={{ borderColor: performance.color }}>
            <div className="score-value">{percentage}%</div>
            <div className="score-label">Score</div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">✓</div>
              <div className="stat-value">{score}</div>
              <div className="stat-label">Answered</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">📝</div>
              <div className="stat-value">{totalQuestions}</div>
              <div className="stat-label">Total Questions</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⏱️</div>
              <div className="stat-value">{formatTime(timeSpent)}</div>
              <div className="stat-label">Time Taken</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-value">{assessment.duration}m</div>
              <div className="stat-label">Time Limit</div>
            </div>
          </div>
        </div>

        <div className="assessment-info">
          <h2>{assessment.title}</h2>
          <div className="info-tags">
            <span className="tag">{assessment.language}</span>
            <span className="tag">{assessment.difficulty}</span>
            <span className="tag">{assessment.questions.length} questions</span>
          </div>
        </div>

        <div className="questions-review">
          <h3>Question Summary</h3>
          <div className="questions-list">
            {assessment.questions.map((question, idx) => {
              const answer = answers[idx]
              const isAnswered = !!answer

              return (
                <div key={idx} className={`question-item ${isAnswered ? 'answered' : 'skipped'}`}>
                  <div className="question-number">{idx + 1}</div>
                  <div className="question-details">
                    <div className="question-title">{question.title}</div>
                    <div className="question-type">{question.type}</div>
                  </div>
                  <div className="question-status">
                    {isAnswered ? (
                      <span className="status-badge answered">✓ Answered</span>
                    ) : (
                      <span className="status-badge skipped">○ Skipped</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="feedback-section">
          <h3>Recommendations</h3>
          <div className="recommendations">
            {percentage < 60 && (
              <div className="recommendation">
                <span className="rec-icon">📖</span>
                <p>Review fundamental concepts and practice more basic problems</p>
              </div>
            )}
            {percentage >= 60 && percentage < 80 && (
              <div className="recommendation">
                <span className="rec-icon">💡</span>
                <p>Good progress! Focus on edge cases and optimization techniques</p>
              </div>
            )}
            {percentage >= 80 && (
              <div className="recommendation">
                <span className="rec-icon">🚀</span>
                <p>Excellent work! Try more advanced challenges to further improve</p>
              </div>
            )}
            <div className="recommendation">
              <span className="rec-icon">⏰</span>
              <p>Time management: You used {formatTime(timeSpent)} of {assessment.duration} minutes available</p>
            </div>
            <div className="recommendation">
              <span className="rec-icon">🔄</span>
              <p>Practice regularly to maintain and improve your skills</p>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-secondary" onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button className="btn-primary" onClick={() => navigate(`/assessment/${assessment.id}`)}>
            Retake Assessment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Results
