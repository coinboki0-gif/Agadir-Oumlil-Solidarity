"use client"

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Handshake, Facebook, Instagram, Twitter, Youtube, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-secondary p-2 rounded-full">
                <Handshake className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">
                {t("جمعية أكادير أوملال", "Assoc. Agadir Oumlil")}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t(
                "جمعية تنموية خيرية تعمل على دعم الفئات الهشة والمساهمة في فك العزلة عن المناطق القروية بإقليم تارودانت.",
                "Une association de développement dédiée au soutien des plus démunis dans la province de Taroudant."
              )}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-secondary hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-primary text-lg mb-6">{t("روابط سريعة", "Liens Rapides")}</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors">{t("من نحن", "À propos")}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t("مجالات التدخل", "Domaines d'action")}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t("مشاريع منجزة", "Projets réalisés")}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t("آخر الأخبار", "Dernières nouvelles")}</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">{t("تبرع الآن", "Faire un don")}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary text-lg mb-6">{t("معلومات التواصل", "Contact")}</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>Douar Anrouz, Province de Taroudant, Maroc</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-secondary">M:</span>
                <span>contact.agadiroumlil@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-secondary">T:</span>
                <span>+212 668-043935</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-secondary">T:</span>
                <span>+212 673-735258</span>
              </li>
            </ul>
          </div>

          {/* Map Link */}
          <div>
            <h4 className="font-bold text-primary text-lg mb-6">{t("موقعنا الجغرافي", "Localisation")}</h4>
            <div className="relative group rounded-2xl overflow-hidden border aspect-video">
              <img
                src="https://picsum.photos/seed/map/400/250"
                alt="Map preview"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <a
                href="https://maps.app.goo.gl/yvaqHo72LmcA9uog9"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white text-primary font-bold px-4 py-2 rounded-full flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  {t("افتح الخريطة", "Google Maps")}
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>Copyright 2025 © Association Agadir Oumlil. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">{t("سياسة الخصوصية", "Vie privée")}</a>
            <a href="#" className="hover:text-primary transition-colors">{t("شروط الاستخدام", "Conditions")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
