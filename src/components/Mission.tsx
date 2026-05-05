"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export const Mission = () => {
  const { t } = useLanguage();

  const data = [
    {
      icon: <Target className="w-10 h-10 text-secondary" />,
      titleAr: "رسالتنا",
      titleFr: "Notre Mission",
      contentAr: "دعم الأسر الهشة في مجالات الصحة والتعليم والسكن لخلق فرص حياة كريمة.",
      contentFr: "Soutenir les familles vulnérables dans la santé, l'éducation et l'habitat."
    },
    {
      icon: <Eye className="w-10 h-10 text-secondary" />,
      titleAr: "رؤيتنا",
      titleFr: "Notre Vision",
      contentAr: "مجتمع متماسك وكريم في قلب جبال تارودانت، حيث ينعم الجميع بالخدمات الأساسية.",
      contentFr: "Une société solidaire et digne au cœur des montagnes de Taroudant."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
      titleAr: "قيمنا",
      titleFr: "Nos Valeurs",
      contentAr: "التضامن، الكرامة، والشفافية التامة في تسيير المشاريع والمساعدات.",
      contentFr: "Solidarité, Dignité et Transparence totale dans nos actions."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.map((item, idx) => (
            <div key={idx} className="text-center group">
              <div className="mb-6 flex justify-center transform transition-transform group-hover:scale-110 duration-300">
                <div className="p-5 bg-white rounded-3xl shadow-xl ring-1 ring-primary/5">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{t(item.titleAr, item.titleFr)}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t(item.contentAr, item.contentFr)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
