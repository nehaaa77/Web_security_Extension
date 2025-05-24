
# 🔐 SecureWeb Alert - Real-Time Phishing Protection Chrome Extension

**SecureWeb Alert** is a browser extension designed to protect users from phishing websites and cyber threats. It offers real-time detection, instant alerts, and automatic blocking of malicious domains using intelligent rules and scanning APIs.

---

## 🚀 Features

- 🔍 Real-Time URL Scanning
- 🛑 Automatic Blocking of Malicious URLs
- 🧠 Smart Detection using Local and Remote APIs
- ⚡ Lightweight, Fast, and Secure
- 🎨 Customizable UI with Popup Notifications
- 🔔 Instant Alerts with On-Click Badge Updates
- 📁 Local Data Storage for Results

---

## 🧰 File Structure

```
SecureWeb-Alert/
├── manifest.json             # Chrome Extension configuration
├── background.js             # Background service for scanning and blocking
├── popup.html                # Popup UI shown on extension click
├── popup.js                  # Logic for handling popup interaction
├── popup.css                 # Popup styling
├── rules.json                # Local list of blocked or suspicious domains
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── index.html                # Landing page for extension info and download
├── README.md                 # Project documentation
```

---

## 🛠️ Installation Guide

1. Download or clone the repository.
2. Open `chrome://extensions/` in your Chrome browser.
3. Enable **Developer Mode** (top right corner).
4. Click **Load unpacked** and select the folder containing this project.

---

## 🌐 Landing Page

Open `index.html` in any browser to visit the animated landing page and download the extension.

---

## 🧪 How It Works

- Uses `chrome.tabs` and `chrome.webRequest` to intercept and monitor URLs.
- Matches URLs against entries in `rules.json`.
- Optionally communicates with external APIs for deeper scans.
- Results are shown in the popup and stored locally.

---

## 🎨 Customization

- Add more rules to `rules.json` to expand detection.
- Modify `popup.html`, `popup.js`, and `popup.css` for custom design.
- Connect to your preferred threat intelligence APIs.

---

## 📦 Distribute

To share this extension:
- Zip the entire folder.
- Share via email, hosting service, or upload to the Chrome Web Store.

---

## 📄 License

This project is licensed under the MIT License.  
Use responsibly and only for ethical security purposes.

---
