from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import sys
import tempfile
import os

app = Flask(__name__)
CORS(app)

@app.route('/run', methods=['POST'])
def run_code():
    data = request.json
    code = data.get('code', '')

    with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as f:
        f.write(code)
        tmp_path = f.name

    try:
        result = subprocess.run(
            [sys.executable, tmp_path],
            capture_output=True, text=True, timeout=10
        )
        return jsonify({
            'success': result.returncode == 0,
            'output': result.stdout.strip(),
            'error': result.stderr.strip()
        })
    except subprocess.TimeoutExpired:
        return jsonify({'success': False, 'output': '', 'error': 'Timeout: code took too long'})
    finally:
        os.unlink(tmp_path)

if __name__ == '__main__':
    app.run(port=5001, debug=False)
