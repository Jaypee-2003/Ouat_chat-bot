import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const toggleOpen = () => {
    if (isOpen) {
      // When closing chat, clear messages and session
      setMessages([]);
      setSessionId(null);
      localStorage.removeItem('ouat_chat_session');
    }
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  // Initialize sessionId only when chat is opened
  useEffect(() => {
    if (isOpen && !sessionId) {
      const newId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
      setSessionId(newId);
    }
  }, [isOpen, sessionId]);

  // Remove history fetching since we want fresh chat each time
  // useEffect(() => {
  //   const fetchHistory = async () => {
  //     if (!isOpen || !sessionId) return;
  //     try {
  //       const res = await axios.get('/api/chat/history', { params: { sessionId } });
  //       const history = Array.isArray(res?.data?.messages) ? res.data.messages : [];
  //       const normalized = history.map((m) => ({ id: m.id || String(m._id || Math.random()), sender: m.sender, text: m.text, createdAt: m.createdAt }));
  //       setMessages(normalized);
  //     } catch (err) {
  //       // ignore history errors for UX
  //     }
  //   };
  //   fetchHistory();
  // }, [isOpen, sessionId]);

  const handleSend = async (e) => {
    e.preventDefault();
    const text = message.trim();
    if (!text || isSending) return;

    const userMsg = { id: Date.now().toString(), sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setMessage('');

    try {
      setIsSending(true);
      const response = await axios.post('/api/chat', { message: text, sessionId });
      const returnedSession = response?.data?.sessionId;
      if (returnedSession && returnedSession !== sessionId) {
        setSessionId(returnedSession);
      }
      const botText = response?.data?.fulfillmentText || 'Sorry, I could not understand that.';
      const botMsg = { id: `${userMsg.id}-bot`, sender: 'bot', text: botText };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      const botMsg = { id: `${userMsg.id}-err`, sender: 'bot', text: 'There was an error contacting the assistant. Please try again.' };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        aria-label="Open chat"
        onClick={toggleOpen}
        className="h-14 w-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center transition"
      >
        {/* Chat Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M7.5 8.25h9a.75.75 0 010 1.5h-9a.75.75 0 010-1.5zm0 3h9a.75.75 0 010 1.5h-9a.75.75 0 010-1.5zm0 3h5.25a.75.75 0 010 1.5H7.5a.75.75 0 010-1.5z" />
          <path fillRule="evenodd" d="M4.5 3A2.25 2.25 0 002.25 5.25v10.5A2.25 2.25 0 004.5 18h2.69a.75.75 0 01.53.22l3.84 3.84a.75.75 0 001.28-.53v-2.78a.75.75 0 01.75-.75H19.5A2.25 2.25 0 0021.75 15.75V5.25A2.25 2.25 0 0019.5 3h-15z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-3 w-[22rem] sm:w-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-green-700 text-white px-4 py-3 flex items-center justify-between">
            <div className="font-semibold">Ask OUAT AI Assistant</div>
            <button
              aria-label="Close chat"
              onClick={toggleOpen}
              className="text-white/80 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto bg-gray-50 px-4 py-3 space-y-3">
            {messages.length === 0 && (
              <div className="text-sm text-gray-600">Hi! Ask me anything about OUAT.</div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[75%] rounded-lg px-3 py-2 text-sm shadow-sm ${m.sender === 'user' ? 'bg-green-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-lg px-3 py-2 text-sm shadow-sm bg-white text-gray-800 border border-gray-200">
                  <span className="inline-flex items-center gap-1">
                    <span>Typing</span>
                    <span className="inline-flex">
                      <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce ml-1" style={{ animationDelay: '120ms' }}></span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full animate-bounce ml-1" style={{ animationDelay: '240ms' }}></span>
                    </span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="border-t border-gray-200 bg-white px-3 py-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center gap-1 rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="h-4 w-4">
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.5 14A.5.5 0 0 1 10 15a.5.5 0 0 1-.474-.342L7.37 9.63.342 6.474A.5.5 0 0 1 .5 5.5a.5.5 0 0 1 .146-.146l15-5.5a.5.5 0 0 1 .208-.04zM6.832 10.555l2.122 3.535L13.722 2.28zM13.72 2.28 2.91 9.045l3.535 2.122z" />
                </svg>
                {isSending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;


