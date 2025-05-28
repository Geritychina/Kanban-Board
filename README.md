# 🗂️ Kanban Board

A simple and modern **Kanban-style task manager** built with **React**, **Tailwind CSS**, and **@dnd-kit**. Supports drag-and-drop and persists tasks in `localStorage`.


## ✨ Features

- 📌 Add and organize tasks into columns (To Do, In Progress, Done)
- 🖱️ Drag and drop tasks between columns
- 💾 Tasks are saved locally in the browser (via `localStorage`)
- 💅 Styled with Tailwind CSS for a clean and responsive UI
- ✨ Smooth transitions and polished interactions

---

#File structure 🗂

<pre>
kanban-board/<br>
├── public/                # Static assets (index.html)<br>
├── src/<br>
│   ├── components/        # Reusable UI components<br>
│   │   ├── Column.jsx     # Kanban column component<br>
│   │   ├── TaskCard.jsx   # Individual task card component<br>
│   ├── App.jsx            # Main application component<br>
│   ├── index.css          # Global CSS (if not using Tailwind exclusively)<br>
│   └── main.jsx           # Entry point (renders App into DOM)<br>
├── index.html             # Base HTML template<br>
├── tailwind.config.js     # Tailwind CSS configuration<br>
├── vite.config.js         # Vite build configuration<br>
└── package.json           # Project dependencies and scripts<br>
</pre>
<br>

---

🛠️ Tech Stack
- React<br>
- Tailwind CSS<br>
- Vite<br>
- React DnD (for drag-and-drop)<br>

---
❗ Don't forget to install node_modules locally! 🔺
--

Made with love by Gergana ™
