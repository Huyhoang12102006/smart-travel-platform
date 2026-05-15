# 🌏 Smart Travel — Restaurant Discovery & Ride Platform

> Nền tảng gợi ý nhà hàng thông minh kết hợp gọi xe cho khách du lịch

[![CI](https://github.com/your-org/smart-travel-platform/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/smart-travel-platform/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📋 Giới thiệu

**Smart Travel** là web platform cho phép khách du lịch:
- 🔍 Tìm kiếm nhà hàng theo GPS trong bán kính 20km
- 🤖 Nhận gợi ý cá nhân hóa bằng AI
- 🚗 Gọi xe đến nhà hàng trực tiếp từ app
- 💳 Thanh toán tiền mặt hoặc ví điện tử
- ⭐ Xem thực đơn, đánh giá, hình ảnh thực tế

---

## 🏗 Tech Stack

| Layer | Công nghệ |
|---|---|
| Frontend | React 18 + Vite + TailwindCSS |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas + Mongoose |
| Real-time | Socket.io (ride tracking) |
| Auth | JWT + bcrypt |
| Storage | Cloudinary (media) |
| Deploy | Vercel (FE) + Render (BE) |

---

## 🚀 Cài đặt & Chạy Local

### Yêu cầu
- Node.js >= 18
- MongoDB Atlas account (hoặc local MongoDB)
- Git

### 1. Clone repo
```bash
git clone https://github.com/your-org/smart-travel-platform.git
cd smart-travel-platform
```

### 2. Cài backend
```bash
cd backend
cp .env.example .env       # Điền thông tin vào .env
npm install
npm run dev                # Chạy trên http://localhost:5000
```

### 3. Cài frontend
```bash
cd frontend
cp .env.example .env
npm install
npm run dev                # Chạy trên http://localhost:5173
```

### 4. Chạy với Docker (khuyến nghị)
```bash
docker-compose up --build
```

---

## 🗂 Cấu trúc Project

```
smart-travel/
├── frontend/          # React SPA
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/  # API calls
│       └── store/     # State management
├── backend/           # Express API
│   └── src/
│       ├── modules/   # Feature modules
│       ├── middleware/
│       └── services/
├── database/          # Schemas & seeds
├── docs/              # API docs, diagrams
└── docker-compose.yml
```

---

## 🌿 Git Workflow

```
main        ← Production (merge từ develop sau review)
develop     ← Integration (feature branches merge vào đây)
feature/*   ← Tính năng mới
hotfix/*    ← Sửa bug khẩn
```

### Commit format
```
feat(module): mô tả ngắn
fix(wallet): sửa lỗi tính phí
docs(api): cập nhật swagger
refactor(auth): tách middleware
```

---

## 📡 API Documentation

Sau khi chạy backend, truy cập:
- Swagger UI: `http://localhost:5000/api-docs`
- Postman Collection: `/docs/api/smart-travel.postman_collection.json`

### Endpoints chính

```
POST /api/auth/register
POST /api/auth/login
GET  /api/search?lat=&lng=&radius=&keyword=
GET  /api/merchant/:id
POST /api/ride/create
PUT  /api/ride/:id/status
GET  /api/wallet/balance
GET  /api/wallet/history
```

---

## 👥 Nhóm phát triển

| Thành viên | Vai trò | Module phụ trách |
|---|---|---|
| Thành viên 1 | Team Leader | DevOps, CI/CD, Architecture |
| Thành viên 2 | FE Developer | Discovery, Search, Merchant Detail |
| Thành viên 3 | FE Developer | Ride Tracking, Wallet, Admin UI |
| Thành viên 4 | BE Developer | Auth, Discovery API, GIS Service |
| Thành viên 5 | BE Developer | Ride State Machine, Wallet API |
| Thành viên 6 | DB/AI Developer | Schema, Geospatial, AI Recommendation |
| Thành viên 7 | Tester/Docs | Testing, API Docs, Báo cáo |

---

## 📄 License

MIT © 2025 Smart Travel Team
