# ✅ TaskFlow

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> A Kanban-style task manager with drag-and-drop support, priority labels, due dates, and full localStorage persistence. No backend, no install — just open and use.

---

## 📸 Preview

```
┌─────────────────────────────────────────────────────┐
│  ✅ TaskFlow          [ + Add Task ]                │
│  3 To Do    2 In Progress    4 Done                 │
├────────────────┬──────────────────┬─────────────────┤
│   To Do        │   In Progress    │   Done          │
│                │                  │                 │
│ ┌────────────┐ │ ┌──────────────┐ │ ┌─────────────┐│
│ │Build login │ │ │Design UI     │ │ │Setup project││
│ │🔴 high     │ │ │🟡 medium     │ │ │🔴 high      ││
│ │📅 Mar 30  │ │ │              │ │ │✓ Done       ││
│ └────────────┘ │ └──────────────┘ │ └─────────────┘│
│ ┌────────────┐ │                  │                 │
│ │Write tests │ │                  │                 │
│ │🟢 low      │ │                  │                 │
│ └────────────┘ │                  │                 │
└────────────────┴──────────────────┴─────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 📋 Kanban Board | Three columns: To Do, In Progress, Done |
| 🖱️ Drag & Drop | Move cards between columns by dragging |
| ➕ Add / Edit Tasks | Modal form to create or update any task |
| 🎯 Priority Labels | Low 🟢, Medium 🟡, High 🔴 with color badges |
| 📅 Due Dates | Set deadlines; overdue tasks highlighted in red |
| 🔢 Column Counters | Live count of tasks per column |
| 💾 localStorage | All tasks saved — data survives page refresh |
| 📱 Responsive | Single-column layout on mobile |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure, modal, Kanban columns |
| CSS3 | Dark theme, card layout, modal styles |
| JavaScript (ES6+) | CRUD operations, drag & drop, localStorage |
| HTML5 Drag & Drop API | Native browser drag-and-drop between columns |
| localStorage | Persist all tasks across sessions |

---

## 🚀 Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/taskflow.git
cd taskflow
```

### 2. Open in browser
```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

No API key, no npm install, no configuration needed.

---

## 📁 File Structure

```
taskflow/
├── index.html    ← HTML layout, Kanban columns, modal form
├── style.css     ← Dark UI, card styles, modal, responsive
├── app.js        ← Task logic, drag & drop, localStorage CRUD
├── .gitignore    ← Ignores OS files and editor folders
├── LICENSE       ← MIT License
└── README.md     ← You are here
```

---

## 🎮 How to Use

1. Click **+ Add Task** to create a new task
2. Fill in title, description, priority, due date, and status
3. Click **Save Task** — it appears in the correct column
4. **Drag and drop** a card to move it between columns
5. Click ✏️ on a card to edit it
6. Click 🗑 on a card to delete it

---

## 🌐 Deploy to GitHub Pages

1. Push to GitHub
2. Go to repo → **Settings** → **Pages**
3. Source: **main branch → / (root)**
4. Live at: `https://YOUR_USERNAME.github.io/taskflow`

---

## 📄 License

[MIT](LICENSE) © 2025 Lokesh Kumar

---

## 👨‍💻 Author

**Lokesh Kumar** · Sonipat, Haryana, India
📧 17mr.antil@gmail.com · 🐙 [GitHub](https://github.com/YOUR_USERNAME)
