# 🌤️ WeatherNow


> A responsive real-time weather dashboard. Search any city in the world, detect your location automatically, and get current conditions + a 5-day forecast — all in a clean dark UI.

---


## ✨ Features

| Feature | Description |
|---|---|
| 🔍 City Search | Search weather for any city worldwide |
| 📍 Geolocation | Auto-detect and use your current location |
| 🌡️ Current Weather | Temp, feels-like, description, weather icon |
| 📊 Stats Grid | Humidity, wind speed, visibility, pressure |
| 📅 5-Day Forecast | Daily average temp + weather icon per day |
| 💾 localStorage | Remembers and reloads your last searched city |
| 📱 Responsive | Works on desktop, tablet, and mobile |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and layout |
| CSS3 | Styling, dark gradient theme, responsive grid |
| JavaScript (ES6+) | API calls, DOM updates, async/await |
| OpenWeatherMap API | Live weather & forecast data |
| localStorage | Caching last searched city |

---

## 🚀 Setup & Run

###  Get a free API key
1. Visit [openweathermap.org](https://openweathermap.org/api) and sign up
2. Go to **My Profile → API Keys** and copy your key
3. The free plan gives you **1,000 API calls/day** — more than enough

### 3. Add your API key
Open `app.js` and update line 3:
```js
// Change this:
const API_KEY = 'YOUR_API_KEY_HERE';

// To your actual key:
const API_KEY = 'a1b2c3d4e5f6yourkeyhere';
```

###  Open in browser
```bash
# No server needed — just open the file
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 📁 File Structure

```
weathernow/
├── index.html    ← HTML structure, all sections
├── style.css     ← Dark theme, layout, responsive styles
├── app.js        ← API logic, DOM updates, localStorage
├── .gitignore    ← Ignores .env, node_modules, OS files
├── LICENSE       ← MIT License
└── README.md     ← You are here
---

## 📄 License

[MIT](LICENSE) © 2025 Lokesh Kumar

---

## 👨‍💻 Author

**Lokesh Kumar** · Sonipat, Haryana, India
📧 17mr.antil@gmail.com · 🐙 [GitHub](https://github.com/YOUR_USERNAME)
