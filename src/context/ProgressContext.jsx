import { createContext, useContext, useState, useCallback } from 'react'

const ProgressContext = createContext(null)

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('shl-progress') || '{}')
    } catch {
      return {}
    }
  })

  const saveResult = useCallback((assessmentId, result) => {
    setProgress(prev => {
      const updated = { ...prev, [assessmentId]: result }
      localStorage.setItem('shl-progress', JSON.stringify(updated))
      return updated
    })
  }, [])

  const clearProgress = useCallback(() => {
    localStorage.removeItem('shl-progress')
    setProgress({})
  }, [])

  return (
    <ProgressContext.Provider value={{ progress, saveResult, clearProgress }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  return useContext(ProgressContext)
}
