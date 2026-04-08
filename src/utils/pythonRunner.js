const API = 'http://localhost:5001/run'

export async function runPython(code) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code })
  })
  const data = await res.json()
  return { success: data.success, output: data.error || data.output }
}

export async function runTestCase(userCode, testCode) {
  return runPython(userCode + '\n' + testCode)
}
