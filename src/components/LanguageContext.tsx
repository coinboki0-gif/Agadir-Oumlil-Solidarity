"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (ar: string, fr: string, en?: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => {
      if (prev === 'fr') return 'ar';
      if (prev === 'ar') return 'en';
      return 'fr';
    });
  };

  const t = (ar: string, fr: string, en?: string): string => {
    if (language === 'ar') return ar;
    if (language === 'en') return en ?? fr;
    return fr;
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl }}>
      <div className={isRtl ? 'rtl font-body' : 'ltr font-body'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};