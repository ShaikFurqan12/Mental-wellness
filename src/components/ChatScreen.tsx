import { useState } from "react";
import { Send, Mic, MoreHorizontal, Heart } from "lucide-react";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', content: "Hi there! I'm here to listen and support you. How are you feeling today? 💙", time: '2:30 PM' },
    { id: 2, type: 'teen', content: "Hey! I'm feeling a bit overwhelmed with school stuff lately...", time: '2:32 PM' },
    { id: 3, type: 'ai', content: "I hear you - school can definitely feel overwhelming sometimes. That's completely normal. Would you like to talk about what's making you feel this way? Sometimes just sharing can help lighten the load. 🌟", time: '2:33 PM' },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: 'teen',
      content: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: "Thank you for sharing that with me. Your feelings are valid, and I'm here to support you. 💜",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="glass p-4 m-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
              <Heart size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-semibold">Wellness Companion</h2>
              <p className="text-sm text-muted-foreground">Always here for you</p>
            </div>
          </div>
          <button className="glow-button px-4 py-2 text-sm text-white">
            Get Help
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-2 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === 'teen' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] animate-fade-up ${
                msg.type === 'teen' 
                  ? 'chat-bubble-teen text-white' 
                  : 'chat-bubble-ai text-foreground'
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.content}</p>
              <p className={`text-xs mt-1 opacity-75 ${
                msg.type === 'teen' ? 'text-white/70' : 'text-muted-foreground'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4">
        <div className="glass rounded-2xl p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="w-full bg-transparent resize-none outline-none text-sm placeholder-muted-foreground"
                rows={1}
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-accent/20 transition-colors">
                <Mic size={18} className="text-muted-foreground" />
              </button>
              <button
                onClick={handleSend}
                className="glow-button px-4 py-2 text-sm text-white"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;