"use client"

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Handshake, Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { t, toggleLanguage, language, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameAr: "الرئيسية", nameFr: "Accueil", href: "#" },
    { nameAr: "من نحن", nameFr: "À propos", href: "#mission" },
    { nameAr: "مجالاتنا", nameFr: "Domaines", href: "#programs" },
    { nameAr: "مشاريعنا", nameFr: "Projets", href: "#projects" },
    { nameAr: "تواصل معنا", nameFr: "Contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-secondary p-2 rounded-full shadow-lg">
            <Handshake className="w-6 h-6 text-white" />
          </div>
          <span className={cn(
            "text-xl font-bold tracking-tight",
            isScrolled ? "text-primary" : "text-white"
          )}>
            {t("جمعية أكادير أوملال", "Assoc. Agadir Oumlil")}
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.nameAr}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                isScrolled ? "text-primary" : "text-white/90"
              )}
            >
              {t(link.nameAr, link.nameFr)}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-2",
              isScrolled ? "text-primary" : "text-white hover:bg-white/10"
            )}
          >
            <Globe className="w-4 h-4" />
            {language === 'ar' ? 'FR' : 'العربية'}
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 shadow-md">
            {t("تبرع الآن", "Faire un don")}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className={isScrolled ? "text-primary" : "text-white"} /> : <Menu className={isScrolled ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.nameAr}
              href={link.href}
              className="text-lg font-semibold text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(link.nameAr, link.nameFr)}
            </a>
          ))}
          <div className="flex flex-col gap-4 border-t pt-4">
            <Button variant="outline" onClick={toggleLanguage} className="w-full">
              {language === 'ar' ? 'Changer en Français' : 'تغيير إلى العربية'}
            </Button>
            <Button className="bg-secondary text-white w-full py-6 text-lg font-bold">
              {t("تبرع الآن", "Faire un don")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
