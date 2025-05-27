import React, { createContext, useState, useEffect } from "react";
import translationsData from "../data/translations.json";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  const [translations, setTranslations] = useState(translationsData.en);

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLanguage = localStorage.getItem("language") || "bn";
    setLanguage(savedLanguage);
    setTranslations(translationsData[savedLanguage]);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setTranslations(translationsData[lang]);
    localStorage.setItem("language", lang);
  };

  // Helper function to get nested translation values
  const t = (key) => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation missing for key: ${key}`);
        return key; // Fallback to key if translation missing
      }
    }

    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
