const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const dialogflow = require('@google-cloud/dialogflow');
const ChatMessage = require('./models/ChatMessage');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ouat-chatbot');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'OUAT Chatbot API Server is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});


app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date().toISOString()
  });
});

// Dialogflow Chat Route
app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body || {};
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Invalid request: "message" is required.' });
    }

    const projectId = process.env.DIALOGFLOW_PROJECT_ID;
    const clientEmail = process.env.DIALOGFLOW_CLIENT_EMAIL;
    const privateKeyEnv = process.env.DIALOGFLOW_PRIVATE_KEY || '';
    const privateKey = privateKeyEnv.replace(/\\n/g, '\n');

    if (!projectId || !clientEmail || !privateKey) {
      return res.status(500).json({ error: 'Dialogflow credentials are not configured. Please set DIALOGFLOW_PROJECT_ID, DIALOGFLOW_CLIENT_EMAIL, and DIALOGFLOW_PRIVATE_KEY.' });
    }

    const configs = {
      credentials: {
        client_email: clientEmail,
        private_key: privateKey
      }
    };

    const sessionsClient = new dialogflow.SessionsClient(configs);
    const resolvedSessionId = sessionId || uuidv4();
    const sessionPath = sessionsClient.projectAgentSessionPath(
      projectId,
      resolvedSessionId
    );
    


    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: 'en-US'
        }
      }
    };

    // Persist user message
    await ChatMessage.create({ sessionId: resolvedSessionId, sender: 'user', text: message.trim() });

    const responses = await sessionsClient.detectIntent(request);
    const result = responses && responses[0] && responses[0].queryResult ? responses[0].queryResult : null;

    if (!result) {
      return res.status(502).json({ error: 'No response from Dialogflow.' });
    }

    const fulfillment = result.fulfillmentText || '';

    // Persist bot response
    await ChatMessage.create({ sessionId: resolvedSessionId, sender: 'bot', text: fulfillment || '""' });

    return res.json({
      sessionId: resolvedSessionId,
      fulfillmentText: fulfillment,
      intent: result.intent && result.intent.displayName ? result.intent.displayName : null,
      confidence: result.intentDetectionConfidence,
      languageCode: result.languageCode,
      diagnosticPayload: result.diagnosticInfo || null
    });
  } catch (error) {
    console.error('Dialogflow chat error:', error);
    const status = error.code && Number.isInteger(error.code) ? error.code : 500;
    return res.status(status).json({ error: 'Failed to process chat message.', details: error.message || String(error) });
  }
});

// Chat history route
app.get('/api/chat/history', async (req, res) => {
  try {
    const { sessionId } = req.query || {};
    if (!sessionId || typeof sessionId !== 'string') {
      return res.status(400).json({ error: 'Invalid request: "sessionId" is required.' });
    }

    const history = await ChatMessage.find({ sessionId }).sort({ createdAt: 1 }).lean();
    return res.json({ sessionId, messages: history.map(m => ({ id: m._id, sender: m.sender, text: m.text, createdAt: m.createdAt })) });
  } catch (error) {
    console.error('Fetch chat history error:', error);
    return res.status(500).json({ error: 'Failed to fetch chat history.', details: error.message || String(error) });
  }
});

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
  });
};

startServer();
