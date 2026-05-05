"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'fr';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (ar: string, fr: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'fr' : 'ar'));
  };

  const t = (ar: string, fr: string) => (language === 'ar' ? ar : fr);

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
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
