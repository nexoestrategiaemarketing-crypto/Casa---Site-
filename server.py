#!/usr/bin/env python3
import http.server
import socketserver
import os

os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        if self.path.endswith('.jsx'):
            self.send_header('Content-Type', 'application/javascript; charset=utf-8')
        super().end_headers()

PORT = 8000
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f'✓ Servidor rodando em http://localhost:{PORT}/')
    print(f'✓ Abra em seu navegador: http://localhost:{PORT}/Casa%2B%20Redesign.html')
    httpd.serve_forever()
