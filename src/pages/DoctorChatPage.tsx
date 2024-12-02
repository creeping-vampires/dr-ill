import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, ArrowLeft, Send } from 'lucide-react';

const DoctorChatPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      type: 'doctor',
      content: "Hello anon, I'm Dr. ILL. I see you've made some questionable trading decisions. Let's talk about your portfolio trauma. What's keeping you up at night?"
    }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setChatHistory(prev => [...prev, { type: 'user', content: message }]);

    // Simulate doctor's response
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'doctor',
        content: "Interesting... Have you considered that your portfolio isn't the problem? Maybe it's your decision-making process that needs a prescription of common sense."
      }]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            <span className="text-xl">Back</span>
          </motion.button>
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-primary">Dr. ILL</span>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Chat Area */}
      <div className="pt-20 pb-24 max-w-4xl mx-auto px-4">
        <div className="space-y-6 py-8">
          {chatHistory.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                  msg.type === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p className="text-lg">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell Dr. ILL about your trading trauma..."
              className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 text-lg focus:outline-none focus:border-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-xl flex items-center"
            >
              <Send className="h-6 w-6" />
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorChatPage;