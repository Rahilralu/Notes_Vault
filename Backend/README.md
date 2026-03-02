# JWT Authentication Backend

A Node.js/Express backend for JWT-based authentication with password hashing using bcrypt.

## Prerequisites

- Node.js v20 or higher
- npm or yarn
- PostgreSQL (for database)

## Installation

```bash
npm install
```

This will install all required dependencies:
- **express** - Web framework
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing
- **bcrypt** - Password hashing
- **pg** - PostgreSQL client
- **nodemon** - Development server with auto-reload

## Environment Setup

Create a `.env` file in the Backend directory:

```env
PORT=8000
JWT_SECRET=your_secret_key_here
BCRYPT_ROUNDS=10
DB_HOST=localhost
DB_PORT=5432
DB_NAME=jwt_auth
DB_USER=postgres
DB_PASSWORD=your_password
```

## Running the Server

### Development Mode
```bash
npm run dev
```
Server will run on `http://localhost:8000` with auto-reload on file changes.

### Production Mode
```bash
node index.js
```

## Project Structure

```
Backend/
├── index.js              # Main server entry point
├── config/
│   └── config.js         # Configuration settings
├── middleware/
│   └── middleware.js     # Authentication & request validation
├── routes/
│   └── routes.js         # API route definitions
├── services/             # Business logic layer
└── package.json          # Dependencies & scripts
```

## API Endpoints

### Authentication Routes

**POST /login**
- Authenticates user with email and password
- Payload:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- Response: JWT token (if credentials valid)

**POST /register** *(Coming Soon)*
- Register new user account
- Requires email validation

**POST /logout** *(Coming Soon)*
- Invalidate user token

**GET /profile** *(Coming Soon)*
- Retrieve authenticated user profile
- Requires valid JWT token

## Architecture

### Middleware Layer
Handles:
- Request validation
- Password verification
- JWT token generation & verification
- Authentication guards

### Routes Layer
- Defines HTTP endpoints
- Maps requests to appropriate handlers
- Middleware chaining

### Services Layer
- User authentication logic
- Database queries
- Business rules

### Config Layer
- Environment variables
- Database configuration
- Security settings

## Security Features

✅ **Password Hashing**
- bcrypt with 10 rounds (configurable via BCRYPT_ROUNDS)
- Never stores plain text passwords

✅ **CORS Configuration**
- Configured for frontend domain access
- Prevents unauthorized requests

✅ **Environment Variables**
- Sensitive data in `.env` (not in git)
- Configuration externalized from code

🚀 **JWT Implementation** *(In Progress)*
- Stateless authentication
- Token expiration
- Refresh token rotation

## Usage Examples

### Login Request
```bash
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

### Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

## Database Schema *(To Be Implemented)*

**users table**
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Development Workflow

1. **Make changes** to route/middleware/service files
2. **Server auto-reloads** (nodemon watches files)
3. **Test with curl** or Postman
4. **Check console logs** for errors

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| `Cannot find module` | Run `npm install` |
| `CORS errors` | Check CORS config in index.js |
| `Port already in use` | Change PORT in .env |
| `dotenv not loading` | Ensure `.env` exists in Backend root |
| `bcrypt errors` | Rebuild: `npm rebuild bcrypt` |

## Scripts

```bash
npm run dev    # Start development server
npm run test   # Run with nodemon
npm start      # Production start (if configured)
```

## Next Steps

- [ ] Implement JWT token generation
- [ ] Add Register endpoint
- [ ] Create protected routes middleware
- [ ] Setup PostgreSQL connection
- [ ] Add input validation
- [ ] Setup error handling
- [ ] Add logging

## Contributing

Follow the existing code structure and naming conventions:
- Use ES6 modules (`import`/`export`)
- Organize code by layer (routes → middleware → services)
- Add descriptive comments for complex logic
- Test endpoints with curl or Postman

## License

ISC
