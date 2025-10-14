import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { UeberUnsPage } from "./components/pages/UeberUnsPage";
import { CarWashPage } from "./components/pages/CarWashPage";
import { WerkstattPage } from "./components/pages/WerkstattPage";
import { FahrzeugePage } from "./components/pages/FahrzeugePage";
import { WohnmobilPage } from "./components/pages/WohnmobilPage";
import { AnfahrtPage } from "./components/pages/AnfahrtPage";
import { KontaktPage } from "./components/pages/KontaktPage";
import type { Language } from "./lib/translations";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [language, setLanguage] = useState<Language>("de");

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage onNavigate={setCurrentPage} language={language} />;
      case "UeberUns":
        return <UeberUnsPage language={language} />;
      case "CarWash":
        return <CarWashPage language={language} />;
      case "Werkstatt":
        return <WerkstattPage onNavigate={setCurrentPage} language={language} />;
      case "Fahrzeuge":
        return <FahrzeugePage language={language} />;
      case "Wohnmobil":
        return <WohnmobilPage onNavigate={setCurrentPage} language={language} />;
      case "Anfahrt":
        return <AnfahrtPage language={language} />;
      case "Kontakt":
        return <KontaktPage language={language} />;
      default:
        return <HomePage onNavigate={setCurrentPage} language={language} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <Navigation
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={language}
        onLanguageChange={setLanguage}
      />
      <main className="flex-1 overflow-x-hidden w-full">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} language={language} />
    </div>
  );
}