"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Quote } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const Testimonial = () => {
  const { t } = useLanguage();
  const storyImg = PlaceHolderImages.find(img => img.id === 'beneficiary-story');

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-muted/20 rounded-[3rem] p-8 md:p-16">
          <div className="md:w-1/3 shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-secondary/20 rounded-full blur-xl" />
              <img
                src={storyImg?.imageUrl}
                alt="Impact Story"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                data-ai-hint="dignified person"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <Quote className="w-12 h-12 text-primary/10 mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 italic leading-relaxed">
              {t(
                "\"بفضل تبرعكم ومجهودات الجمعية، أجريت عملية القلب بنجاح في مدينة الدار البيضاء. اليوم أستطيع العيش من جديد مع أطفالي. شكراً لكل من ساهم.\"",
                "\"Grâce à vos dons, mon opération cardiaque a réussi. Aujourd'hui, je vis à nouveau avec mes enfants. Merci infiniment.\""
              )}
            </h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <div>
                <p className="font-bold text-lg text-primary">{t("قصة نجاح", "Témoignage")}</p>
                <p className="text-muted-foreground">{t("مستفيد من الدعم الطبي، شتنبر 2025", "Bénéficiaire, Septembre 2025")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
