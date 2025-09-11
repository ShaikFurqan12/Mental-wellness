import { MessageCircle, BookOpen, Heart, User, Users } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  const navItems = [
    { id: 'chat', label: 'Chat' },
    { id: 'journal', label: 'Journal' },
    { id: 'resources', label: 'Resources' },
    { id: 'community', label: 'Community' },
    { id: 'welcome', label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-orange-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50 rounded-b-2xl mx-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Heart className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">SafeSpace</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => onNavigate(id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      currentPage === id
                        ? 'text-gray-900 border-b-2 border-green-500'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => onNavigate('chat')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              >
                Start Chatting
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => onNavigate('chat')}
                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;