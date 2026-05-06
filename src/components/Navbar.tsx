"use client"

import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const { t, toggleLanguage, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { nameAr: 'الرئيسية', nameFr: 'Accueil', href: '/' },
    { nameAr: 'من نحن', nameFr: 'À propos', href: '/about' },
    { nameAr: 'مجالاتنا', nameFr: 'Domaines', href: '/domaines' },
    { nameAr: 'مشاريعنا', nameFr: 'Projets', href: '/projects' },
    { nameAr: 'تواصل معنا', nameFr: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-navbar.png"
            alt="Agadir Oumlil"
            width={160}
            height={64}
            className={cn(
              'h-14 w-auto object-contain transition-all duration-300',
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            )}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.nameAr}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-secondary',
                isScrolled ? 'text-primary' : 'text-white/90',
                pathname === link.href && 'text-secondary font-bold'
              )}
            >
              {t(link.nameAr, link.nameFr)}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={cn(
              'flex items-center gap-2 font-semibold',
              isScrolled ? 'text-primary' : 'text-white hover:bg-white/10'
            )}
          >
            <Globe className="w-4 h-4" />
            {language === 'fr' ? 'العربية' : language === 'ar' ? 'EN' : 'FR'}
          </Button>
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 shadow-md">
              {t('تبرع الآن', 'Faire un don')}
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen
            ? <X className={isScrolled ? 'text-primary' : 'text-white'} />
            : <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          }
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-2xl p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.nameAr}
              href={link.href}
              className={cn(
                'text-lg font-semibold text-primary',
                pathname === link.href && 'text-secondary'
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(link.nameAr, link.nameFr)}
            </Link>
          ))}
          <div className="flex flex-col gap-4 border-t pt-4">
            <Button variant="outline" onClick={toggleLanguage} className="w-full">
              {language === 'fr' ? 'تغيير إلى العربية' : language === 'ar' ? 'Switch to English' : 'Passer en Français'}
            </Button>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-secondary text-white w-full py-6 text-lg font-bold">
                {t('تبرع الآن', 'Faire un don')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};