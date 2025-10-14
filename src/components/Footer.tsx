import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { motion } from "motion/react";
import logoImage from "figma:asset/8a29adee8434a6ac28516abb7c29f0e5afada9b3.png";
import {
  useTranslations,
  type Language,
} from "../lib/translations";

interface FooterProps {
  onNavigate: (page: string) => void;
  language: Language;
}

export function Footer({ onNavigate, language }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down more than 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const t = useTranslations(language);

  const mainLinks = [
    { name: "Home", label: t.nav.home },
    { name: "UeberUns", label: t.nav.aboutUs },
    { name: "CarWash", label: t.nav.carWash },
    { name: "Werkstatt", label: t.nav.workshop },
    { name: "Fahrzeuge", label: t.nav.vehicles },
    { name: "Anfahrt", label: t.nav.directions },
    { name: "Kontakt", label: t.nav.contact },
    {
      name: "Wohnmobil",
      label: `${t.nav.motorhome} ${language === "de" ? "Vermietung" : "Rental"}`,
    },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6 relative border-t-2 border-accent w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://static.wixstatic.com/media/da3d09_06c476ad0d264bb1a64a169d1d5a3135~mv2.png/v1/fill/w_376,h_392,al_c,lg_1,q_85,enc_avif,quality_auto/Logo.png"
                alt="AK Car Shop Logo"
                className="h-16 w-auto max-w-full"
              />
            </div>
            <p className="text-gray-400 mt-4">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-accent mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {mainLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.name)}
                    className="text-silver-light hover:text-accent transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-accent mb-4">
              {t.footer.services}
            </h3>
            <ul className="space-y-2">
              {mainLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => onNavigate(link.name)}
                    className="text-silver-light hover:text-accent transition-colors duration-300 hover:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-accent mb-4">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-silver-light">
                <Phone
                  size={18}
                  className="mt-1 flex-shrink-0 text-accent"
                />
                <div>
                  <div>+41 81 322 66 33</div>
                  <div>+41 79 285 13 50</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-silver-light">
                <Mail
                  size={18}
                  className="mt-1 flex-shrink-0 text-accent"
                />
                <a
                  href="mailto:ak@akcarshop.com"
                  className="hover:text-accent transition-colors"
                >
                  ak@akcarshop.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-silver-light">
                <MapPin
                  size={18}
                  className="mt-1 flex-shrink-0 text-accent"
                />
                <div>
                  Industriestrasse 6<br />
                  7208 Malans GR
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="border-t border-accent/30 pt-6 mb-6">
          <h3 className="text-accent mb-3">
            {t.footer.openingHours}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-silver-light">
            <div>
              {language === "de" ? "Mo - Do" : "Mon - Thu"}:
              9:00 - 12:00 / 13:30 - 19:00
            </div>
            <div>
              {language === "de" ? "Fr" : "Fri"}: 9:00 - 12:00 /
              13:30 - 18:00
            </div>
            <div className="col-span-full">
              {language === "de"
                ? "Sa - So: Geschlossen"
                : "Sat - Sun: Closed"}
            </div>
          </div>
        </div>

        {/* Social Media & Legal */}
        <div className="border-t border-accent/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-accent/50"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-accent/50"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-accent/50"
            >
              <Youtube size={20} />
            </a>
          </div>

          <div className="flex items-center gap-4 text-silver-light">
            <button className="hover:text-accent transition-colors duration-300 hover:underline">
              {t.footer.imprint}
            </button>
            <span>•</span>
            <button className="hover:text-accent transition-colors duration-300 hover:underline">
              {t.footer.privacy}
            </button>
            <span>•</span>
            <button className="hover:text-accent transition-colors duration-300 hover:underline">
              {t.footer.terms}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-silver-light mt-6">
          <p>
            &copy; {new Date().getFullYear()} AK CAR SHOP AG.{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-all duration-300 border-2 border-silver/30 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}