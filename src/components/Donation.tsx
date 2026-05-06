"use client"

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Copy, Check, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Donation = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const rib = "53 00000000010508050 810 350";

  const copyRib = () => {
    navigator.clipboard.writeText(rib.replace(/\s/g, ''));
    setCopied(true);
    toast({
      title: t("تم النسخ بنجاح", "Copié avec succès"),
      description: t("يمكنك الآن لصق الرقم في تطبيقك البنكي.", "Vous pouvez maintenant coller le RIB dans votre application bancaire."),
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Donation Info */}
          <div className="lg:w-3/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              {t("ساهم في دعم مشاريعنا", "Contribuez à nos projets")}
            </h2>
            <p className="text-white/70 text-xl mb-12 max-w-xl">
              {t("تبرعكم هو وقود عملنا. كل درهم يساهم في تغيير حياة إنسان بدوار أنروز.", "Votre don est le moteur de notre action. Chaque dirham compte.")}
            </p>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-secondary text-sm font-bold tracking-widest uppercase mb-1">
                    {t("معلومات بنكية", "Informations Bancaires")}
                  </h3>
                  <p className="text-2xl font-bold">AL BARID BANK</p>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Logo_Al_Barid_Bank.png" alt="Barid Bank" className="h-12 object-contain brightness-0 invert opacity-50" />
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-white/50 text-sm mb-2" dir="ltr">{t("رقم الحساب البنكي (RIB)", "Numéro RIB", "Bank Account (RIB)")}</p>
                  <div className="flex items-center justify-between bg-white/10 p-4 rounded-xl border border-white/5 group">
                    <span className="text-lg md:text-xl font-mono tracking-wider"><span dir="ltr">{rib}</span></span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyRib}
                      className="hover:bg-white/20 text-white"
                    >
                      {copied ? <Check className="w-5 h-5 text-secondary" /> : <Copy className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-white/50 text-sm mb-1">SWIFT / BIC</p>
                    <p className="text-xl font-mono">BMCEMAMC</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">{t("اسم الحساب", "Nom du compte")}</p>
                    <p className="text-lg font-bold">ASS AGADIR OUMLIL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold border-b border-white/10 pb-4">
                {t("تواصل معنا مباشرة", "Contact Direct")}
              </h3>

              <a href="tel:+212668043935" dir="ltr" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">{t("اتصال هاتفي", "Appelez-nous")}</p>
                  <p className="text-xl font-bold tracking-wider">+212 668-043935</p>
                </div>
              </a>

              <a href="mailto:contact.agadiroumlil@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">{t("البريد الإلكتروني", "Email")}</p>
                  <p className="text-xl font-bold">contact.agadiroumlil@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white/50 text-sm">{t("العنوان", "Adresse")}</p>
                  <p className="text-xl font-bold">Douar Anrouz, Taroudant</p>
                </div>
              </div>

              <div className="pt-8">
                <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white w-full py-7 rounded-2xl" asChild>
                  <a href="https://maps.app.goo.gl/yvaqHo72LmcA9uog9" target="_blank" rel="noopener noreferrer">
                    {t("موقعنا على الخريطة", "Localisation Google Maps")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
