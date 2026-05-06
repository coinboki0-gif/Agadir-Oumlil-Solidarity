"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { HeartPulse, GraduationCap, Moon, Home, Droplets, Landmark } from 'lucide-react';

export const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: <HeartPulse className="w-7 h-7" />,
      titleAr: "الدعم الطبي",
      titleFr: "Soutien Médical",
      descAr: "تمويل العمليات الجراحية وشراء الأدوية للحالات المستعجلة.",
      descFr: "Financement d'opérations et achat de médicaments.",
      amount: "83,000 DH (2025)",
      color: "from-rose-500/10 to-rose-600/5",
      iconColor: "bg-rose-50 text-rose-600 group-hover:bg-rose-500 group-hover:text-white",
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      titleAr: "دعم التعليم",
      titleFr: "Éducation",
      descAr: "توفير المحافظ، اللوازم المدرسية، ودعم المدارس المحلية.",
      descFr: "Soutien aux écoliers et infrastructures scolaires.",
      amount: "30,000 DH (2025)",
      color: "from-blue-500/10 to-blue-600/5",
      iconColor: "bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
    },
    {
      icon: <Moon className="w-7 h-7" />,
      titleAr: "مساعدات رمضان",
      titleFr: "Aide Ramadan",
      descAr: "توزيع القفف الغذائية على الأسر المعوزة في المناطق النائية.",
      descFr: "Distribution de paniers alimentaires aux démunis.",
      amount: "360,000 DH (2025)",
      color: "from-amber-500/10 to-amber-600/5",
      iconColor: "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white",
    },
    {
      icon: <Home className="w-7 h-7" />,
      titleAr: "السكن والتنمية",
      titleFr: "Habitat & Dev",
      descAr: "تحسين ظروف السكن وترميم المنازل المتضررة.",
      descFr: "Amélioration des conditions d'habitat rural.",
      amount: "162,000 DH (2025)",
      color: "from-emerald-500/10 to-emerald-600/5",
      iconColor: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white",
    },
    {
      icon: <Droplets className="w-7 h-7" />,
      titleAr: "مشاريع المياه",
      titleFr: "Projets d'Eau",
      descAr: "بناء قنوات السقي، الخزانات، وتوفير الماء الصالح للشرب.",
      descFr: "Construction de canaux et accès à l'eau potable.",
      amount: "275,946 DH",
      color: "from-cyan-500/10 to-cyan-600/5",
      iconColor: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white",
    },
    {
      icon: <Landmark className="w-7 h-7" />,
      titleAr: "إعادة الإعمار",
      titleFr: "Reconstruction",
      descAr: "ترميم المساجد، المقابر، والمرافق الجماعية.",
      descFr: "Rénovation de mosquées et espaces communautaires.",
      amount: "مستمر / Continu",
      color: "from-purple-500/10 to-purple-600/5",
      iconColor: "bg-purple-50 text-purple-600 group-hover:bg-purple-500 group-hover:text-white",
    }
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-widest uppercase">
            {t("ما نفعله", "Ce que nous faisons")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t("مجالات تدخلنا", "Nos Domaines d'Intervention")}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t(
              "نعمل على تحسين جودة الحياة في دوار أنروز والمناطق المجاورة من خلال برامج تنموية متكاملة.",
              "Nous œuvrons pour améliorer la qualité de vie à travers des programmes de développement intégrés."
            )}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br ${program.color} rounded-3xl p-8 border border-white/80 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default`}
            >
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -mr-8 -mt-8" />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-6 p-3.5 rounded-2xl transition-all duration-300 inline-flex ${program.iconColor}`}>
                  {program.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-2">
                  {t(program.titleAr, program.titleFr)}
                </h3>

                {/* Amount badge */}
                <span className="inline-block px-3 py-1 bg-white/70 text-secondary text-xs font-bold rounded-full mb-4 border border-secondary/20">
                  {program.amount}
                </span>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(program.descAr, program.descFr)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Total banner */}
        <div className="mt-12 bg-primary rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <p className="text-white/60 text-sm uppercase tracking-widest mb-1">
              {t("إجمالي الإنفاق 2025", "Total des dépenses 2025")}
            </p>
            <p className="text-4xl font-bold text-secondary">635,000 DH</p>
          </div>
          <div className="text-right">
            <p className="text-white/70 max-w-md text-sm leading-relaxed">
              {t(
                "كل درهم يُنفق بشفافية تامة لصالح المجتمعات الأكثر هشاشة في إقليم تارودانت.",
                "Chaque dirham est dépensé en toute transparence au profit des communautés les plus vulnérables."
              )}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
