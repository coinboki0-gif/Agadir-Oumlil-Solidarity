"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Droplet } from 'lucide-react';

export const FeaturedProject = () => {
  const { t } = useLanguage();
  const projectImg = PlaceHolderImages.find(img => img.id === 'project-irrigation');

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
            <img
              src={projectImg?.imageUrl}
              alt="Irrigation project"
              className="absolute inset-0 w-full h-full object-cover"
              data-ai-hint="irrigation farming"
            />
            <div className="absolute inset-0 bg-primary/20" />
            <div className="absolute top-8 left-8 bg-secondary text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
              <Droplet className="w-5 h-5" />
              {t("مشروع السقي الكبير", "Grand Projet d'Irrigation")}
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("إنجاز تاريخي بدوار أنروز", "Une Réalisation Historique à Douar Anrouz")}
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {t(
                "بناء قناة سقي خرسانية بطول 600 متر مع خزان مائي ضخم، مما مكن أكثر من 200 نسمة من تأمين محاصيلهم الزراعية، خاصة الزعفران، وحمايتها من الجفاف.",
                "Construction d'un canal d'irrigation de 600m et d'un réservoir d'eau, bénéficiant à 200 habitants et protégeant la culture du safran."
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                <span>{t("تغطية 600 متر", "Couverture de 600m")}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                <span>{t("خزان مائي متكامل", "Réservoir d'eau intégré")}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                <span>{t("أزيد من 200 مستفيد", "Plus de 200 bénéficiaires")}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary w-6 h-6 shrink-0" />
                <span>{t("حماية زراعة الزعفران", "Protection du Safran")}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-white/60 text-sm mb-1">{t("الميزانية الإجمالية", "Budget Total")}</p>
                <p className="text-3xl font-bold text-secondary">275,946.72 MAD</p>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-xl font-bold text-lg w-full sm:w-auto">
                {t("اقرأ التفاصيل", "Voir les détails")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
