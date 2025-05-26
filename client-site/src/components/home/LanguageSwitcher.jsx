import { LanguageContext } from "@/providers/LanguageContext";
import React, { useContext, useState } from "react";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const languages = [
    {
      code: "en",
      name: "English",
      flag: "https://flagcdn.com/w320/us.png", // or '/flags/uk.svg' depending on your preference
    },
    {
      code: "bn",
      name: "বাংলা",
      flag: "https://flagcdn.com/w320/bd.png",
    },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Current language button */}
      <button
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="flex items-center gap-2 px-3 py-1.5 me-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Change language"
      >
        {currentLanguage && (
          <>
            <img
              src={currentLanguage.flag}
              alt={currentLanguage.name}
              className="w-5 h-auto"
            />
            <span className="text-sm font-medium">{currentLanguage.name}</span>
          </>
        )}
      </button>

      {/* Language selection modal */}
      {isModalOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal content */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center w-full px-4 py-2 text-left text-sm ${
                    language === lang.code
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-5 h-auto mr-3"
                  />
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
