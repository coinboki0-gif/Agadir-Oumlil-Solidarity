"use client"

import React from "react";
import { useLanguage } from "./LanguageContext";
import { MapPin, ExternalLink, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-background border-t pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Image src="/images/logo-navbar.png" alt="Association Agadir Oumlil" width={180} height={72} className="h-16 w-auto object-contain" />
            <p className="text-muted-foreground leading-relaxed">
              {t("جمعية تنموية خيرية تعمل على دعم الفئات الهشة بإقليم تارودانت.", "Une association dédiée au soutien des plus démunis dans la province de Taroudant.")}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-primary text-lg mb-6">{t("روابط سريعة", "Liens Rapides")}</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/about" className="hover:text-secondary transition-colors">{t("من نحن", "À propos")}</Link></li>
              <li><Link href="/domaines" className="hover:text-secondary transition-colors">{t("مجالات التدخل", "Domaines")}</Link></li>
              <li><Link href="/projects" className="hover:text-secondary transition-colors">{t("مشاريع منجزة", "Projets")}</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">{t("تواصل معنا", "Contact")}</Link></li>
              <li><Link href="/contact" className="font-semibold text-secondary hover:text-secondary/80 transition-colors">{t("تبرع الآن", "Faire un don")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary text-lg mb-6">{t("معلومات التواصل", "Contact")}</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>Douar Anrouz, Province de Taroudant, Maroc</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a href="mailto:contact.agadiroumlil@gmail.com" className="hover:text-secondary transition-colors text-xs" style={{wordBreak:"break-all",overflowWrap:"anywhere",fontSize:"0.78rem"}}>contact.agadiroumlil@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+212668043935" className="hover:text-secondary transition-colors" dir="ltr">+212 668-043935</a>
                  <a href="tel:+212673735258" className="hover:text-secondary transition-colors" dir="ltr">+212 673-735258</a>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary text-lg mb-6">{t("موقعنا الجغرافي", "Localisation")}</h4>
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-md" style={{height:"180px"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53669.0!2d-8.056!3d30.721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb8b548d6a59d8b%3A0x8d4f6e1e2a9b0c3a!2sTaouiyalt%2C%20Taroudant!5e0!3m2!1sfr!2sma!4v1715000000000!5m2!1sfr!2sma" width="100%" height="180" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localisation Douar Anrouz" />
              <a href="https://maps.app.goo.gl/yvaqHo72LmcA9uog9" target="_blank" rel="noopener noreferrer" className="absolute bottom-3 right-3 bg-white text-primary font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs shadow-lg hover:bg-secondary hover:text-white transition-colors">
                <ExternalLink className="w-3 h-3" />
                {t("افتح الخريطة", "Ouvrir")}
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t flex items-center justify-center text-sm text-muted-foreground">
          <p>Copyright 2026 © Association Agadir Oumlil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};