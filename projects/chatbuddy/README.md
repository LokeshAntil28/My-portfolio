# 💬 ChatBuddy

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> A real-time chat application UI with rooms, online user list, message bubbles, typing indicator, and simulated bot activity. Built as a frontend demo — ready to connect to a Socket.io backend.

---

## 📸 Preview

```
┌──────────────────────────────────────────────────────┐
│  Join Screen                                         │
│  ┌──────────────────────────────┐                   │
│  │      ChatBuddy 💬           │                   │
│  │  Real-time chat             │                   │
│  │  [ Your name...           ] │                   │
│  │  [ Room name...           ] │                   │
│  │  [      Join Chat →       ] │                   │
│  │  [general] [tech] [random]  │                   │
│  └──────────────────────────────┘                   │
└──────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────┐
│  #general  🟢 Live   4 online    [Leave Room]      │
├──────────────┬─────────────────────────────────────┤
│  Online      │                                     │
│  LK (you)    │  Rahul joined #general              │
│  Rahul       │                                     │
│  Priya       │  ┌─────────────────────┐            │
│  Amit        │  │ Rahul               │            │
│              │  │ Hey there! 👋       │            │
│              │  └─────────────────────┘            │
│              │                      ┌────────────┐ │
│              │                      │Hey, how are│ │
│              │                      │you doing?  │ │
│              │                      └────────────┘ │
│              │  Priya is typing...                 │
├──────────────┴──────────────────────────────────── │
│  [ Type a message...                 ] [ Send ]    │
└────────────────────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 Join Screen | Enter username and pick or type a room name |
| 🚪 Quick Rooms | One-click join: general, tech, random, music |
| 💬 Message Bubbles | Own messages on right (purple), others on left |
| 👥 Online Users | Sidebar shows all users currently in the room |
| ⌨️ Typing Indicator | "User is typing..." appears before bot replies |
| 🤖 Bot Simulation | Simulated bot messages keep the chat feeling live |
| 🎨 Color Avatars | Each user gets a unique color avatar auto-generated |
| 🚪 Leave Room | Return to join screen and start fresh |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Chat layout, join screen, message structure |
| CSS3 | Dark theme, message bubbles, sidebar, animations |
| JavaScript (ES6+) | Chat logic, bot simulation, DOM updates |

---

## 🚀 Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/chatbuddy.git
cd chatbuddy
```

### 2. Open in browser
```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

No setup needed. The app simulates real-time activity without a server.

---

## 📁 File Structure

```
chatbuddy/
├── index.html    ← Complete app — HTML + CSS + JS in one file
├── .gitignore    ← Ignores OS files, editor folders
├── LICENSE       ← MIT License
└── README.md     ← You are here
```

---

## 🔧 How to Add a Real Socket.io Backend

This project is a UI demo. To make it truly real-time:

### Backend (Node.js + Socket.io)
```bash
npm init -y
npm install express socket.io
```

```js
// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  socket.on('join', ({ username, room }) => {
    socket.join(room);
    socket.to(room).emit('system', `${username} joined the room`);
  });

  socket.on('message', ({ room, text, sender }) => {
    io.to(room).emit('message', { text, sender, time: new Date() });
  });

  socket.on('typing', ({ room, username }) => {
    socket.to(room).emit('typing', username);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => console.log('Server running on port 3000'));
```

### Frontend — Replace the simulation
```js
// In index.html, replace bot simulation with:
const socket = io('http://localhost:3000');

// Emit join
socket.emit('join', { username, room });

// Send message
socket.emit('message', { room, text, sender: username });

// Receive messages
socket.on('message', ({ text, sender }) => addMsg(sender, text, sender === username));

// Typing
socket.on('typing', (name) => { indicator.textContent = `${name} is typing...`; });
```

---

## 🌐 Deploy to GitHub Pages

1. Push to GitHub
2. Repo → **Settings** → **Pages** → Source: **main / root**
3. Live at: `https://YOUR_USERNAME.github.io/chatbuddy`

---

## 📄 License

[MIT](LICENSE) © 2025 Lokesh Kumar

---

## 👨‍💻 Author

**Lokesh Kumar** · Sonipat, Haryana, India
📧 17mr.antil@gmail.com · 🐙 [GitHub](https://github.com/YOUR_USERNAME)
