
# 🧾 CA Monk – Blog Application (Frontend)

A modern blog application built as part of the **CA Monk Frontend Assignment**, focused on clean UI, scalable architecture, and real-world frontend best practices.

This project demonstrates blog listing, blog detail viewing, and blog creation using a mock backend, with emphasis on UX, performance, and maintainable code.

---

## 🚀 Features Implemented

### 📰 Blog Listing

* Fetch blogs from JSON Server
* Sorted by **latest date**
* Category badges (Finance, Career, Tech, Education, etc.)
* Relative time display (e.g., *2 days ago*)
* Active blog highlighting
* Smooth hover & selection animations
* Keyboard navigation (↑ ↓)
* Auto-scroll selected blog into view
* Loading skeletons for better UX
* Error handling for failed requests

### 📖 Blog Detail View

* Cover image
* Blog title, category & meta info
* Full article content rendering
* Clean typography & spacing
* Share & reaction icons
* Fade-in animation on blog change
* Graceful loading & error states

### ✍️ Create New Blog

* Add new blogs via form
* Category selection 
* Description & content fields
* Cover image URL support
* Auto refresh of blog list using TanStack Query
* Form validation (basic required fields)

### 🎨 UI / UX

* Tailwind CSS styling
* shadcn/ui components
* Responsive layout (desktop & tablet friendly)
* Smooth transitions & animations
* Accessible, readable design

---

## 🛠 Tech Stack

* **React + TypeScript**
* **Vite**
* **TanStack Query (React Query)**
* **JSON Server (Mock Backend)**
* **Tailwind CSS**
* **shadcn/ui**
* **Lucide Icons**

---

## 📂 Project Structure

```
src/
├── components/
│   ├── blog/
│   │   ├── BlogList.tsx
│   │   ├── BlogCard.tsx
│   │   ├── BlogDetail.tsx
│   │   ├── BlogListSkeleton.tsx
│   │   └── categoryConfig.ts
│   └── ui/
├── pages/
│   └── Home.tsx
├── services/
│   └── blogApi.ts
├── types/
│   └── blog.ts
├── utils/
│   └── timeAgo.ts
├── app/
│   └── queryClient.ts
└── index.css
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Swaraj0004/CA-Monk-Frontend.git
cd CA-Monk-Frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start JSON Server (Backend)

```bash
npx json-server --watch db.json --port 3001
```

> If port `3001` is already in use, stop the existing process or change the port.

### 4️⃣ Start Frontend

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 📡 API Endpoints (JSON Server)

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/blogs`     | Fetch all blogs   |
| GET    | `/blogs/:id` | Fetch single blog |
| POST   | `/blogs`     | Create new blog   |

---

## 📸 Screenshots

> Screenshots included in repository:

* Blog list view
* Blog detail view
* Create blog form
* Active blog highlighting

---

## ⚠️ Known Limitations

* No authentication (out of scope)
* No pagination (all blogs loaded)
* Mobile responsiveness can be further optimized
* No automated tests included

---

## 🧠 Design Decisions

* **TanStack Query** for caching, refetching & mutation handling
* **State-driven detail view** for simplicity
* **JSON Server** to simulate real backend behavior
* **Component-first architecture** for scalability
* **Utility-first styling** with Tailwind CSS

---

## 📌 Assignment Requirements Coverage

| Requirement              | Status |
| ------------------------ | ------ |
| Blog list                | ✅      |
| Blog detail view         | ✅      |
| Create blog              | ✅      |
| Loading & error handling | ✅      |
| Clean UI                 | ✅      |
| State management         | ✅      |
| Category handling        | ✅      |
| UX polish                | ✅      |

---

## 👤 Author

**Swaraj**
Frontend Developer
GitHub: [@Swaraj0004](https://github.com/Swaraj0004)

---
