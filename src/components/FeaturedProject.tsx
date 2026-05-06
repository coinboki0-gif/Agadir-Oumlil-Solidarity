"use client"
import Link from "next/link";
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Droplet, ChevronLeft, ChevronRight } from 'lucide-react';

const beforeImages = [
  "https://i.ibb.co/S7WsczPq/Capture-d-cran-2026-05-06-021248-1.png",
  "https://i.ibb.co/mF4DhBRg/Capture-d-cran-2026-05-06-021304-1.png",
  "https://i.ibb.co/NnLgnYyw/Capture-d-cran-2026-05-06-021321-1.png",
  "https://i.ibb.co/hxyT0Q1K/Capture-d-cran-2026-05-06-021358-1.png",
  "https://i.ibb.co/6RxXsLP5/Capture-d-cran-2026-05-06-021419-1.png",
  "https://i.ibb.co/39XtMcrh/Capture-d-cran-2026-05-06-021435-1.png",
  "https://i.ibb.co/ymmJ6CJK/Capture-d-cran-2026-05-06-021452-1.png",
  "https://i.ibb.co/K4VwvK4/Capture-d-cran-2026-05-06-021516-1.png",
  "https://i.ibb.co/vxZvHbwK/Capture-d-cran-2026-05-06-021545-1.png",
];

const afterImages = [
  "https://i.ibb.co/nMsrmrdW/Capture-d-cran-2026-05-06-022346-1.png",
  "https://i.ibb.co/cXYzTmLN/Capture-d-cran-2026-05-06-022414-1.png",
  "https://i.ibb.co/nx4TgpJ/Capture-d-cran-2026-05-06-022430-1.png",
  "https://i.ibb.co/Xxxyrxnr/Capture-d-cran-2026-05-06-022447-1.png",
  "https://i.ibb.co/8n0LzZSz/Capture-d-cran-2026-05-06-022509-1.png",
  "https://i.ibb.co/27CtFzzD/Capture-d-cran-2026-05-06-022526-1.png",
  "https://i.ibb.co/yFDf7jHT/Capture-d-cran-2026-05-06-022551-1.png",
  "https://i.ibb.co/hR4bwYM2/Capture-d-cran-2026-05-06-022622-1.png",
  "https://i.ibb.co/7JMXp2yv/Capture-d-cran-2026-05-06-022654-1.png",
  "https://i.ibb.co/RT1LJskG/Capture-d-cran-2026-05-06-022636-1.png",
];

export const FeaturedProject = () => {
  const { t } = useLanguage();
  const [tab, setTab] = useState<'before' | 'after'>('after');
  const [activeIndex, setActiveIndex] = useState(0);

  const images = tab === 'before' ? beforeImages : afterImages;
  const currentImage = images[activeIndex];

  const prev = () => setActiveIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex(i => (i + 1) % images.length);

  const handleTabSwitch = (newTab: 'before' | 'after') => {
    setTab(newTab);
    setActiveIndex(0);
  };

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">

          {/* Image Gallery Side */}
          <div className="lg:w-1/2 relative flex flex-col">

            {/* Before/After Tab Toggle */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex bg-black/40 backdrop-blur-md rounded-full p-1 gap-1">
              <button
                onClick={() => handleTabSwitch('before')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  tab === 'before'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {t("قبل", "Avant", "Before")}
              </button>
              <button
                onClick={() => handleTabSwitch('after')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  tab === 'after'
                    ? 'bg-secondary text-white shadow-md'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {t("بعد", "Après", "After")}
              </button>
            </div>

            {/* Project badge */}
            <div className="absolute bottom-24 left-4 z-20 bg-secondary text-white px-5 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
              <Droplet className="w-4 h-4" />
              {t("مشروع السقي الكبير", "Grand Projet d'Irrigation", "Grand Irrigation Project")}
            </div>

            {/* Main Image */}
            <div className="relative h-[360px] lg:h-[480px] overflow-hidden">
              <img
                key={currentImage}
                src={currentImage}
                alt="Project photo"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

              {/* Prev/Next arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-full p-2 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-full p-2 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {activeIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnails strip */}
            <div className="flex gap-2 p-3 bg-primary/90 overflow-x-auto scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === activeIndex
                      ? 'border-secondary scale-105 shadow-lg'
                      : 'border-white/20 opacity-60 hover:opacity-90'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("إنجاز تاريخي بدوار أنروز", "Une Réalisation Historique à Douar Anrouz", "A Historic Achievement at Douar Anrouz")}
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {t(
                "بناء قناة سقي خرسانية بطول 600 متر مع خزان مائي ضخم، مما مكن أكثر من 200 نسمة من تأمين محاصيلهم الزراعية، خاصة الزعفران، وحمايتها من الجفاف.",
                "Construction d'un canal d'irrigation de 600m et d'un réservoir d'eau, bénéficiant à 200 habitants et protégeant la culture du safran.",
                "Construction of a 600m concrete irrigation canal and water reservoir, benefiting 200+ residents and protecting saffron crops from drought."
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                [t("تغطية 600 متر", "Couverture de 600m", "600m Coverage"), t("خزان مائي متكامل", "Réservoir d'eau intégré", "Integrated Water Reservoir")],
                [t("أزيد من 200 مستفيد", "Plus de 200 bénéficiaires", "200+ Beneficiaries"), t("حماية زراعة الزعفران", "Protection du Safran", "Saffron Crop Protection")],
              ].flat().map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary w-6 h-6 shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-white/10">
              <div>
                <p className="text-white/60 text-sm mb-1">{t("الميزانية الإجمالية", "Budget Total", "Total Budget")}</p>
                <p className="text-3xl font-bold text-secondary">275,946.72 MAD</p>
              </div>
              <Link href="/projects"><Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 rounded-xl font-bold text-lg w-full sm:w-auto">{t("اقرأ التفاصيل", "Voir les détails", "View Details")}</Button></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
