const http = require('http')
const { execSync } = require('child_process')
const fs = require('fs')
const os = require('os')
const path = require('path')

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (req.method !== 'POST' || req.url !== '/run') {
    res.writeHead(404)
    res.end(JSON.stringify({ error: 'Not found' }))
    return
  }

  let body = ''
  req.on('data', chunk => body += chunk)
  req.on('end', () => {
    try {
      const { code } = JSON.parse(body)
      const tmpFile = path.join(os.tmpdir(), `shl_${Date.now()}.py`)
      fs.writeFileSync(tmpFile, code)

      // Try different python executables
      const pythons = [
        '/Users/admin/.workbuddy/binaries/python/versions/3.14.3/bin/python3',
        'python3', 'python', '/usr/local/bin/python3', '/opt/homebrew/bin/python3'
      ]
      let result = null

      for (const py of pythons) {
        try {
          const output = execSync(`${py} "${tmpFile}"`, { timeout: 10000, encoding: 'utf8', stdio: ['pipe','pipe','pipe'] })
          result = { success: true, output: output.trim(), error: '' }
          break
        } catch (e) {
          if (e.stdout !== undefined) {
            result = { success: false, output: e.stdout?.trim() || '', error: e.stderr?.trim() || e.message }
            break
          }
        }
      }

      fs.unlinkSync(tmpFile)

      if (!result) {
        result = { success: false, output: '', error: 'Python not found. Please install Python.' }
      }

      res.writeHead(200)
      res.end(JSON.stringify(result))
    } catch (e) {
      res.writeHead(500)
      res.end(JSON.stringify({ success: false, output: '', error: e.message }))
    }
  })
})

server.listen(5001, () => console.log('Code runner listening on http://localhost:5001'))
