"use client"
import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Counter } from './Counter';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: 635000, suffix: " DH", prefix: "", label: t("ميزانية 2025", "Budget 2025", "2025 Budget") },
    { value: 600, suffix: "", prefix: "+", label: t("مستفيد رمضان", "Bénéf. Ramadan", "Ramadan Benef.") },
    { value: 10, suffix: "", prefix: "+", label: t("سنوات الخبرة", "Ans d'expérience", "Years Experience") },
    { value: 5, suffix: "", prefix: "", label: t("مجالات التدخل", "Domaines d'action", "Action Domains") },
  ];

  const heading = {
    ar: <><span className="text-secondary">نبني مستقبلاً أفضل</span><br className="hidden md:block" /> للمجتمعات الهشة</>,
    fr: <><span className="text-secondary">Bâtir</span> un avenir meilleur<br className="hidden md:block" /> pour les communautés vulnérables</>,
    en: <>Building a <span className="text-secondary">Better Future</span><br className="hidden md:block" /> for Vulnerable Communities</>,
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url('https://i.ibb.co/pvdBnxnW/A-vertical-close-up-portrait-of-202605060200-1-1.webp')` }} />
      <div className="absolute inset-0 z-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url('https://i.ibb.co/84jKW28J/A-cinematic-wide-angle-aerial-photograph-202605060200-1-1.webp')` }} />

      {/* Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-primary/50 to-primary" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/25 via-transparent to-transparent" />

      {/* Dot patterns desktop only */}
      <div className="absolute top-28 right-16 w-44 h-44 opacity-[0.06] z-0 hidden lg:block"
        style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px'}} />
      <div className="absolute bottom-48 left-12 w-32 h-32 opacity-[0.06] z-0 hidden lg:block"
        style={{backgroundImage: 'radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px'}} />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-20 md:pt-24 pb-6 md:pb-10">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center text-white w-full">

          {/* Badge — مختصر على الهاتف */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 md:mb-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm animate-in fade-in slide-in-from-bottom duration-700">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shrink-0" />
            <span className="text-white/80 font-medium text-[10px] md:text-xs tracking-wide md:tracking-[0.18em] uppercase">
              <span className="md:hidden">{t("تارودانت، المغرب", "Taroudant, Maroc", "Taroudant, Morocco")}</span>
              <span className="hidden md:inline">{t("دوار أنروز، إقليم تارودانت", "Douar Anrouz, Province de Taroudant", "Douar Anrouz, Taroudant Province")}</span>
            </span>
          </div>

          {/* Heading — أصغر على الهاتف */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-7 leading-[1.12] md:leading-[1.08] tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-150">
            {heading[language as keyof typeof heading] ?? heading.fr}
          </h1>

          {/* Subheading — أقصر على الهاتف */}
          <p className="text-sm md:text-xl text-white/65 mb-7 md:mb-12 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <span className="md:hidden">{t(
              "عمل إنساني وتنمية مستدامة في إقليم تارودانت",
              "Action humanitaire et développement durable à Taroudant.",
              "Humanitarian action and sustainable development in Taroudant."
            )}</span>
            <span className="hidden md:inline">{t(
              "جمعية أكادير أوملال للتنمية والتضامن — عمل إنساني، تنمية مستدامة، وتضامن دائم.",
              "Association Agadir Oumlil pour le Développement et la Solidarité — Action humanitaire et développement durable.",
              "Agadir Oumlil Association for Development and Solidarity — Humanitarian action, sustainable development, and lasting solidarity."
            )}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-16 animate-in fade-in slide-in-from-bottom duration-1000 delay-500 px-2 md:px-0">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="bg-secondary hover:bg-secondary/90 text-white text-sm md:text-base font-bold px-7 md:px-9 py-5 md:py-6 rounded-xl shadow-2xl w-full gap-2 group transition-all">
                {t("تبرع الآن", "Donner Maintenant", "Donate Now")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <Button variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20 text-white text-sm md:text-base font-bold px-7 md:px-9 py-5 md:py-6 rounded-xl backdrop-blur-md w-full transition-all">
                {t("اكتشف مشاريعنا", "Découvrir nos projets", "Discover Our Projects")}
              </Button>
            </Link>
          </div>

          {/* Stats — أصغر على الهاتف */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md animate-in fade-in duration-1000 delay-700">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 py-4 md:py-7 px-2 md:px-4 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <span className="text-xl md:text-3xl font-bold text-secondary">
                  <Counter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className="text-white/45 text-[10px] md:text-xs font-medium tracking-wide text-center leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-5 md:pb-8 animate-in fade-in duration-1000 delay-1000">
        <div className="flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors cursor-pointer group">
          <span className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase font-medium">
            {t("اكتشف", "Découvrir", "Explore")}
          </span>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
        </div>
      </div>

    </section>
  );
};
