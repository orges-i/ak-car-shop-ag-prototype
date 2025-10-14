import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  useTranslations,
  type Language,
} from "../lib/translations";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Navigation({
  currentPage,
  onNavigate,
  language,
  onLanguageChange,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations(language);

  const pages = [
    { name: "Home", label: t.nav.home },
    { name: "UeberUns", label: t.nav.aboutUs },
    { name: "CarWash", label: t.nav.carWash },
    { name: "Werkstatt", label: t.nav.workshop },
    { name: "Fahrzeuge", label: t.nav.vehicles },
    { name: "Wohnmobil", label: t.nav.motorhome },
    { name: "Anfahrt", label: t.nav.directions },
    { name: "Kontakt", label: t.nav.contact },
  ];

  // split pages into left and right for balanced layout
  const leftPages = pages.slice(0, 5); // first 5 items on the left
  const rightPages = pages.slice(5); // remaining 3 items on the right

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg border-b-2 border-accent w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 relative min-w-0">
          {/* Desktop Left Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {leftPages.map((page) => (
              <button
                key={page.name}
                onClick={() => onNavigate(page.name)}
                className={`px-4 py-2 rounded-md transition-all duration-300 relative group ${
                  currentPage === page.name
                    ? "text-accent bg-accent/10"
                    : "text-silver-light hover:text-accent hover:bg-accent/5"
                }`}
              >
                {page.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                    currentPage === page.name
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Logo Center */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 cursor-pointer shrink-0"
            onClick={() => onNavigate("Home")}
          >
            <img
              src="https://static.wixstatic.com/media/da3d09_06c476ad0d264bb1a64a169d1d5a3135~mv2.png/v1/fill/w_376,h_392,al_c,lg_1,q_85,enc_avif,quality_auto/Logo.png"
              alt="AK Car Shop Logo"
              className="h-12 lg:h-16 w-auto max-w-[60px] lg:max-w-[80px]"
            />
          </motion.div>

          {/* Desktop Right Nav + Language */}
          <div className="hidden lg:flex items-center gap-1">
            {rightPages.map((page) => (
              <button
                key={page.name}
                onClick={() => onNavigate(page.name)}
                className={`px-4 py-2 rounded-md transition-all duration-300 relative group ${
                  currentPage === page.name
                    ? "text-accent bg-accent/10"
                    : "text-silver-light hover:text-accent hover:bg-accent/5"
                }`}
              >
                {page.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${
                    currentPage === page.name
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}

            {/* Language Switcher */}
            <div className="ml-4 flex items-center gap-2 border-l border-silver-light/20 pl-4">
              <Languages
                className="text-silver-light"
                size={18}
              />
              <button
                onClick={() => onLanguageChange("de")}
                className={`px-2 py-1 rounded transition-all duration-300 ${
                  language === "de"
                    ? "bg-accent text-white"
                    : "text-silver-light hover:text-accent"
                }`}
              >
                DE
              </button>
              <span className="text-silver-light/50">|</span>
              <button
                onClick={() => onLanguageChange("en")}
                className={`px-2 py-1 rounded transition-all duration-300 ${
                  language === "en"
                    ? "bg-accent text-white"
                    : "text-silver-light hover:text-accent"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent/20 rounded-md transition-colors text-silver-light"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-accent/30"
          >
            <div className="px-4 py-4 space-y-2">
              {pages.map((page) => (
                <button
                  key={page.name}
                  onClick={() => {
                    onNavigate(page.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${
                    currentPage === page.name
                      ? "bg-accent text-white"
                      : "text-silver-light hover:bg-accent/20 hover:text-white"
                  }`}
                >
                  {page.label}
                </button>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center gap-2 pt-4 border-t border-silver-light/20">
                <Languages
                  className="text-silver-light"
                  size={18}
                />
                <button
                  onClick={() => {
                    onLanguageChange("de");
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-4 py-2 rounded transition-all duration-300 ${
                    language === "de"
                      ? "bg-accent text-white"
                      : "text-silver-light bg-accent/10"
                  }`}
                >
                  Deutsch
                </button>
                <button
                  onClick={() => {
                    onLanguageChange("en");
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-4 py-2 rounded transition-all duration-300 ${
                    language === "en"
                      ? "bg-accent text-white"
                      : "text-silver-light bg-accent/10"
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}