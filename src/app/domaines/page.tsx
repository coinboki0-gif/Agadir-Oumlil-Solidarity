"use client"

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  HeartPulse, GraduationCap, Moon, Home, Droplets, Landmark,
  ChevronRight, ArrowRight, Users, MapPin, Calendar, TrendingUp,
  CheckCircle2, ExternalLink
} from 'lucide-react';

const domains = [
  {
    id: "sante",
    icon: HeartPulse,
    color: { bg: "from-rose-500/10 to-rose-600/5", icon: "bg-rose-50 text-rose-600", badge: "bg-rose-100 text-rose-700" },
    titleAr: "الدعم الطبي",
    titleFr: "Soutien Médical",
    subtitleAr: "الصحة حق للجميع",
    subtitleFr: "La santé, un droit pour tous",
    descAr: "نموّل العمليات الجراحية الطارئة، وشراء الأدوية، ودعم التكاليف الطبية للأسر العاجزة عن تحمّل نفقات العلاج.",
    descFr: "Nous finançons des chirurgies d'urgence, l'achat de médicaments et les frais médicaux pour les familles dans le besoin.",
    budget: "83,000 DH",
    year: "2025",
    beneficiaries: "+12",
    beneficiariesLabelAr: "مريض مستفيد",
    beneficiariesLabelFr: "patients aidés",
    actions: [
      { ar: "تمويل عمليات جراحية معقدة", fr: "Financement d'opérations complexes" },
      { ar: "دعم مرضى السرطان وأمراض العيون", fr: "Soutien aux cancers et maladies oculaires" },
      { ar: "مساعدة أسر المرضى المتوفين", fr: "Aide aux familles de patients décédés" },
      { ar: "تغطية تكاليف ما بعد العمليات", fr: "Prise en charge post-opératoire" },
    ]
  },
  {
    id: "education",
    icon: GraduationCap,
    color: { bg: "from-blue-500/10 to-blue-600/5", icon: "bg-blue-50 text-blue-600", badge: "bg-blue-100 text-blue-700" },
    titleAr: "دعم التعليم",
    titleFr: "Éducation",
    subtitleAr: "نبني المستقبل بالعلم",
    subtitleFr: "Construire l'avenir par le savoir",
    descAr: "نوفّر المحافظ المدرسية واللوازم والملابس للأطفال عند بداية كل موسم دراسي، ونساهم في ترميم المؤسسات التعليمية.",
    descFr: "Nous fournissons cartables, fournitures et vêtements aux enfants à chaque rentrée, et contribuons à la rénovation des établissements.",
    budget: "30,000 DH",
    year: "2025",
    beneficiaries: "+30",
    beneficiariesLabelAr: "تلميذ مستفيد",
    beneficiariesLabelFr: "élèves soutenus",
    actions: [
      { ar: "توزيع المحافظ والأدوات المدرسية", fr: "Distribution de cartables et fournitures" },
      { ar: "دعم الطلاب من المرحلة الابتدائية للجامعية", fr: "Du primaire à l'université" },
      { ar: "ترميم المدارس التقليدية", fr: "Rénovation des écoles traditionnelles" },
      { ar: "دعم دور الطالب", fr: "Soutien aux foyers étudiants" },
    ]
  },
  {
    id: "ramadan",
    icon: Moon,
    color: { bg: "from-amber-500/10 to-amber-600/5", icon: "bg-amber-50 text-amber-600", badge: "bg-amber-100 text-amber-700" },
    titleAr: "مساعدات رمضان",
    titleFr: "Aide Ramadan",
    subtitleAr: "البهجة لكل بيت",
    subtitleFr: "La joie dans chaque foyer",
    descAr: "كل عام خلال شهر رمضان المبارك، نوزّع قففاً غذائية على أكثر من 600 أسرة محتاجة في تارودانت والدار البيضاء.",
    descFr: "Chaque Ramadan, nous distribuons des paniers alimentaires à plus de 600 familles dans le besoin à Taroudant et Casablanca.",
    budget: "360,000 DH",
    year: "2025",
    beneficiaries: "+600",
    beneficiariesLabelAr: "أسرة مستفيدة",
    beneficiariesLabelFr: "familles bénéficiaires",
    actions: [
      { ar: "توزيع أكثر من 500 قفة في شمال تارودانت", fr: "Plus de 500 paniers dans le nord Taroudant" },
      { ar: "دعم الأسر القريبة من الدار البيضاء", fr: "Soutien aux familles près de Casablanca" },
      { ar: "كل قفة بقيمة 600 درهم", fr: "Chaque panier vaut 600 MAD" },
      { ar: "برنامج مستمر طوال شهر رمضان", fr: "Programme continu tout le mois" },
    ]
  },
  {
    id: "habitat",
    icon: Home,
    color: { bg: "from-emerald-500/10 to-emerald-600/5", icon: "bg-emerald-50 text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
    titleAr: "السكن والتنمية",
    titleFr: "Habitat & Développement",
    subtitleAr: "كرامة الإنسان في بيته",
    subtitleFr: "La dignité humaine commence au foyer",
    descAr: "نتدخل لتوفير سكن لائق للأسر المعوزة، وترميم المنازل المتضررة، وتحسين ظروف العيش في القرى الجبلية.",
    descFr: "Nous intervenons pour fournir un logement décent aux familles démunies et améliorer les conditions de vie dans les villages de montagne.",
    budget: "162,000 DH",
    year: "2025",
    beneficiaries: "1",
    beneficiariesLabelAr: "شقة مقتناة لأسرة محتاجة",
    beneficiariesLabelFr: "appartement acheté pour famille",
    actions: [
      { ar: "اقتناء شقة لأم من 3 أطفال بمنطقة أغمات", fr: "Achat d'appartement pour mère de 3 enfants" },
      { ar: "التجديد والتهيئة الكاملة", fr: "Rénovation et aménagement complet" },
      { ar: "ربط المياه والكهرباء", fr: "Raccordement eau et électricité" },
      { ar: "متابعة استمرارية المساكن", fr: "Suivi de la durabilité des logements" },
    ]
  },
  {
    id: "eau",
    icon: Droplets,
    color: { bg: "from-cyan-500/10 to-cyan-600/5", icon: "bg-cyan-50 text-cyan-600", badge: "bg-cyan-100 text-cyan-700" },
    titleAr: "مشاريع المياه",
    titleFr: "Projets d'Eau",
    subtitleAr: "الماء حياة",
    subtitleFr: "L'eau c'est la vie",
    descAr: "نبني قنوات الري، الخزانات، والآبار لضمان وصول المياه النظيفة لسكان القرى المعزولة في جبال تارودانت.",
    descFr: "Nous construisons canaux d'irrigation, réservoirs et puits pour garantir l'accès à l'eau dans les villages isolés de Taroudant.",
    budget: "275,946 DH",
    year: "مستمر",
    beneficiaries: "200+",
    beneficiariesLabelAr: "ساكن مستفيد",
    beneficiariesLabelFr: "habitants bénéficiaires",
    actions: [
      { ar: "شبكة مياه الشرب لدوار أنروز", fr: "Réseau eau potable Anarzo" },
      { ar: "بناء قناة ري خرسانية بطول 600م", fr: "Canal d'irrigation béton 600m" },
      { ar: "حفر بئر عمقها 120م", fr: "Forage d'un puits de 120m de profondeur" },
      { ar: "خزان مياه للري الزراعي", fr: "Réservoir pour l'irrigation agricole" },
    ]
  },
  {
    id: "infrastructure",
    icon: Landmark,
    color: { bg: "from-purple-500/10 to-purple-600/5", icon: "bg-purple-50 text-purple-600", badge: "bg-purple-100 text-purple-700" },
    titleAr: "البنية التحتية",
    titleFr: "Infrastructure Communautaire",
    subtitleAr: "نبني ما يجمع",
    subtitleFr: "Bâtir ce qui unit",
    descAr: "نُرمّم المساجد، نبني المقابر، ونُعيد تهيئة المرافق الجماعية لتعزيز التماسك الاجتماعي في القرى الجبلية.",
    descFr: "Nous rénovons les mosquées, construisons des cimetières et réaménageons les équipements communautaires.",
    budget: "مستمر",
    year: "مستمر",
    beneficiaries: "∞",
    beneficiariesLabelAr: "مجتمع بأكمله",
    beneficiariesLabelFr: "communauté entière",
    actions: [
      { ar: "إعادة بناء مسجد دوار أنروز", fr: "Reconstruction mosquée Anarzo" },
      { ar: "ترميم مسجد دوار أغني", fr: "Rénovation mosquée Aguni" },
      { ar: "بناء مقبرة جديدة", fr: "Construction nouveau cimetière" },
      { ar: "ترميم المدرسة القرآنية التاريخية بتاويالت", fr: "Réfection madrasa historique de Tawyalt" },
    ]
  }
];

function DomainesContent() {
  const { t, isRtl } = useLanguage();
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background" dir={isRtl ? "rtl" : "ltr"}>
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-white/20 translate-x-1/3 translate-y-1/3" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.3" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-bold tracking-widest uppercase mb-6 border border-secondary/30">
            <MapPin className="w-4 h-4" />
            {t("دوار أنروز، إقليم تارودانت", "Douar Anrouz, Province de Taroudant")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("مجالات", "Nos")} <span className="text-secondary">{t("تدخّلنا", "Domaines")}</span>
            {t("", " d'Action")}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t(
              "ستة محاور تنموية متكاملة تخدم المجتمعات الأكثر هشاشة في جبال تارودانت.",
              "Six axes de développement intégrés au service des communautés les plus vulnérables des montagnes de Taroudant."
            )}
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { valueAr: "635,000 DH", valueFr: "635,000 DH", labelAr: "إجمالي 2025", labelFr: "Total 2025" },
              { valueAr: "+600", valueFr: "+600", labelAr: "أسرة مستفيدة", labelFr: "familles aidées" },
              { valueAr: "10+", valueFr: "10+", labelAr: "سنوات خبرة", labelFr: "ans d'expérience" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary">{t(stat.valueAr, stat.valueFr)}</div>
                <div className="text-white/60 text-xs mt-1">{t(stat.labelAr, stat.labelFr)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-secondary/10 text-secondary font-bold text-sm tracking-widest uppercase">
              {t("اكتشف أكثر", "Découvrir")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {t("كل مجال قصة نجاح", "Chaque domaine, une histoire de succès")}
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain) => {
              const Icon = domain.icon;
              const isActive = activeId === domain.id;
              return (
                <div
                  key={domain.id}
                  className={`group relative bg-gradient-to-br ${domain.color.bg} rounded-3xl border border-white/80 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
                  onClick={() => setActiveId(isActive ? null : domain.id)}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/20 -mr-10 -mt-10 transition-all duration-500 group-hover:scale-125" />
                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`p-3.5 rounded-2xl transition-all duration-300 inline-flex ${domain.color.icon} group-hover:scale-110`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {t(domain.titleAr, domain.titleFr)}
                    </h3>
                    <p className="text-secondary text-sm font-medium mb-3">
                      {t(domain.subtitleAr, domain.subtitleFr)}
                    </p>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-4 ${domain.color.badge}`}>
                      <TrendingUp className="w-3 h-3" />
                      {domain.budget} • {domain.year}
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {t(domain.descAr, domain.descFr)}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-bold text-primary">{domain.beneficiaries}</span>
                      <span className="text-xs text-muted-foreground">
                        {t(domain.beneficiariesLabelAr, domain.beneficiariesLabelFr)}
                      </span>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="pt-4 border-t border-white/60">
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                          {t("أبرز أعمالنا", "Nos actions clés")}
                        </p>
                        <ul className="space-y-2">
                          {domain.actions.map((action, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                              {t(action.ar, action.fr)}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button className="mt-4 text-xs font-semibold text-secondary flex items-center gap-1 hover:gap-2 transition-all">
                      {isActive ? t("إخفاء ←", "← Réduire") : t("← تفاصيل أكثر", "Voir les détails →")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 -translate-x-1/4 translate-y-1/4" />
            <div className="relative z-10">
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {t("إجمالي الإنفاق 2025", "Total des dépenses 2025")}
              </p>
              <p className="text-5xl md:text-6xl font-bold text-secondary">635,000 DH</p>
              <p className="text-white/50 text-sm mt-2">{t("≈ 63,500 €", "≈ 63,500 €")}</p>
            </div>
            <div className="relative z-10 flex flex-col gap-4 md:items-end text-center md:text-right">
              <p className="text-white/70 max-w-sm text-sm leading-relaxed">
                {t(
                  "كل درهم يُنفق بشفافية تامة لصالح المجتمعات الأكثر هشاشة في إقليم تارودانت.",
                  "Chaque dirham est dépensé en toute transparence au profit des communautés les plus vulnérables."
                )}
              </p>
              <div className="flex gap-3 flex-wrap justify-center md:justify-end">
                <Link href="/projects">
                  <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold gap-2">
                    {t("مشاريعنا", "Nos Projets")}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2">
                    {t("تبرع الآن", "Faire un don")}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">
              {t("تطور الإنفاق عبر السنوات", "Évolution des dépenses annuelles")}
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { year: "2023", total: "+782,000 DH", isDark: false, items: [
                { ar: "تعليم", fr: "Éducation", val: "20,000" },
                { ar: "صحة", fr: "Santé", val: "62,000" },
                { ar: "رمضان", fr: "Ramadan", val: "282,000" },
                { ar: "بنية تحتية", fr: "Infrastructure", val: "+418,000" },
              ]},
              { year: "2024", total: "+832,000 DH", isDark: false, items: [
                { ar: "تعليم", fr: "Éducation", val: "40,000" },
                { ar: "صحة", fr: "Santé", val: "62,000" },
                { ar: "رمضان", fr: "Ramadan", val: "360,000" },
                { ar: "بنية تحتية", fr: "Infrastructure", val: "370,000" },
              ]},
              { year: "2025", total: "635,000 DH", isDark: true, items: [
                { ar: "تعليم", fr: "Éducation", val: "30,000" },
                { ar: "صحة", fr: "Santé", val: "83,000" },
                { ar: "رمضان", fr: "Ramadan", val: "360,000" },
                { ar: "مشاريع تنموية", fr: "Projets dév.", val: "162,000" },
              ]},
            ].map((yr) => (
              <div key={yr.year} className={`rounded-3xl border p-8 ${yr.isDark ? "bg-primary border-primary" : "bg-primary/10 border-primary/20"}`}>
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-5xl font-bold ${yr.isDark ? "text-secondary" : "text-primary"}`}>{yr.year}</span>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full ${yr.isDark ? "bg-white/10 text-white" : "bg-white text-primary"}`}>
                    {yr.total}
                  </span>
                </div>
                <ul className="space-y-3">
                  {yr.items.map((item, i) => (
                    <li key={i} className="flex justify-between items-center">
                      <span className={`text-sm ${yr.isDark ? "text-white/70" : "text-muted-foreground"}`}>
                        {t(item.ar, item.fr)}
                      </span>
                      <span className={`text-sm font-bold ${yr.isDark ? "text-secondary" : "text-primary"}`}>
                        {item.val} DH
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Toaster />
    </main>
  );
}

export default function DomainesPage() {
  return (
    <LanguageProvider>
      <DomainesContent />
    </LanguageProvider>
  );
}
