"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Quote, Heart } from 'lucide-react';

export const Testimonial = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10">

          {/* صورة + badge */}
          <div className="md:w-1/3 shrink-0 flex flex-col items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-3 bg-secondary/20 rounded-full blur-xl" />
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=400&fit=crop&crop=face"
                  alt="Bénéficiaire"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
              <Heart className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-secondary font-bold text-sm">
                {t("قصة حقيقية", "Histoire vraie")}
              </span>
            </div>
          </div>

          {/* الاقتباس */}
          <div className="md:w-2/3">
            <Quote className="w-16 h-16 text-primary/10 mb-4" />
            <blockquote className="text-2xl md:text-3xl font-bold text-primary mb-8 italic leading-relaxed">
              {t(
                "\"بفضل تبرعكم، أجريت عملية القلب بنجاح في الدار البيضاء. اليوم أعيش من جديد مع أطفالي.\"",
                "\"Grâce à vos dons, mon opération cardiaque a réussi. Aujourd'hui, je vis à nouveau avec mes enfants. Merci infiniment.\""
              )}
            </blockquote>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-secondary rounded-full" />
              <div>
                <p className="font-bold text-lg text-primary">
                  {t("مستفيد — دعم طبي", "Bénéficiaire — Soutien médical")}
                </p>
                <p className="text-muted-foreground">
                  {t("مستشفى الأزهر، الدار البيضاء — شتنبر 2025", "Hôpital Al Azhar, Casablanca — Septembre 2025")}
                </p>
              </div>
            </div>

            {/* أرقام للمصداقية */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-primary/10">
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">83K</p>
                <p className="text-xs text-muted-foreground">{t("دعم طبي 2025", "DH soins 2025")}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">10+</p>
                <p className="text-xs text-muted-foreground">{t("عمليات ممولة", "Opérations financées")}</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">100%</p>
                <p className="text-xs text-muted-foreground">{t("تبرعاتكم لهم", "Dons directs")}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
