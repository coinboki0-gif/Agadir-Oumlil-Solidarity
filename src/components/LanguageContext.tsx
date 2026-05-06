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

const STORAGE_KEY = 'agadir-oumlil-language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && ['fr', 'ar', 'en'].includes(saved)) {
      setLanguage(saved);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'fr' ? 'ar' : prev === 'ar' ? 'en' : 'fr';
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  const t = (ar: string, fr: string, en?: string): string => {
    if (language === 'ar') return ar;
    if (language === 'en') return en ?? fr;
    return fr;
  };

  const isRtl = language === 'ar';

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRtl, mounted]);

  if (!mounted) return null;

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
