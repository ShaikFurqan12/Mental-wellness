import { Flower2, Brain, Puzzle, Users, Play, Clock, BookOpen } from "lucide-react";

const ResourcesScreen = () => {
  const exercises = [
    {
      icon: Flower2,
      title: "Breathing Exercise",
      description: "Calm your mind with guided breathing techniques",
      duration: "5 min",
      color: "from-green-400 to-blue-400"
    },
    {
      icon: Brain,
      title: "Mindfulness",
      description: "Present moment awareness and meditation",
      duration: "10 min",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Puzzle,
      title: "CBT Challenge",
      description: "Reframe negative thoughts with cognitive exercises",
      duration: "15 min",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Connect with others in your wellness journey",
      duration: "Ongoing",
      color: "from-orange-400 to-red-400"
    }
  ];

  const wellnessTips = [
    {
      title: "Daily Grounding",
      tip: "Try the 5-4-3-2-1 technique: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.",
      icon: "🌱"
    },
    {
      title: "Sleep Hygiene", 
      tip: "Keep a consistent sleep schedule and create a calming bedtime routine. Your brain needs rest to process emotions.",
      icon: "😴"
    },
    {
      title: "Movement Matters",
      tip: "Even 10 minutes of movement can boost your mood. Dance, walk, or stretch - find what feels good!",
      icon: "🏃‍♀️"
    }
  ];

  const quickActions = [
    { label: "Crisis Support", action: "Call 988", urgent: true },
    { label: "Text Crisis Line", action: "Text HOME to 741741", urgent: true },
    { label: "Emergency", action: "Call 911", urgent: true }
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl font-bold mb-4 glow-text">Wellness Resources</h1>
          <p className="text-xl text-muted-foreground">Tools and exercises to support your mental health</p>
        </div>

        {/* Quick Crisis Support */}
        <div className="glass-card mb-8 border-l-4 border-l-red-400">
          <h3 className="text-lg font-semibold text-red-500 mb-4">Need immediate help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all duration-200 text-left"
              >
                <p className="font-medium text-red-500">{action.label}</p>
                <p className="text-sm text-red-400">{action.action}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Guided Exercises */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="resource-card group relative overflow-hidden"
            >
              <div className="resource-icon text-4xl mb-4 transition-transform duration-300">
                <exercise.icon size={48} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{exercise.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {exercise.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-xs text-muted-foreground">
                  <Clock size={12} className="mr-1" />
                  {exercise.duration}
                </span>
                <button className="flex items-center text-primary hover:text-primary-glow transition-colors">
                  <Play size={16} className="mr-1" />
                  <span className="text-sm font-medium">Start</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Wellness Tips */}
        <div className="glass-card">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <BookOpen size={24} className="mr-3 text-primary" />
            Daily Wellness Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wellnessTips.map((tip, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-glass/30 hover:bg-glass/50 transition-all duration-300 border border-glass-border/20"
              >
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h4 className="font-semibold mb-2 text-primary">{tip.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-8 text-center">
          <div className="glass-card">
            <h3 className="text-xl font-semibold mb-4">Remember</h3>
            <p className="text-muted-foreground leading-relaxed">
              Your mental health journey is unique. These tools are here to support you, 
              but professional help is always available when you need it. You're brave for 
              taking care of yourself. 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesScreen;