# JWT Authentication System

A full-stack authentication app with Node.js/Express backend and React frontend using JWT & bcrypt.

## Quick Start

### Backend Setup
```bash
cd Backend
npm install
npm run dev  # Server runs on http://localhost:8000
```

**Create `.env` file:**
```env
PORT=8000
JWT_SECRET=your_secret_key
BCRYPT_ROUNDS=10
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev  # Frontend runs on http://localhost:5173
```

## Tech Stack

| Backend | Frontend |
|---------|----------|
| Node.js v20 | React 18 |
| Express 5.2 | Vite 5.1 |
| JWT | Framer Motion |
| bcrypt 6.0 | CSS3 |
| PostgreSQL | ES6 Modules |

## Project Structure

```
Backend/
├── index.js           # Main server
├── routes/            # API routes
├── middleware/        # Auth logic
├── config/            # Configuration
└── services/          # Business logic

Frontend/
├── src/
│   ├── Login.jsx           # Login page
│   ├── Dashboard.jsx       # Dashboard
│   └── components/
│       ├── AnimatedBackground.jsx
│       └── CustomCursor.jsx
```

## API Endpoints

| Method | Route | Status |
|--------|-------|--------|
| `POST` | `/login` | ✅ In Progress |
| `POST` | `/register` | 🚀 Coming |
| `POST` | `/logout` | 🚀 Coming |
| `GET` | `/profile` | 🚀 Coming |

**Login Example:**
```bash
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@test.com","password":"pass123"}'
```

## Features Done ✅

- Express server with CORS
- Password hashing (bcrypt)
- Login endpoint structure
- React + Vite frontend
- Animated UI components
- Environment config with dotenv

## Features TODO 🚀

- JWT token generation & verification
- User registration
- Token refresh
- Protected routes
- Database integration (PostgreSQL)
- Login form validation
- Dashboard completion

## Security

- Passwords hashed with bcrypt (10 rounds)
- Sensitive data in `.env`
- CORS enabled
- JWT for stateless auth

## Issues & Solutions

| Problem | Solution |
|---------|----------|
| Module not found | Ensure imports use `.js` extension |
| Port in use | Change PORT in `.env` |
| CORS error | Check frontend URL is allowed |

## Development

```bash
# Watch mode (auto-restart)
npm run dev

# Build frontend
cd Frontend && npm run build
```

