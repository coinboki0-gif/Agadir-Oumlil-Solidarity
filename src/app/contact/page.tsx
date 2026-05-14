"use client"
import React from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';

function ContactContent() {
  const { t, isRtl } = useLanguage();

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-background">

      {/* Hero */}
      <div className="relative h-56 md:h-80 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/images/hero-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-16 md:pt-20">
          <span className="inline-block bg-secondary/20 text-secondary border border-secondary/30 rounded-full px-4 py-1 text-xs md:text-sm font-semibold mb-3 md:mb-4">
            {t("تواصل معنا", "Contactez-nous")}
          </span>
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 md:mb-3">
            {t("نحن هنا من أجلك", "Nous sommes là pour vous")}
          </h1>
          <p className="text-white/70 max-w-xl text-sm md:text-lg px-2">
            {t("تواصل معنا لأي استفسار أو دعم أو شراكة", "Contactez-nous pour toute question, soutien ou partenariat")}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">

        {/* بطاقات المعلومات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 md:mb-12">

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-border flex items-start gap-4 hover:shadow-md transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-50 text-blue-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">{t("العنوان", "Adresse")}</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{t("دوار أنروز، إقليم تارودانت، المغرب", "Douar Anrouz, Province de Taroudant, Maroc")}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-border flex items-start gap-4 hover:shadow-md transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-green-50 text-green-600">
              <Phone className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">{t("الهاتف", "Téléphone")}</p>
              <a href="tel:+212673028454" className="text-sm text-foreground/80 hover:text-primary transition-colors block">+212 673-028454</a>
              <a href="tel:+212673735258" className="text-sm text-foreground/80 hover:text-primary transition-colors block">+212 673-735258</a>
            </div>
          </div>

          {/* ← الإصلاح الرئيسي: break-all + min-w-0 */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-border flex items-start gap-4 hover:shadow-md transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-50 text-orange-600">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">{t("البريد الإلكتروني", "Email")}</p>
              <a href="mailto:contact.agadiroumlil@gmail.com"
                className="text-sm text-foreground/80 hover:text-primary transition-colors break-all">
                contact.agadiroumlil@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-border flex items-start gap-4 hover:shadow-md transition-all duration-300">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-purple-50 text-purple-600">
              <Clock className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1.5">{t("ساعات العمل", "Heures d'ouverture")}</p>
              <p className="text-sm text-foreground/80">{t("الإثنين – الجمعة", "Lundi – Vendredi")}</p>
              <p className="text-sm text-foreground/80">9h00 – 17h00</p>
            </div>
          </div>

        </div>

        {/* أزرار التواصل — عمود واحد على الهاتف */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          <a href="https://wa.me/212673028454" target="_blank" rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 flex items-center sm:flex-col gap-4 sm:gap-3 sm:text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-base md:text-lg">WhatsApp</p>
              <p className="text-xs md:text-sm text-white/80 mt-0.5">{t("تواصل معنا مباشرة", "Contactez-nous directement")}</p>
            </div>
          </a>

          <a href="mailto:contact.agadiroumlil@gmail.com"
            className="bg-primary hover:bg-primary/90 text-white rounded-2xl p-5 flex items-center sm:flex-col gap-4 sm:gap-3 sm:text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-base md:text-lg">{t("البريد الإلكتروني", "Email")}</p>
              <p className="text-xs md:text-sm text-white/80 mt-0.5">{t("أرسل لنا رسالة", "Envoyez-nous un email")}</p>
            </div>
          </a>

          <a href="tel:+212673028454"
            className="bg-secondary hover:bg-secondary/90 text-white rounded-2xl p-5 flex items-center sm:flex-col gap-4 sm:gap-3 sm:text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
              <Send className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-base md:text-lg">{t("اتصل بنا", "Appelez-nous")}</p>
              <p className="text-xs md:text-sm text-white/80 mt-0.5">+212 673-028454</p>
            </div>
          </a>
        </div>

        {/* الخريطة — أقصر على الهاتف */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
          <div className="p-5 border-b border-border">
            <h2 className="text-lg md:text-xl font-bold text-primary flex items-center gap-2">
              <MapPin className="w-5 h-5 text-secondary" />
              {t("موقعنا على الخريطة", "Notre emplacement")}
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              {t("دوار أنروز، إقليم تارودانت، المغرب", "Douar Anrouz, Province de Taroudant, Maroc")}
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106761.24!2d-8.87!3d30.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb08865b!2sTaroudant!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
            width="100%"
            height="280"
            className="md:h-[400px]"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a href="https://maps.google.com/?q=Taroudant,Morocco" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 text-sm font-semibold text-primary hover:text-secondary transition-colors border-t border-border">
            <MapPin className="w-4 h-4" />
            {t("فتح في Google Maps", "Ouvrir dans Google Maps", "Open in Google Maps")}
          </a>
        </div>

      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <LanguageProvider>
      <main>
        <Navbar />
        <ContactContent />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
