#!/usr/bin/env python3
"""
AuraSound - Local & Online Cloud Music Streaming Server
Serves static PWA files and handles real-time online search & audio streaming.
"""

import sys
import os
import json
import base64
import urllib.request
import urllib.parse
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pyDes import des, ECB, PAD_PKCS5

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DES_KEY = b'38346591'
cipher = des(DES_KEY, ECB, padmode=PAD_PKCS5)

ALLOWED_LANGS = {'telugu', 'english', 'tamil', 'hindi'}

def search_online_music(query, limit=14):
    try:
        search_url = 'https://www.jiosaavn.com/api.php?__call=search.getResults&_format=json&_marker=0&cc=in&p=1&n=' + str(limit * 2) + '&q=' + urllib.parse.quote(query)
        req = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8', errors='ignore'))
            results = data.get('results', [])
            if not results:
                return []
            
            pids = [r['id'] for r in results if 'id' in r]
            if not pids:
                return []

            det_url = 'https://www.jiosaavn.com/api.php?__call=song.getDetails&cc=in&_marker=0&_format=json&pids=' + ','.join(pids[:20])
            req2 = urllib.request.Request(det_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2, timeout=10) as resp2:
                det_data = json.loads(resp2.read().decode('utf-8', errors='ignore'))
                songs = []
                for pid in pids:
                    info = det_data.get(pid, {})
                    raw_lang = (info.get('language') or 'hindi').lower()
                    
                    # Strictly keep only Telugu, English, Tamil, Hindi
                    if raw_lang not in ALLOWED_LANGS:
                        continue

                    enc_url = info.get('encrypted_media_url')
                    if enc_url:
                        try:
                            dec = cipher.decrypt(base64.b64decode(enc_url)).decode('utf-8')
                            real_url = dec.replace('_96.mp4', '_160.mp4')
                            
                            song_name = info.get('song', '').replace('&quot;', '"').replace('&#039;', "'").replace('&amp;', '&')
                            album_name = info.get('album', '').replace('&quot;', '"').replace('&#039;', "'").replace('&amp;', '&')
                            artist_name = (info.get('primary_artists') or info.get('singers') or '').replace('&quot;', '"').replace('&#039;', "'").replace('&amp;', '&')
                            
                            lang_cap = raw_lang.capitalize()
                            lang_code = 'te' if raw_lang == 'telugu' else ('ta' if raw_lang == 'tamil' else ('en' if raw_lang == 'english' else 'hi'))

                            songs.append({
                                'id': 'online-' + pid,
                                'title': song_name or query,
                                'nativeTitle': song_name,
                                'movie': album_name or 'Cinema Soundtrack',
                                'artist': artist_name or 'Soundtrack Artist',
                                'language': lang_cap,
                                'langCode': lang_code,
                                'genre': f"{lang_cap} OST",
                                'cover': (info.get('image') or '').replace('150x150', '500x500'),
                                'src': real_url,
                                'duration': int(info.get('duration') or 210),
                                'favorite': False,
                                'isMovie': True,
                                'isOnline': True,
                                'lyrics': [
                                    {'time': 0, 'native': f"Song: {song_name}", 'trans': f"Movie / Album: {album_name}"},
                                    {'time': 10, 'native': f"Artists: {artist_name}", 'trans': f"Year: {info.get('year', '')}"},
                                    {'time': 20, 'native': "High quality 160kbps master studio recording", 'trans': "Streamed live on AuraSound Audio Studio"}
                                ]
                            })
                            if len(songs) >= limit:
                                break
                        except Exception as e:
                            pass
                return songs
    except Exception as e:
        print(f"[AuraSound Server] Search error: {e}")
        return []

class AuraSoundHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        
        # Route: Real-time Online Search API (Telugu, English, Tamil, Hindi)
        if parsed.path in ('/api/search', '/api/cloud/search'):
            params = urllib.parse.parse_qs(parsed.query)
            q = params.get('q', [''])[0].strip()
            limit = int(params.get('limit', ['12'])[0])
            
            if not q:
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps([]).encode('utf-8'))
                return

            print(f"[AuraSound] Online search for: '{q}' (Telugu, English, Tamil, Hindi)...")
            songs = search_online_music(q, limit)
            print(f"[AuraSound] Found {len(songs)} tracks online for '{q}'")

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(songs, ensure_ascii=False).encode('utf-8'))
            return

        super().do_GET()

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server = HTTPServer(('0.0.0.0', PORT), AuraSoundHandler)
    print("=" * 65)
    print(f"🎵 AuraSound Music Streaming Server running on http://localhost:{PORT}")
    print("• Language support: Telugu, English, Tamil, Hindi")
    print("• High-fidelity 160kbps real studio audio playback enabled")
    print(f"• Open your browser at: http://localhost:{PORT}")
    print("=" * 65)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
