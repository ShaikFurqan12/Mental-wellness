import { useState } from "react";
import { Heart, MessageCircle, Send, User } from "lucide-react";

interface Thought {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
  isLiked: boolean;
  replies: Reply[];
}

interface Reply {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
}

const CommunityScreen = () => {
  const [newThought, setNewThought] = useState("");
  const [thoughts, setThoughts] = useState<Thought[]>([
    {
      id: "1",
      author: "Alex M.",
      content: "Just wanted to share that meditation really helped me today. Even 5 minutes made a difference in my anxiety levels.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: "r1",
          author: "Sam K.",
          content: "That's amazing! Which meditation app do you use?",
          timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
        }
      ]
    },
    {
      id: "2",
      author: "Jordan L.",
      content: "Having a tough day but grateful for this supportive community. Your stories give me hope.",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      likes: 8,
      isLiked: true,
      replies: []
    },
    {
      id: "3",
      author: "Taylor R.",
      content: "Reminder: It's okay to not be okay sometimes. You're not alone in this journey. 💚",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      likes: 24,
      isLiked: false,
      replies: []
    }
  ]);
  const [replyContent, setReplyContent] = useState<{ [key: string]: string }>({});
  const [showReplies, setShowReplies] = useState<{ [key: string]: boolean }>({});

  const handleSubmitThought = () => {
    if (newThought.trim()) {
      const thought: Thought = {
        id: Date.now().toString(),
        author: "You",
        content: newThought,
        timestamp: new Date(),
        likes: 0,
        isLiked: false,
        replies: []
      };
      setThoughts([thought, ...thoughts]);
      setNewThought("");
    }
  };

  const handleLike = (thoughtId: string) => {
    setThoughts(thoughts.map(thought => 
      thought.id === thoughtId 
        ? { 
            ...thought, 
            isLiked: !thought.isLiked, 
            likes: thought.isLiked ? thought.likes - 1 : thought.likes + 1 
          }
        : thought
    ));
  };

  const handleReply = (thoughtId: string) => {
    const content = replyContent[thoughtId];
    if (content?.trim()) {
      const reply: Reply = {
        id: Date.now().toString(),
        author: "You",
        content,
        timestamp: new Date()
      };
      
      setThoughts(thoughts.map(thought => 
        thought.id === thoughtId 
          ? { ...thought, replies: [...thought.replies, reply] }
          : thought
      ));
      
      setReplyContent({ ...replyContent, [thoughtId]: "" });
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours === 1) return "1 hour ago";
    return `${diffInHours} hours ago`;
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
          <p className="text-gray-600">Share your thoughts and support others on their wellness journey</p>
        </div>

        {/* Share Your Thought */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Share your thoughts</h2>
          <textarea
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
            placeholder="What's on your mind today?"
            className="w-full p-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows={3}
            maxLength={280}
          />
          <div className="flex justify-between items-center mt-3">
            <span className="text-sm text-gray-500">{newThought.length}/280</span>
            <button
              onClick={handleSubmitThought}
              disabled={!newThought.trim()}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>

        {/* Thoughts Feed */}
        <div className="space-y-4">
          {thoughts.map((thought) => (
            <div key={thought.id} className="bg-white rounded-2xl shadow-lg p-6">
              {/* Thought Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{thought.author}</h3>
                  <p className="text-sm text-gray-500">{formatTimeAgo(thought.timestamp)}</p>
                </div>
              </div>

              {/* Thought Content */}
              <p className="text-gray-800 mb-4">{thought.content}</p>

              {/* Actions */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => handleLike(thought.id)}
                  className={`flex items-center gap-2 transition-colors duration-200 ${
                    thought.isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${thought.isLiked ? 'fill-current' : ''}`} />
                  <span className="text-sm">{thought.likes}</span>
                </button>
                
                <button
                  onClick={() => setShowReplies({ ...showReplies, [thought.id]: !showReplies[thought.id] })}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{thought.replies.length}</span>
                </button>
              </div>

              {/* Replies */}
              {showReplies[thought.id] && (
                <div className="mt-4 space-y-3">
                  {/* Reply Input */}
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={replyContent[thought.id] || ""}
                      onChange={(e) => setReplyContent({ ...replyContent, [thought.id]: e.target.value })}
                      placeholder="Write a supportive reply..."
                      className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      onKeyDown={(e) => e.key === 'Enter' && handleReply(thought.id)}
                    />
                    <button
                      onClick={() => handleReply(thought.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Existing Replies */}
                  {thought.replies.map((reply) => (
                    <div key={reply.id} className="bg-gray-50 rounded-lg p-3 ml-6">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-medium text-sm text-gray-900">{reply.author}</span>
                        <span className="text-xs text-gray-500">{formatTimeAgo(reply.timestamp)}</span>
                      </div>
                      <p className="text-gray-800 text-sm ml-8">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityScreen;
