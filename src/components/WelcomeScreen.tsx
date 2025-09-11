interface WelcomeScreenProps {
  onStartChat: () => void;
}

const WelcomeScreen = ({ onStartChat }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Title and Tagline - Outside Card */}
      <div className="text-center max-w-4xl mb-8">
        <h1 className="font-inter text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
          Let's make your mental wellness a{' '}
          <span className="text-green-500">reality.</span>
          <br />
          Right now.
        </h1>
        
        <p className="font-inter text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Your AI companion for mental wellness. Chat, reflect, and grow with personalized support designed just for you.
          <br />
          No judgment. Just support.
        </p>
      </div>

      {/* Card with Input and Suggestions */}
      <div className="bg-white rounded-3xl shadow-xl p-8 text-center max-w-2xl w-full animate-fade-up">
        {/* Input Field */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="How are you feeling today?"
              className="flex-1 text-base text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
              onKeyDown={(e) => e.key === 'Enter' && onStartChat()}
            />
            <button
              onClick={onStartChat}
              className="bg-orange-400 hover:bg-orange-500 text-white p-2 rounded-xl transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>

        {/* Suggestion Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          <button 
            onClick={onStartChat}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200"
          >
            I'm feeling anxious
          </button>
          <button 
            onClick={onStartChat}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200"
          >
            Need motivation
          </button>
          <button 
            onClick={onStartChat}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200"
          >
            Mood tracking
          </button>
          <button 
            onClick={onStartChat}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200"
          >
            Breathing exercises
          </button>
          <button 
            onClick={onStartChat}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all duration-200 border border-gray-200"
          >
            Self-reflection
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;