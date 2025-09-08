import { useState } from "react";
import { Calendar, Flame, Plus } from "lucide-react";

const MoodJournalScreen = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [journalNote, setJournalNote] = useState("");
  const [streak, setStreak] = useState(7);

  const moods = [
    { emoji: "😊", name: "Happy", color: "from-yellow-400 to-orange-400" },
    { emoji: "😌", name: "Calm", color: "from-blue-400 to-green-400" },
    { emoji: "😔", name: "Sad", color: "from-blue-500 to-purple-500" },
    { emoji: "😰", name: "Anxious", color: "from-red-400 to-pink-400" },
    { emoji: "😴", name: "Tired", color: "from-gray-400 to-blue-400" },
    { emoji: "😡", name: "Angry", color: "from-red-500 to-red-600" },
    { emoji: "🤔", name: "Confused", color: "from-purple-400 to-pink-400" },
    { emoji: "✨", name: "Grateful", color: "from-yellow-300 to-pink-300" }
  ];

  const recentEntries = [
    { date: "Today", mood: "😊", note: "Had a great day with friends!" },
    { date: "Yesterday", mood: "😌", note: "Feeling peaceful after meditation" },
    { date: "2 days ago", mood: "😔", note: "School was stressful" }
  ];

  const handleMoodSelect = (moodName: string) => {
    setSelectedMood(moodName);
  };

  const handleSaveEntry = () => {
    if (selectedMood || journalNote) {
      // Here you would normally save to a database
      setSelectedMood(null);
      setJournalNote("");
      setStreak(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with Streak */}
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-4xl font-bold mb-4 glow-text">How are you feeling?</h1>
          <div className="glass-card inline-flex items-center space-x-2">
            <Flame className="text-primary" size={24} />
            <span className="text-2xl font-bold text-primary">{streak}</span>
            <span className="text-muted-foreground">day streak</span>
          </div>
        </div>

        {/* Mood Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {moods.map((mood) => (
            <div
              key={mood.name}
              onClick={() => handleMoodSelect(mood.name)}
              className={`mood-card flex flex-col items-center justify-center space-y-3 cursor-pointer transition-all duration-300 ${
                selectedMood === mood.name 
                  ? 'ring-2 ring-primary shadow-[0_0_30px_hsla(var(--primary),0.4)]' 
                  : ''
              }`}
            >
              <div className="text-4xl">{mood.emoji}</div>
              <p className="font-medium text-sm">{mood.name}</p>
            </div>
          ))}
        </div>

        {/* Journal Notes */}
        <div className="glass-card mb-8">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Plus size={20} className="mr-2 text-primary" />
            Add a note (optional)
          </h3>
          <textarea
            value={journalNote}
            onChange={(e) => setJournalNote(e.target.value)}
            placeholder="What happened today? How did you handle your emotions? Any thoughts to remember..."
            className="w-full h-24 bg-transparent resize-none outline-none placeholder-muted-foreground"
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSaveEntry}
              className="glow-button text-white"
              disabled={!selectedMood && !journalNote}
            >
              Save Entry
            </button>
          </div>
        </div>

        {/* Recent Entries */}
        <div className="glass-card">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar size={20} className="mr-2 text-primary" />
            Recent Entries
          </h3>
          <div className="space-y-4">
            {recentEntries.map((entry, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-3 rounded-xl bg-glass/30 hover:bg-glass/50 transition-all duration-200"
              >
                <div className="text-2xl">{entry.mood}</div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-primary">{entry.date}</p>
                  <p className="text-sm text-muted-foreground mt-1">{entry.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodJournalScreen;