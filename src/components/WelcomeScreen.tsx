interface WelcomeScreenProps {
  onStartChat: () => void;
}

const WelcomeScreen = ({ onStartChat }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl animate-fade-up">
        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
          Your Safe Space
          <br />
          <span className="text-primary">to Feel Better</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
          A companion for your mental wellness journey. Chat, reflect, and grow with personalized support designed just for you.
        </p>

        {/* CTA Button */}
        <button
          onClick={onStartChat}
          className="glow-button ripple text-white text-lg animate-glow-pulse"
        >
          Start Chatting ✨
        </button>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-semibold text-lg mb-2">Safe Conversations</h3>
            <p className="text-muted-foreground text-sm">
              Chat with an AI that understands and supports you
            </p>
          </div>
          
          <div className="glass-card text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="font-semibold text-lg mb-2">Mood Tracking</h3>
            <p className="text-muted-foreground text-sm">
              Keep track of your emotions and see your progress
            </p>
          </div>
          
          <div className="glass-card text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="font-semibold text-lg mb-2">Growth Resources</h3>
            <p className="text-muted-foreground text-sm">
              Access guided exercises and wellness tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;