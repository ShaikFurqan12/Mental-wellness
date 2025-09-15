import { MessageCircle, BookOpen, Heart, User, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import AuthButtons from "./AuthButtons";
import UserProfile from "./UserProfile";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Layout = ({ children, currentPage, onNavigate }: LayoutProps) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

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

            {/* Auth/User Section */}
            <div className="hidden md:block">
              {user ? <UserProfile /> : <AuthButtons />}
            </div>

            {/* Mobile Auth/User */}
            <div className="md:hidden">
              {user ? <UserProfile /> : <AuthButtons />}
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