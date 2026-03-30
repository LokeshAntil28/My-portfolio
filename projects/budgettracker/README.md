# 💰 BudgetTracker

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

> A personal finance tracker to log income and expenses, visualize spending by category with interactive charts, and export your data as CSV — all in the browser with no backend needed.

---

## 📸 Preview

```
┌──────────────────────────────────────────────────────┐
│  💰 BudgetTracker                                    │
│                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐          │
│  │ Income   │  │ Expenses │  │ Balance  │          │
│  │ ₹45,000  │  │ ₹18,200  │  │ ₹26,800  │          │
│  └──────────┘  └──────────┘  └──────────┘          │
│                                                      │
│  ┌─────────────────┐  ┌──────────────────────────┐  │
│  │  Add Transaction│  │  Spending by Category    │  │
│  │                 │  │                          │  │
│  │  Description    │  │      🍩 Donut Chart      │  │
│  │  Amount ₹       │  │   Food 35% | Bills 20%  │  │
│  │  Category       │  │   Transport 15% | ...   │  │
│  │  [Income|Expense│  │                          │  │
│  │  Date           │  │  [Pie]  [Monthly Bar]    │  │
│  │  [+ Add]        │  └──────────────────────────┘  │
│  └─────────────────┘                                │
│                                                      │
│  Transaction History      [All ▼] [Export] [Clear]  │
│  💼 Salary      Mar 1    Income   +₹45,000          │
│  🍔 Groceries   Mar 5    Food     -₹2,200           │
└──────────────────────────────────────────────────────┘
```

---

## ✨ Features

| Feature | Description |
|---|---|
| ➕ Add Transactions | Log income or expense with description, category, amount, date |
| 📊 Summary Cards | Live totals for Income, Expenses, and Balance |
| 🍩 Pie Chart | Spending breakdown by category (Chart.js doughnut) |
| 📈 Monthly Bar Chart | Income vs Expenses per month over time |
| 🔍 Filter | Filter transaction list by All / Income / Expense |
| 📥 Export CSV | Download all transactions as a `.csv` file |
| 🗑️ Delete Entries | Remove individual transactions |
| 💾 localStorage | All data persists across browser sessions |
| 📱 Responsive | Works on desktop and mobile |

---

## 🗂️ Categories Supported

💼 Salary · 💻 Freelance · 🍔 Food · 🚗 Transport · 🛍️ Shopping · 💡 Bills · 🏥 Health · 📚 Education · 🎬 Entertainment · 📦 Other

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure, form elements, layout |
| CSS3 | Card design, responsive grid, color coding |
| JavaScript (ES6+) | CRUD logic, chart rendering, CSV export |
| Chart.js (CDN) | Doughnut and bar chart visualizations |
| localStorage | Persist all transaction data |

---

## 🚀 Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/budgettracker.git
cd budgettracker
```

### 2. Open in browser
```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

No API key needed. Works 100% offline.

---

## 📁 File Structure

```
budgettracker/
├── index.html    ← HTML layout, summary cards, form, history table
├── style.css     ← Card styles, chart container, responsive layout
├── app.js        ← Transaction logic, Chart.js rendering, CSV export
├── .gitignore    ← Ignores OS files, editor folders
├── LICENSE       ← MIT License
└── README.md     ← You are here
```

---

## 📥 CSV Export Format

When you click **Export CSV**, a file like `budget_2025-03-22.csv` downloads with these columns:

```
Date, Description, Category, Type, Amount
2025-03-01, Salary, Salary, income, 45000
2025-03-05, Groceries, Food, expense, 2200
```

---

## 🌐 Deploy to GitHub Pages

1. Push to GitHub
2. Go to repo → **Settings** → **Pages**
3. Source: **main branch → / (root)**
4. Live at: `https://YOUR_USERNAME.github.io/budgettracker`

---

## 📄 License

[MIT](LICENSE) © 2025 Lokesh Kumar

---

## 👨‍💻 Author

**Lokesh Kumar** · Sonipat, Haryana, India
📧 17mr.antil@gmail.com · 🐙 [GitHub](https://github.com/YOUR_USERNAME)
