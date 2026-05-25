# 🛒 ShopEase
t)

> A fully functional e-commerce frontend with product listing, search, category filtering, sorting, cart management, quantity controls, and a checkout flow — all in a single HTML file with no backend required.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏪 Product Grid | 12 products across 5 categories with emoji covers |
| 🔍 Search | Real-time filter by product name or category |
| 🗂️ Category Filter | Filter by Electronics, Clothing, Books, Food, Home |
| ↕️ Sort | Sort by price (low→high, high→low) or top rated |
| 🛒 Cart Sidebar | Smooth slide-in cart panel |
| ➕➖ Quantity Controls | Increase/decrease qty per item in cart |
| 💰 Live Total | Cart total auto-updates on every change |
| ✅ Checkout | Order confirmation flow with total summary |
| 💾 localStorage | Cart persists across page refreshes |
| 📱 Responsive | Mobile-friendly layout |

---

## 🗂️ Product Categories

| Category | Products |
|---|---|
| Electronics | Wireless Headphones, Mechanical Keyboard, Smart Watch, Bluetooth Speaker |
| Clothing | Running Shoes, Cotton T-Shirt, Backpack |
| Books | JavaScript Book, React Mastery |
| Food | Coffee Beans |
| Home | Desk Lamp, Water Bottle |

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure, cart sidebar, product grid |
| CSS3 | Grid layout, slide-in sidebar, hover effects |
| JavaScript (ES6+) | Filter/sort logic, cart state, localStorage |
| localStorage | Persist cart between sessions |

---

## 🚀 Setup & Run

### 1. Open in browser
```bash
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```


## 📁 File Structure

```
shopease/
├── index.html    ← Complete app — HTML + CSS + JS in one file
├── .gitignore    ← Ignores OS files, editor folders
├── LICENSE       ← MIT License
└── README.md     ← You are here
```

---

## 🔧 How to Extend with a Real Backend

This is a frontend-only demo. To turn it into a full-stack app:

1. **Backend**: Build a Node.js + Express REST API
2. **Database**: Store products and orders in MongoDB
3. **Auth**: Add JWT-based user login/signup
4. **Products API**: Replace the `PRODUCTS` array with:
   ```js
   const res = await fetch('/api/products');
   const PRODUCTS = await res.json();
   ```
5. **Orders API**: Send cart data to `/api/orders` on checkout

---

## 📄 License

[MIT](LICENSE) © 2025 Lokesh Kumar

---

## 👨‍💻 Author

**Lokesh Kumar** · Sonipat, Haryana, India
📧 17mr.antil@gmail.com · 🐙 [GitHub](https://github.com/YOUR_USERNAME)
