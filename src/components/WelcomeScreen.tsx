interface WelcomeScreenProps {
  onStartChat: () => void;
}

const WelcomeScreen = ({ onStartChat }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl animate-fade-up">
        {/* Hero Title */}
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-transparent bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text">
            Your Safe Space
          </span>
          <span className="block text-transparent bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text">
            to Feel Better
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="font-inter text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="glass-card text-center py-10 px-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6">💬</div>
            <h3 className="font-playfair font-semibold text-2xl mb-4 text-primary">Safe Conversations</h3>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed">
              Chat with an AI that understands and supports you
            </p>
          </div>
          
          <div className="glass-card text-center py-10 px-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6">📝</div>
            <h3 className="font-playfair font-semibold text-2xl mb-4 text-secondary">Mood Tracking</h3>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed">
              Keep track of your emotions and see your progress
            </p>
          </div>
          
          <div className="glass-card text-center py-10 px-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-6">🌱</div>
            <h3 className="font-playfair font-semibold text-2xl mb-4 text-accent">Growth Resources</h3>
            <p className="font-inter text-muted-foreground text-lg leading-relaxed">
              Access guided exercises and wellness tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;