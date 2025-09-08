import { MessageCircle, BookOpen, Heart, User, Mic } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  const navItems = [
    { id: 'welcome', icon: Heart, label: 'Home' },
    { id: 'chat', icon: MessageCircle, label: 'Chat' },
    { id: 'journal', icon: BookOpen, label: 'Journal' },
    { id: 'resources', icon: User, label: 'Resources' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-shape w-32 h-32 top-10 left-10"></div>
        <div className="floating-shape w-20 h-20 top-1/3 right-20"></div>
        <div className="floating-shape w-24 h-24 bottom-20 left-1/4"></div>
        <div className="floating-shape w-16 h-16 bottom-1/3 right-1/3"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pb-20 md:pb-0">
        {children}
      </main>

      {/* Floating Navigation */}
      <nav className="floating-nav bottom-4 left-1/2 transform -translate-x-1/2 md:top-4 md:bottom-auto">
        <div className="flex items-center space-x-6">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => onNavigate(id)}
              className={`relative p-3 rounded-full transition-all duration-300 group ${
                currentPage === id 
                  ? 'bg-primary text-white shadow-[0_0_20px_hsla(var(--primary),0.5)]' 
                  : 'text-foreground hover:text-primary'
              }`}
              aria-label={label}
            >
              <Icon size={20} />
              {currentPage === id && (
                <div className="absolute inset-0 rounded-full animate-glow-pulse bg-primary/20"></div>
              )}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Layout;