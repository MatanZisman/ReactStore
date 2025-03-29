
# 🦁 ZooStore

A quirky and fun e-commerce app built with React, Vite, and Material UI. Welcome to the ZooStore — where you can buy anything from chocolate and slippers to Pokémon and private planes.

## 🚀 Features

- 🛍️ Product listing with names, images, prices, and "Details" dialogs
- 🧾 Buy button that interacts with a local Express server and Cart management
- 💬 Dialog modal to view multi-line product descriptions
- 🎨 Responsive, styled with Material UI
- 📦 Data-driven UI — all product info is loaded from JSON
- ⚙️ Modular architecture with reusable components

---

## 📁 Project Structure

```
client/
├── src/
│   ├── components/       # Reusable UI components like Card and Dialog
│   ├── data/             # products.json with product details
│   ├── pages/            # Home page that renders all products
│   ├── types/            # Shared TypeScript interfaces
│   └── App.tsx, main.tsx # Entry points
```

---

## 🧪 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Express (for backend/cart endpoint)](https://expressjs.com/)

---

## 🔧 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/MatanZisman/ReactStore.git
cd ReactStore/client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

App should open at `http://localhost:5173`

### 4. Start the backend (optional for cart)

```bash
cd ../server
npm install
node index.js
```

Server should run at `http://localhost:5000`

---

## 📝 TODO / Ideas

- Add shopping cart page
- Hook up real backend or local storage
- Add login / user system
- Filter/search functionality
- Deploy with Vercel or Netlify

---

## 📸 Screenshots



---

## 🤓 Author

- [Matan Zisman](https://github.com/MatanZisman)

---

## Inspired by

AsafL910 (https://github.com/AsafL910/ReactTraining)

---

## 📜 License

Open for all.
