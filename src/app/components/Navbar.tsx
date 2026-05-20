import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
  { code: 'hy', name: 'Հայերեն', flag: 'https://flagcdn.com/w40/am.png' }
];

export function EngineeringAcademyLogo() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 w-fit select-none">
      <div className="flex gap-[3px]">
        <div className="flex flex-col gap-[3px]">
          <div className="w-[26px] h-[8px] bg-[#1d1d1d]" />
          <div className="w-[26px] h-[8px] bg-[#1d1d1d]" />
          <div className="w-[26px] h-[8px] bg-[#1d1d1d]" />
        </div>
        <div className="flex flex-col">
          <div className="w-[8px] h-[20px] bg-[#2d5b85]" />
          <div className="w-[8px] h-[10px] bg-[#1d1d1d]" />
        </div>
        <div className="flex flex-col gap-[3px]">
          <div className="w-[8px] h-[17px] bg-[#1d1d1d]" />
          <div className="w-[8px] h-[10px] bg-[#1d1d1d]" />
        </div>
      </div>
      <div className="leading-none uppercase tracking-tight font-extrabold text-[#1d1d1d] text-[18px]">
        <div>Engineering</div>
        <div className="mt-[2px]">Academy</div>
      </div>
    </div>
  );
}

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (code: string) => void;
  isMobile?: boolean;
}

function LanguageSwitcher({ currentLang, onLanguageChange, isMobile = false }: LanguageSwitcherProps) {
  return (
    <div 
      className={`flex items-center gap-1 p-1 rounded-lg ${
        isMobile 
          ? "w-full justify-center gap-3 py-2 bg-gray-50 border border-gray-100" 
          : "bg-gray-50/80 border border-gray-200/60"
      }`}
    >
      {LANGUAGES.map((lang) => {
        const isActive = currentLang.startsWith(lang.code);

        return (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            title={lang.name}
            aria-label={`Сменить язык на ${lang.name}`}
            aria-current={isActive ? "true" : undefined}
            className={`relative rounded-md transition-all duration-200 flex items-center justify-center ${
              isMobile ? "p-2" : "p-1"
            } ${
              isActive
                ? "bg-white shadow-sm ring-1 ring-gray-200 scale-105"
                : "hover:bg-gray-200 opacity-60 hover:opacity-100 grayscale-[50%] hover:grayscale-0"
            }`}
          >
            <img
              src={lang.flag}
              alt=""
              className={`${isMobile ? "w-6" : "w-5"} h-auto rounded-[2px]`}
              loading="lazy"
            />
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = useMemo(() => [
    { key: "nav_home", href: "/" },
    { key: "nav_about", href: "/about" },
    { key: "nav_programs", href: "/programs" },
    { key: "nav_contact", href: "/contact" },
  ], []);

  const currentLang = i18n.language || 'en';

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
    if (isOpen) setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="" >
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50  px-6 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            
            <div className="flex items-center space-x-12">
              <EngineeringAcademyLogo />
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.key}
                      to={link.href}
                      className={`text-sm transition-all duration-200 ${
                        isActive ? "text-gray-900 font-bold" : "text-gray-600 hover:text-gray-900"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center space-x-3 md:space-x-4">
              <div className="hidden md:block">
                <LanguageSwitcher 
                  currentLang={currentLang} 
                  onLanguageChange={handleLanguageChange} 
                />
              </div>

              <a
                href="https://docs.google.com/forms/d/1FcvebImT89-HOlijdpydedUs2PKPVKbnDu92C5-g9PI/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block px-6 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg hover:scale-105"
              >
                {t('nav_apply')}
              </a>

              <button
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Переключить меню"
              >
                {isOpen ? <X className="w-6 h-6 mr-8" /> : <Menu className="w-6 h-6 mr-8" />}
              </button>
            </div>

          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-6 right-6 mt-2 md:hidden"
            >
              <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-4 flex flex-col space-y-2 ">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <Link
                      key={link.key}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive ? "text-gray-900 font-bold bg-gray-100" : "font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  );
                })}
                
                <hr className="border-gray-100 my-2" />
                
                <LanguageSwitcher 
                  currentLang={currentLang} 
                  onLanguageChange={handleLanguageChange} 
                  isMobile 
                />

                <a
                  href="https://docs.google.com/forms/d/1FcvebImT89-HOlijdpydedUs2PKPVKbnDu92C5-g9PI/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 mt-2 bg-gray-900 text-white rounded-xl font-medium block"
                >
                  {t('nav_apply')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}