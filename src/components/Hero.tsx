"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Counter } from './Counter';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Hero = () => {
  const { t } = useLanguage();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-mountains');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-110"
        style={{ backgroundImage: `url(${heroImage?.imageUrl})` }}
        data-ai-hint="mountains village"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm animate-in fade-in slide-in-from-bottom duration-700">
          <span className="text-secondary font-semibold text-sm tracking-widest uppercase">
            {t("دوار أنروز، إقليم تارودانت", "Douar Anrouz, Province de Taroudant")}
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-[1.2] max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          {t("نبني مستقبلاً أفضل للمجتمعات الهشة", "Bâtir un avenir meilleur pour les communautés vulnérables")}
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          {t("جمعية أكادير أوملال للتنمية والتضامن — عمل إنساني، تنمية مستدامة، وتضامن دائم.", "Association Agadir Oumlil pour le Développement et la Solidarité — Action humanitaire et développement durable.")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          <Button className="bg-secondary hover:bg-secondary/90 text-white text-lg font-bold px-10 py-7 rounded-xl shadow-xl w-full sm:w-auto">
            {t("تبرع الآن", "Donner Maintenant")}
          </Button>
          <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white text-lg font-bold px-10 py-7 rounded-xl backdrop-blur-md w-full sm:w-auto">
            {t("اكتشف مشاريعنا", "Découvrir nos projets")}
          </Button>
        </div>

        {/* Counter Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10 animate-in fade-in duration-1000 delay-700">
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold text-secondary">
              <Counter end={635000} suffix=" DH" />
            </span>
            <span className="text-white/60 text-sm">{t("ميزانية 2025", "Budget 2025")}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold text-secondary">
              <Counter end={600} prefix="+" />
            </span>
            <span className="text-white/60 text-sm">{t("مستفيد رمضان", "Bénéficiaires Ramadan")}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold text-secondary">
              <Counter end={10} prefix="+" />
            </span>
            <span className="text-white/60 text-sm">{t("سنوات الخبرة", "Années d'expérience")}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-3xl md:text-4xl font-bold text-secondary">
              <Counter end={5} />
            </span>
            <span className="text-white/60 text-sm">{t("مجالات التدخل", "Domaines d'action")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
