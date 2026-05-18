# Recipe & Inventory App

## Getting Started

### 1. Configure Environment Variables
You will need a Google Client ID for Authentication.

**Backend (`backend/.env`):**
```
DATABASE_URL="file:./dev.db"
GOOGLE_CLIENT_ID="your_google_client_id_here"
JWT_SECRET="your_secret_key"
```

**Frontend (`frontend/.env`):**
```
VITE_GOOGLE_CLIENT_ID="your_google_client_id_here"
VITE_API_URL="http://localhost:3001/api"
```

### 2. Run the App
Start both development servers from their respective directories:

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd frontend
npm run dev
```
