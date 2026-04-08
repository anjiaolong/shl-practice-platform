import { useNavigate } from 'react-router-dom'
import { assessments } from '../data/assessments'
import { useProgress } from '../context/ProgressContext'
import './Home.css'

function Home() {
  const navigate = useNavigate()
  const { progress, clearProgress } = useProgress()

  const startAssessment = (id) => {
    navigate(`/assessment/${id}`)
  }

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: '#4caf50',
      intermediate: '#ff9800',
      advanced: '#f44336'
    }
    return colors[difficulty] || '#757575'
  }

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">
          <div className="logo-icon">SHL</div>
          <h1>Practice Platform</h1>
        </div>
        <p className="tagline">Prepare for your coding assessment with realistic practice tests</p>
      </header>

      <div className="stats-bar">
        <div className="stat">
          <span className="stat-value">{assessments.length}</span>
          <span className="stat-label">Assessments</span>
        </div>
        <div className="stat">
          <span className="stat-value">{Object.keys(progress).length}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat">
          <span className="stat-value">
            {Object.values(progress).reduce((acc, p) => acc + (p.score || 0), 0)}
          </span>
          <span className="stat-label">Total Score</span>
        </div>
        <button className="reset-btn" onClick={clearProgress}>Reset Progress</button>
      </div>

      <div className="assessments-grid">
        {assessments.map((assessment) => {
          const userProgress = progress[assessment.id]
          const isCompleted = userProgress?.completed

          return (
            <div key={assessment.id} className="assessment-card">
              <div className="card-header">
                <h2>{assessment.title}</h2>
                <span
                  className="difficulty-badge"
                  style={{ backgroundColor: getDifficultyColor(assessment.difficulty) }}
                >
                  {assessment.difficulty}
                </span>
              </div>

              <p className="card-description">{assessment.description}</p>

              <div className="card-meta">
                <div className="meta-item">
                  <span className="icon">⏱️</span>
                  <span>{assessment.duration} minutes</span>
                </div>
                <div className="meta-item">
                  <span className="icon">📝</span>
                  <span>2 questions</span>
                </div>
                <div className="meta-item">
                  <span className="icon">💻</span>
                  <span>{assessment.language}</span>
                </div>
              </div>

              {isCompleted && (
                <div className="progress-info">
                  <div className="score">
                    Score: {userProgress.score}/{userProgress.total || 2}
                  </div>
                  <div className="completion-time">
                    Completed in {Math.floor(userProgress.timeSpent / 60)}m {userProgress.timeSpent % 60}s
                  </div>
                </div>
              )}

              <button
                className="start-btn"
                onClick={() => startAssessment(assessment.id)}
              >
                {isCompleted ? 'Retake Assessment' : 'Start Assessment'}
              </button>
            </div>
          )
        })}
      </div>

      <footer className="home-footer">
        <p>💡 Tips: Read questions carefully, manage your time, and test your code thoroughly</p>
      </footer>
    </div>
  )
}

export default Home
