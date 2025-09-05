<div align="center">

# 🌿 OUAT Chatbot · MERN · Tailwind

Modern, fast, and future-ready chatbot foundation for Orissa University of Agriculture & Technology.

<br/>

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&labelColor=20232a)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38bdf8?logo=tailwindcss&logoColor=white&labelColor=0b1220)
![Node](https://img.shields.io/badge/Node.js-18-5fa04e?logo=node.js&logoColor=white&labelColor=1b1f24)
![Express](https://img.shields.io/badge/Express-5-ffffff?logo=express&logoColor=black&labelColor=1b1f24)
![MongoDB](https://img.shields.io/badge/MongoDB-6-00ed64?logo=mongodb&logoColor=white&labelColor=1b1f24)
![License: MIT](https://img.shields.io/badge/License-MIT-blue)

<sub>Clean architecture · Developer-friendly DX · Ready for rapid iteration</sub>

</div>

---

## ✨ Highlights
- ⚡️ Blazing-fast React frontend with Tailwind UI
- 🧠 Scalable Node + Express API with Dialogflow integration
- 🗄️ MongoDB + Mongoose for chat history persistence
- 💬 Real-time chat widget with typing indicators
- 🧩 Clean, modular file structure
- 🛠️ One-command dev workflow with concurrently
- 📱 Responsive, modern landing page (OUAT-themed)
- 🤖 AI-powered chatbot with session management

## 🗂️ Project Structure
```
ouat-chatbot/
├── client/                 # React + Tailwind frontend
│   ├── src/components/     # Hero, About, Courses, Contact, Footer, ChatWidget
│   ├── src/index.css       # Tailwind entry
│   └── tailwind.config.js
├── server/                 # Node + Express backend
│   ├── models/             # Mongoose models (ChatMessage)
│   ├── config/database.js  # MongoDB connection
│   └── index.js            # App entry + API routes
├── package.json            # Root scripts (concurrently)
└── README.md
```

## 🚀 Quick Start
```bash
# 1) Install everything (root, client, server)
npm run install-all

# 2) Run client + server together
npm run dev

# Frontend → http://localhost:3000
# Backend  → http://localhost:5000/api/health
```

## 🔧 Environment
Create a `.env` file in the `server/` directory and set:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/ouat-chatbot

# Dialogflow Configuration (Required for chatbot)
DIALOGFLOW_PROJECT_ID=your-project-id
DIALOGFLOW_CLIENT_EMAIL=service-account@your-project-id.iam.gserviceaccount.com
DIALOGFLOW_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Optional (future use)
JWT_SECRET=your-super-secret-jwt-key
CLIENT_URL=http://localhost:3000
SERVER_URL=http://localhost:5000
```

## 🧭 Available Scripts
- `npm run dev` → Run client and server together
- `npm run server` → Start backend only
- `npm run client` → Start frontend only
- `npm run install-all` → Install dependencies (root → client → server)

## 🌐 API Endpoints
- `GET /` → Welcome message
- `GET /api/health` → Health check (includes DB status)
- `POST /api/chat` → Send message to Dialogflow chatbot
  - Body: `{ "message": "Hello", "sessionId": "optional" }`
  - Returns: `{ "sessionId", "fulfillmentText", "intent", "confidence" }`
- `GET /api/chat/history?sessionId=...` → Get chat history for a session

## 🖥️ Frontend Features
- **Landing Page**: Hero with branding, About, Courses, Contact, Footer
- **Chat Widget**: 
  - Floating chat button (bottom-right)
  - Persistent session management
  - Real-time typing indicators
  - Chat history persistence
  - User messages (right), bot responses (left)
  - Auto-scroll to latest message

## 🧱 Tech Stack
- **Frontend**: React 18, Tailwind CSS, Axios
- **Backend**: Node.js, Express 5, Dialogflow SDK
- **Database**: MongoDB, Mongoose 8
- **Dev Tools**: Nodemon, Concurrently

## 🗺️ Roadmap
- [x] Chatbot core (Dialogflow integration, UI, persistence)
- [x] Session management and chat history
- [x] Real-time typing indicators
- [ ] Authentication (JWT)
- [ ] Role-based admin dashboard
- [ ] Enhanced Dialogflow intents and flows
- [ ] Realtime messaging (Socket.io)
- [ ] CI/CD & cloud deploy

## 🆘 Troubleshooting
- **Port in use** → change `PORT` in `.env`
- **MongoDB not connecting** → ensure MongoDB is running or update `MONGODB_URI`
- **CSS not applying** → confirm Tailwind directives in `client/src/index.css`
- **Dialogflow errors** → verify `DIALOGFLOW_PROJECT_ID`, `DIALOGFLOW_CLIENT_EMAIL`, and `DIALOGFLOW_PRIVATE_KEY` in `.env`
- **Chat not working** → check browser console for API errors and ensure server is running

## 🚀 Getting Started with Dialogflow

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Dialogflow API**:
   - Navigate to APIs & Services → Library
   - Search for "Dialogflow API" and enable it

3. **Create Service Account**:
   - Go to IAM & Admin → Service Accounts
   - Create a new service account with Dialogflow API access
   - Download the JSON key file

4. **Create Dialogflow Agent**:
   - Go to [Dialogflow Console](https://dialogflow.cloud.google.com/)
   - Create a new agent linked to your Google Cloud project

5. **Configure Environment**:
   - Extract `project_id`, `client_email`, and `private_key` from the JSON key file
   - Add them to your `server/.env` file as shown above

## 💬 Usage
1. Start the application: `npm run dev`
2. Open http://localhost:3000
3. Click the chat button (bottom-right)
4. Start chatting with the OUAT AI Assistant!

## 📜 License
MIT — see LICENSE for details.

---

Made with 🌿 for OUAT and the future of agri-tech.


