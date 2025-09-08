import { useState } from "react";
import Layout from "@/components/Layout";
import WelcomeScreen from "@/components/WelcomeScreen";
import ChatScreen from "@/components/ChatScreen";
import MoodJournalScreen from "@/components/MoodJournalScreen";
import ResourcesScreen from "@/components/ResourcesScreen";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  const handleStartChat = () => {
    setCurrentPage("chat");
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomeScreen onStartChat={handleStartChat} />;
      case "chat":
        return <ChatScreen />;
      case "journal":
        return <MoodJournalScreen />;
      case "resources":
        return <ResourcesScreen />;
      default:
        return <WelcomeScreen onStartChat={handleStartChat} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderCurrentPage()}
    </Layout>
  );
};

export default Index;