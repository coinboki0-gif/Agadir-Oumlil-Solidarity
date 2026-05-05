"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { HeartPulse, GraduationCap, Moon, Home, Droplets, Landmark } from 'lucide-react';

export const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      icon: <HeartPulse className="w-8 h-8" />,
      titleAr: "الدعم الطبي",
      titleFr: "Soutien Médical",
      descAr: "تمويل العمليات الجراحية وشراء الأدوية للحالات المستعجلة.",
      descFr: "Financement d'opérations et achat de médicaments.",
      amount: "83,000 DH (2025)"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      titleAr: "دعم التعليم",
      titleFr: "Éducation",
      descAr: "توفير المحافظ، اللوازم المدرسية، ودعم المدارس المحلية.",
      descFr: "Soutien aux écoliers et infrastructures scolaires.",
      amount: "30,000 DH (2025)"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      titleAr: "مساعدات رمضان",
      titleFr: "Aide Ramadan",
      descAr: "توزيع القفف الغذائية على الأسر المعوزة في المناطق النائية.",
      descFr: "Distribution de paniers alimentaires aux démunis.",
      amount: "360,000 DH (2025)"
    },
    {
      icon: <Home className="w-8 h-8" />,
      titleAr: "السكن والتنمية",
      titleFr: "Habitat & Dev",
      descAr: "تحسين ظروف السكن وترميم المنازل المتضررة.",
      descFr: "Amélioration des conditions d'habitat rural.",
      amount: "162,000 DH (2025)"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      titleAr: "مشاريع المياه",
      titleFr: "Projets d'Eau",
      descAr: "بناء قنوات السقي، الخزانات، وتوفير الماء الصالح للشرب.",
      descFr: "Construction de canaux et accès à l'eau potable.",
      amount: "275,946 DH"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      titleAr: "إعادة الإعمار",
      titleFr: "Reconstruction",
      descAr: "ترميم المساجد، المقابر، والمرافق الجماعية.",
      descFr: "Rénovation de mosquées et espaces communautaires.",
      amount: "مستمر / Continu"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {t("مجالات تدخلنا", "Nos Domaines d'Intervention")}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("نعمل على تحسين جودة الحياة في دوار أنروز والمناطق المجاورة من خلال برامج تنموية متكاملة.", "Nous œuvrons pour améliorer la qualité de vie à travers des programmes de développement intégrés.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <Card key={idx} className="group hover:shadow-2xl transition-all duration-300 border-none glass overflow-hidden translate-y-0 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="mb-6 p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-secondary group-hover:text-white transition-colors duration-300 inline-block">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {t(program.titleAr, program.titleFr)}
                </h3>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full mb-4">
                  {program.amount}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {t(program.descAr, program.descFr)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
