# 📊 Full-Stack Analytics Dashboard

A MERN‑based analytics dashboard to track key performance metrics in real time.  
This project includes a backend API with seeded MongoDB data and a React frontend for visualization.

---

## 🚀 Features
- **Backend (Node.js + Express + MongoDB)**
  - REST API for analytics data
  - Seed script to populate sample metrics
- **Frontend (React + Recharts)**
  - Responsive line chart visualization
  - Metrics: Users, Revenue, Sessions, BounceRate
- **Clean UI**
  - Modern card layout
  - Tooltips, legends, and smooth curves

---

### 🖼️ Dashboard Preview
Interactive line chart

Four colorful curves

Real‑time metrics tracking

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repo
```bash
  git clone https://github.com/ronaksharma2908/full-stack-analytics-app.git
  cd full-stack-analytics-app

### 2️⃣ Backend Setup
  ```bash
  cd backend
  npm install
  Create a .env file:

env
MONGO_URI=mongodb://127.0.0.1:27017/analyticsdb
PORT=5000
Seed the database:

bash
node seed.js
Start backend:

bash
npm run dev

3️⃣ Frontend Setup
bash
cd ../frontend
npm install
npm run dev
Open browser at:

Code
http://localhost:5173

