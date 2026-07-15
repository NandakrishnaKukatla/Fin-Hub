# Fin-Hub Backend

A production-ready, highly scalable MVC + Service Layer backend architecture built using Node.js, Express, MongoDB, and ES6 Modules.

## Architecture & Directory Tree

The backend has been modularized to adhere strictly to the Single Responsibility Principle, DRY, and SOLID design patterns.

```text
Backend/
│
├── src/
│   ├── config/
│   │     db.js                  # MongoDB Connection & Env Validation
│   │
│   ├── controllers/
│   │     auth.controller.js     # Request Parsing & Response Formatting
│   │
│   ├── routes/
│   │     auth.routes.js         # API Endpoint Route Mapping
│   │
│   ├── models/
│   │     User.js                # Mongoose Database Models & Transforms
│   │
│   ├── services/
│   │     auth.service.js        # Core Business Logic & Database Queries
│   │
│   ├── middlewares/
│   │     auth.middleware.js     # JWT Authorization Route Protection
│   │     error.middleware.js    # Global & 404 Centralized Error Handlers
│   │     validate.middleware.js # express-validator Check Middleware
│   │
│   ├── utils/
│   │     generateToken.js       # JWT Generation Utility
│   │     ApiError.js            # Custom standardized ApiError class
│   │     asyncHandler.js        # Promise-based wrapper for controllers
│   │
│   ├── validators/
│   │     auth.validator.js      # Input field schema definitions
│   │
│   ├── app.js                   # Express application setup & middleware pipelines
│   │
│   └── server.js                # Server entry point & DB bootloader
│
├── .env                         # Local environment configuration
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation (This file)
```

### Folder Explanations

- **`config/`**: Setup files for databases, external APIs, and configuration checkers.
- **`controllers/`**: Receives requests, triggers validation, calls service layer, and writes HTTP responses.
- **`routes/`**: Bridges endpoint paths to controllers. Contains validation hooks.
- **`models/`**: Defines database schemas (Mongoose models) and document-level methods/transforms.
- **`services/`**: Pure business logic (e.g. hashing, querying DB, external API requests). Separates business logic from the HTTP layer.
- **`middlewares/`**: Code that runs in between requests and endpoints (e.g. security, error formatting, parsing).
- **`utils/`**: Shared stateless helper functions (e.g., token generation, wrappers, custom error classes).
- **`validators/`**: Rules describing valid request payloads.

---

## Getting Started

### Prerequisites
- Node.js **v18+** (Recommended: **v22.19.0+**)
- MongoDB instance (Atlas or local)

### Installation
1. Clone/Navigate to the Backend directory:
   ```bash
   cd Backend
   ```
2. Install npm packages:
   ```bash
   npm install
   ```

### Configure `.env`
Create a `.env` file in the root `Backend` directory containing:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

### Running the App
- **Development Mode** (with Nodemon hot-reload):
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm start
  ```

---

## API Endpoints

All auth responses are prefixed with `/api/auth`.

### 1. Register User
- **URL**: `POST /api/auth/register`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Success Response (201 Created)**:
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "id": "64b1f48612fa521a00a12e34",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

### 2. Login User
- **URL**: `POST /api/auth/login`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword123"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "token": "eyJhbGciOi...",
    "user": {
      "id": "64b1f48612fa521a00a12e34",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "data": {
      "token": "eyJhbGciOi...",
      "user": {
        "id": "64b1f48612fa521a00a12e34",
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
  }
  ```

### 3. Google OAuth Authentication
- **URL**: `POST /api/auth/google`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "token": "google_access_token"
  }
  ```
- **Success Response (200 OK)**:
  ```json
  {
    "success": true,
    "message": "Google login successful",
    "token": "eyJhbGciOi...",
    "user": {
      "id": "64b1f48612fa521a00a12e35",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "picture": "https://lh3.googleusercontent.com/..."
    },
    "data": {
      "token": "eyJhbGciOi...",
      "user": {
        "id": "64b1f48612fa521a00a12e35",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "picture": "https://lh3.googleusercontent.com/..."
      }
    }
  }
  ```

---

## Standard Error Response Format

All error payloads consistently follow the structure below (using status codes: `400` Bad Request, `401` Unauthorized, `404` Not Found, `500` Server Error):

```json
{
  "success": false,
  "message": "Validation Failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    },
    {
      "field": "password",
      "message": "Password must be at least 6 characters long"
    }
  ]
}
```

---

## Best Practices Used

1. **Centralized Error Handling**: An Express error middleware is used in conjunction with a custom `ApiError` class.
2. **Controller Wrappers**: The standard `asyncHandler` is used to resolve promises, keeping controller code clean and dry of try/catch repetition.
3. **Mongoose toJSON Hook**: Strips security-sensitive hashes (like passwords) and database versions automatically before transmission.
4. **Environment Safety**: Compiles verification steps on boot to prevent server spin-up if configuration variables (`MONGO_URI`, `JWT_SECRET`, `PORT`) are missing.
5. **Security Enforcement**: Incorporates `helmet` headers, strictly configures CORS, and adds API rate-limiting via `express-rate-limit`.
6. **Robust Input Sanitization**: Leverages `express-validator` middleware layers to enforce parameter structures prior to routing trigger.
