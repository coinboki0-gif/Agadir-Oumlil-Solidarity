"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';

import { Moon, Package, Users, BadgeCheck } from 'lucide-react';

export const Ramadan = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#D4A017]/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
        <Moon className="w-64 h-64 text-secondary" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#D4A017] rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md mb-6">
                <Moon className="w-4 h-4 fill-white" />
                <span className="text-sm font-bold uppercase tracking-widest">{t("مبادرة سنوية", "Initiative Annuelle")}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {t("قافلة التضامن الرمضانية 2026", "Caravane Solidaire Ramadan 2026")}
              </h2>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">
                {t(
                  "نهدف هذا العام لتوزيع أكثر من 500 سلة غذائية متكاملة للأسر المتضررة في إقليم تارودانت، بقيمة 600 درهم لكل سلة، لضمان مائدة كريمة للجميع.",
                  "Nous visons à distribuer 500 paniers alimentaires à Taroudant, d'une valeur de 600 DH chacun, pour assurer un ramadan digne."
                )}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Package className="w-8 h-8 mb-4 text-white" />
                  <p className="text-3xl font-bold mb-1">500+</p>
                  <p className="text-xs text-white/70">{t("سلة غذائية", "Paniers")}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Users className="w-8 h-8 mb-4 text-white" />
                  <p className="text-3xl font-bold mb-1">600+</p>
                  <p className="text-xs text-white/70">{t("أسرة مستفيدة", "Familles")}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                  <BadgeCheck className="w-8 h-8 mb-4 text-white" />
                  <p className="text-3xl font-bold mb-1">600 DH</p>
                  <p className="text-xs text-white/70">{t("قيمة السلة", "Valeur/Panier")}</p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-white/20 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all" />
                <img
                  src="https://i.ibb.co/9H7s46fK/Whats-App-Image-2026-05-13-at-18-12-20.jpg"
                  alt="Ramadan Aid"
                  className="relative rounded-[2rem] shadow-2xl w-full h-[450px] object-cover border-4 border-white/10"
                  data-ai-hint="charity food"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
