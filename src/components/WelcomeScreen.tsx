interface WelcomeScreenProps {
  onStartChat: () => void;
}

const WelcomeScreen = ({ onStartChat }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-purple-100 via-blue-50 to-orange-100">
      <div className="text-center max-w-4xl animate-fade-up">
        {/* Hero Title */}
        <h1 className="font-inter text-5xl md:text-7xl font-bold mb-8 leading-tight text-gray-900">
          Let's make your mental wellness a{' '}
          <span className="text-green-500">reality.</span>
          <br />
          Right now.
        </h1>
        
        {/* Tagline */}
        <p className="font-inter text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
          Your AI companion for mental wellness. Chat, reflect, and grow with personalized support designed just for you.
          <br />
          No judgment. Just support.
        </p>

        {/* Input Field */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="How are you feeling today?"
              className="flex-1 text-lg text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
              onKeyDown={(e) => e.key === 'Enter' && onStartChat()}
            />
            <button
              onClick={onStartChat}
              className="bg-orange-400 hover:bg-orange-500 text-white p-3 rounded-xl transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>

        {/* Suggestion Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button 
            onClick={onStartChat}
            className="px-6 py-3 bg-white/70 hover:bg-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md border border-gray-200"
          >
            I'm feeling anxious
          </button>
          <button 
            onClick={onStartChat}
            className="px-6 py-3 bg-white/70 hover:bg-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md border border-gray-200"
          >
            Need motivation
          </button>
          <button 
            onClick={onStartChat}
            className="px-6 py-3 bg-white/70 hover:bg-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md border border-gray-200"
          >
            Mood tracking
          </button>
          <button 
            onClick={onStartChat}
            className="px-6 py-3 bg-white/70 hover:bg-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md border border-gray-200"
          >
            Breathing exercises
          </button>
          <button 
            onClick={onStartChat}
            className="px-6 py-3 bg-white/70 hover:bg-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md border border-gray-200"
          >
            Self-reflection
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;