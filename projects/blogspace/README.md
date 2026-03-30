# ✍️ BlogSpace

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> A full-featured blogging platform where you can browse posts, filter by tag, search by title, read full articles, and publish your own posts — all powered by localStorage, no backend required.

---

## 📸 Preview

```
┌──────────────────────────────────────────────────────┐
│  BlogSpace ✍️              [Write Post] [Home]       │
├──────────────────────────────────────────────────────┤
│                                                      │
│       Ideas worth reading                            │
│  A space for developers to share knowledge           │
│  [ Search posts...              ]                    │
│                                                      │
│  [All] [React] [JavaScript] [Node.js] [CSS] [Git]    │
│                                                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐     │
│  │  ⚛️ Blue   │  │  🟩 Green  │  │  🎨 Purple │     │
│  │            │  │            │  │            │     │
│  │React Hooks │  │REST APIs   │  │CSS Grid vs │     │
│  │Getting     │  │with Node & │  │Flexbox     │     │
│  │Started     │  │Express     │  │            │     │
│  │[React][JS] │  │[Node][API] │  │[CSS][Front]│     │
│  │LK · Mar 10 │  │LK · Feb 22 │  │LK · Jan 18 │     │
│  │❤️ 142       │  │❤️ 98        │  │❤️ 203       │     │
│  └────────────┘  └────────────┘  └────────────┘     │
└──────────────────────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| 📰 Post Feed | Card grid with cover, title, excerpt, tags, author, likes |
| 🏷️ Tag Filtering | Click any tag to filter posts instantly |
| 🔍 Search | Real-time search by post title or tag |
| 📖 Full Post View | Click any card to read the full article |
| ✍️ Write & Publish | Create new posts with title, content, tags, emoji cover |
| 💾 localStorage | All posts persist — your content survives refresh |
| 📦 5 Sample Posts | Pre-loaded with developer blog posts on first launch |
| 📱 Responsive | Clean layout on all screen sizes |

---

## 📚 Pre-loaded Sample Posts

| Post | Tags | Likes |
|---|---|---|
| Getting Started with React Hooks | React, JavaScript | 142 |
| Building REST APIs with Node.js and Express | Node.js, Express, Backend | 98 |
| MongoDB vs MySQL: Which should you pick? | MongoDB, MySQL, Database | 75 |
| CSS Grid vs Flexbox: The Complete Guide | CSS, Frontend | 203 |
| Git for Beginners: Essential Commands | Git, Tools | 187 |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Three-view SPA structure (home, post, write) |
| CSS3 | Card grid, warm cream theme, post typography |
| JavaScript (ES6+) | View routing, CRUD for posts, search & filter |
| localStorage | Persist all posts and newly written articles |

---

## 🚀 Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/blogspace.git
cd blogspace
```

### 2. Open in browser
```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 📁 File Structure

```
blogspace/
├── index.html    ← Complete SPA — Home, Post view, Write view
├── .gitignore    ← Ignores OS files, editor folders
├── LICENSE       ← MIT License
└── README.md     ← You are here
```

---

## 🎮 How to Use

1. **Browse** — Scroll the home page to see all blog posts
2. **Filter** — Click a tag (React, CSS, Git...) to show only matching posts
3. **Search** — Type in the search box to filter by title or tag
4. **Read** — Click any card to open and read the full post
5. **Write** — Click **Write Post** in the nav to publish a new article
6. **Publish** — Fill in the form and click **Publish Post →** — it appears instantly in the feed

---

## 🔧 How to Extend with a Real Backend

This is a frontend demo. To extend with a full-stack backend:

1. **Node.js + Express** API with routes for `/posts`, `/posts/:id`
2. **MongoDB** to store posts, authors, and comments
3. **Cloudinary** for cover image uploads
4. **JWT Auth** for user accounts and authoring permissions
5. Replace `localStorage.getItem/setItem` with `fetch('/api/posts')` calls

---

## 🌐 Deploy to GitHub Pages

1. Push to GitHub
2. Repo → **Settings** → **Pages** → Source: **main / root**
3. Live at: `https://YOUR_USERNAME.github.io/blogspace`

---

## 📄 License

[MIT](LICENSE) © 2025 Lokesh Kumar

---

## 👨‍💻 Author

**Lokesh Kumar** · Sonipat, Haryana, India
📧 17mr.antil@gmail.com · 🐙 [GitHub](https://github.com/YOUR_USERNAME)
