# 🎵 AuraSound - Modern Studio Music Player

A sleek, responsive, Progressive Web App (PWA) music player and streaming studio, featuring **authentic, full-length, high-fidelity 160kbps master studio recordings** curated strictly across **Telugu**, **English**, **Tamil**, and **Hindi** film soundtracks and hit singles, with live cloud search, 5-band equalizer, and full offline caching support!

---

## 🌟 Key Features

### 1. 🎵 100% Real Studio Master Recordings
- Every single song in the catalog plays the **actual, full-length master studio recording** (high-fidelity 160kbps streaming).
- Includes beloved masterpieces such as:
  - **Telugu**: *Naatu Naatu* (*RRR*), *Samajavaragamana* (*Ala Vaikunthapurramuloo*), *Inkem Inkem Kaavaale* (*Geetha Govindam*), *Chuttamalle* (*Devara*), *Pushpa Pushpa* (*Pushpa 2 The Rule*), *Ramuloo Ramulaa*, *Butta Bomma*, *Srivalli*.
  - **English**: *My Heart Will Go On* (*Titanic*), *City of Stars* (*La La Land*), *See You Again* (*Furious 7*), *Shallow* (*A Star Is Born*), *Sunflower* (*Spider-Man: Into the Spider-Verse*), *Believer* (*Imagine Dragons*), *Starboy* (*The Weeknd*), *Let Me Love You* (*DJ Snake ft. Justin Bieber*).
  - **Tamil**: *Arabic Kuthu - Halamithi Habibo* (*Beast*), *Why This Kolaveri Di* (*3*), *Rowdy Baby* (*Maari 2*), *Vaseegara* (*Minnale*), *Hukum - Thalaivar Alappara* (*Jailer*), *Enjoy Enjaami*, *Vaathi Coming* (*Master*), *Kaathalae Kaathalae* (*96*).
  - **Hindi**: *Tum Hi Ho* (*Aashiqui 2*), *Kesariya* (*Brahmāstra*), *Chaiyya Chaiyya* (*Dil Se..*), *Kal Ho Naa Ho*, *Apna Bana Le* (*Bhediya*), *Kabira* (*Yeh Jawaani Hai Deewani*), *Jai Ho* (*Slumdog Millionaire*), *Tere Pyaar Mein* (*Tu Jhoothi Main Makkaar*).

### 2. 🌐 Live Online Cloud Search (Telugu, English, Tamil & Hindi)
- Use the built-in search bar to look up any Telugu, English, Tamil, or Hindi movie, track, actor, or singer.
- Tap **"Search Online"** to instantly fetch matching studio tracks, dynamic poster artwork, and full metadata, strictly filtered to the four supported languages.

### 3. 💾 Full Offline Mode (IndexedDB & Service Worker)
- Tap the **"Save for Offline"** button (cloud download icon) on any song to save the audio file directly into your device's IndexedDB storage.
- Downloaded tracks remain 100% playable even without an internet or cellular connection.
- Includes a procedural Web Audio API ambient engine fallback for offline playback resilience.

### 4. 🎛️ Audio Controls & Visualizers
- **5-Band Equalizer**: 60Hz, 230Hz, 910Hz, 3.6kHz, 14kHz with presets (Bass Boost, Vocal, Electronic, Flat, Treble Boost).
- **3 Visualizer Modes**: Neon Waveform, Aurora Bars, and Cyber Frequency Circle.
- **Sleep Timer**: Auto stop playback with 15m, 30m, 45m, or 60m countdown.
- **Dual-Pane Synchronized Lyrics**: Original script and transliteration with active line highlighting.
- **Mobile Bottom Navigation & Lock Screen Controls**: MediaSession API integration for lock screen art and playback buttons.

---

## 🚀 How to Run the App

1. Open your terminal and navigate to the project directory:
```bash
cd /Users/hemanth/Desktop/musicplayer
```

2. Start the streaming server:
```bash
python3 server.py 8080
```

3. Open your browser at:
```
http://localhost:8080
```

---

## 📱 Mobile & PWA Installation

- **iOS Safari**: Tap the **Share** button > **"Add to Home Screen"**.
- **Android Chrome**: Tap the three-dot menu > **"Install App"** or tap the prompt.
- **Desktop Chrome / Edge**: Click the install icon in the address bar to install as a native desktop application.
