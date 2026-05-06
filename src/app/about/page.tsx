"use client"

import React, { useEffect, useRef, useState } from 'react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Heart,
  BookOpen,
  Droplets,
  Home,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  MapPin,
  Calendar,
} from 'lucide-react';

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString('fr-FR')}
      {suffix}
    </span>
  );
}

function AboutContent() {
  const { t, isRtl } = useLanguage();

  const stats = [
    { valueNum: 1467, suffix: 'K', labelFr: 'MAD investis (3 ans)', labelAr: 'درهم مستثمر (3 سنوات)', icon: TrendingUp },
    { valueNum: 1000, suffix: '+', labelFr: 'Bénéficiaires directs', labelAr: 'مستفيد مباشر', icon: Users },
    { valueNum: 1200, suffix: '+', labelFr: 'Familles Ramadan aidées', labelAr: 'عائلة مستفادة في رمضان', icon: Heart },
    { valueNum: 6, suffix: '+', labelFr: 'Projets réalisés', labelAr: 'مشروع منجز', icon: Award },
  ];

  const domains = [
    {
      icon: Heart,
      titleFr: 'Santé',
      titleAr: 'الصحة',
      descFr: "Financement d'opérations chirurgicales, soutien aux familles face aux maladies graves et accès aux soins pour les plus vulnérables.",
      descAr: 'تمويل العمليات الجراحية، ومساعدة الأسر في مواجهة الأمراض الخطيرة، والوصول إلى الرعاية الصحية للفئات الأكثر هشاشة.',
      color: 'from-red-500/10 to-rose-500/10',
      border: 'border-red-200',
      iconBg: 'bg-red-100 text-red-600',
      examples: ['83 000 DH en 2025', '+50 000 DH/an en chirurgie'],
    },
    {
      icon: BookOpen,
      titleFr: 'Éducation',
      titleAr: 'التعليم',
      descFr: "Distribution de fournitures scolaires, réhabilitation d'écoles coraniques et soutien financier aux étudiants de Douar Anarzo chaque rentrée.",
      descAr: 'توزيع اللوازم المدرسية، وإعادة تأهيل المدارس القرآنية، والدعم المالي لطلاب دوار أنارزو في كل موسم دراسي.',
      color: 'from-blue-500/10 to-indigo-500/10',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100 text-blue-600',
      examples: ['30 000 DH/an', '+60 élèves soutenus'],
    },
    {
      icon: Droplets,
      titleFr: 'Eau & Irrigation',
      titleAr: 'المياه والري',
      descFr: "Construction de réseaux d'eau potable, réhabilitation de bassins d'irrigation et développement de l'infrastructure hydraulique rurale.",
      descAr: 'إنشاء شبكات مياه الشرب، وإعادة تأهيل أحواض الري، وتطوير البنية التحتية المائية الريفية.',
      color: 'from-cyan-500/10 to-sky-500/10',
      border: 'border-cyan-200',
      iconBg: 'bg-cyan-100 text-cyan-600',
      examples: ['250 000 DH (2022)', '275 946 DH (2025)'],
    },
    {
      icon: Home,
      titleFr: 'Logement & Infrastructure',
      titleAr: 'السكن والبنية التحتية',
      descFr: "Acquisition d'appartements pour familles sans abri, reconstruction de mosquées, construction de cimetières et réhabilitation d'infrastructures communautaires.",
      descAr: 'اقتناء شقق للعائلات عديمة السكن، وإعادة بناء المساجد، وتشييد المقابر، وإعادة تأهيل البنية التحتية المجتمعية.',
      color: 'from-amber-500/10 to-yellow-500/10',
      border: 'border-amber-200',
      iconBg: 'bg-amber-100 text-amber-600',
      examples: ['+125 000 DH (logement)', '91 000 DH (cimetière)'],
    },
    {
      icon: Shield,
      titleFr: 'Aide humanitaire',
      titleAr: 'المساعدات الإنسانية',
      descFr: "Distribution de couffins alimentaires pendant le Ramadan, aide aux victimes de catastrophes naturelles comme le séisme de 2023.",
      descAr: 'توزيع سلال غذائية في رمضان، ومساعدة ضحايا الكوارث الطبيعية كزلزال 2023.',
      color: 'from-green-500/10 to-emerald-500/10',
      border: 'border-green-200',
      iconBg: 'bg-green-100 text-green-600',
      examples: ['600 familles/Ramadan', '100 000 DH (séisme 2023)'],
    },
    {
      icon: Globe,
      titleFr: 'Développement durable',
      titleAr: 'التنمية المستدامة',
      descFr: "Projets d'irrigation agricole pour soutenir la culture du safran à Douar Anrouz et garantir la sécurité alimentaire et économique des habitants.",
      descAr: 'مشاريع الري الزراعي لدعم زراعة الزعفران بدوار أنروز وضمان الأمن الغذائي والاقتصادي للسكان.',
      color: 'from-purple-500/10 to-violet-500/10',
      border: 'border-purple-200',
      iconBg: 'bg-purple-100 text-purple-600',
      examples: ['200 habitants bénéficiaires', 'Culture safran protégée'],
    },
  ];

  const timeline = [
    {
      year: '2022',
      titleFr: "Accès à l'eau potable",
      titleAr: 'الوصول إلى مياه الشرب',
      descFr: "Réalisation du projet d'alimentation en eau potable du village d'Anarzo — 250 000 MAD investis, connectant tous les foyers.",
      descAr: 'تنفيذ مشروع تزويد قرية أنارزو بمياه الشرب بتكلفة 250,000 درهم.',
      color: 'bg-cyan-500',
    },
    {
      year: '2023',
      titleFr: 'Réponse séisme & Ramadan',
      titleAr: 'الاستجابة للزلزال ورمضان',
      descFr: 'Aide urgence séisme (100 000 DH), distribution à 450+ familles pendant Ramadan, soutien scolaire et médical.',
      descAr: 'مساعدات طارئة لضحايا الزلزال (100,000 درهم)، وتوزيع مساعدات لـ 450 عائلة في رمضان.',
      color: 'bg-red-500',
    },
    {
      year: '2024',
      titleFr: 'Infrastructure communautaire',
      titleAr: 'البنية التحتية المجتمعية',
      descFr: 'Construction cimetière (91 000 DH), réhabilitation mosquée, soutien scolaire renforcé, 600 familles aidées en Ramadan.',
      descAr: 'بناء مقبرة جديدة (91,000 درهم)، وإعادة تأهيل المسجد، ومساعدة 600 عائلة في رمضان.',
      color: 'bg-amber-500',
    },
    {
      year: '2025',
      titleFr: 'Expansion & Impact majeur',
      titleAr: 'التوسع والأثر الكبير',
      descFr: 'Logement famille démunie (125 000 DH), 8 interventions médicales, irrigation agricole (275 946 DH), 635 000 DH dépenses totales.',
      descAr: 'توفير مسكن لعائلة محتاجة (125,000 درهم)، و8 تدخلات طبية، ومشروع ري زراعي (275,946 درهم).',
      color: 'bg-primary',
    },
  ];

  const values = [
    { icon: Heart, fr: 'Solidarité', ar: 'التضامن' },
    { icon: Shield, fr: 'Transparence', ar: 'الشفافية' },
    { icon: Users, fr: 'Communauté', ar: 'المجتمع' },
    { icon: TrendingUp, fr: 'Impact durable', ar: 'الأثر المستدام' },
    { icon: Globe, fr: 'Dignité humaine', ar: 'الكرامة الإنسانية' },
    { icon: CheckCircle, fr: 'Action concrète', ar: 'العمل الملموس' },
  ];

  return (
    <div className={cn("min-h-screen", isRtl ? "rtl" : "ltr")}>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            {t('دوار أنروز، إقليم تارودانت، المغرب', 'Douar Anrouz, Province de Taroudant, Maroc')}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            {t('من نحن', 'Qui sommes-nous ?')}
          </h1>
          <p className="text-xl md:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed mb-10">
            {t(
              'جمعية أكادير أوملال للتنمية والتضامن — نخدم المجتمعات الهشة في المغرب منذ سنوات من خلال الصحة والتعليم والسكن والمساعدات الإنسانية.',
              "Association Agadir Oumlil pour le Développement et la Solidarité — au service des communautés vulnérables du Maroc à travers la santé, l'éducation, le logement et l'aide humanitaire."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-secondary/30">
              {t('تبرع الآن', 'Faire un don')}
              <ArrowRight className={cn("w-5 h-5", isRtl ? "mr-2 rotate-180" : "ml-2")} />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm">
              {t('تواصل معنا', 'Nous contacter')}
            </Button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ valueNum, suffix, labelFr, labelAr, icon: Icon }) => (
              <div key={labelFr} className="flex flex-col items-center text-center p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                  <AnimatedNumber target={valueNum} suffix={suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">{t(labelAr, labelFr)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-4">
                {t('مهمتنا', 'Notre mission')}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-6">
                {t('تمكين المجتمعات وبناء مستقبل أفضل', 'Autonomiser les communautés pour un avenir meilleur')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t(
                  'تأسست جمعيتنا من قلب جبال تارودانت بهدف واحد: تحسين حياة الفئات الهشة عبر مشاريع ملموسة وشفافة تمس الصحة والتعليم والسكن والتنمية.',
                  "Fondée au cœur des montagnes de Taroudant avec un seul objectif : améliorer la vie des communautés vulnérables à travers des projets concrets et transparents touchant la santé, l'éducation, le logement et le développement."
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t(
                  'كل مشروع هو قصة نجاح تحكيها مجتمعات تارودانت — من مياه الشرب إلى العمليات الجراحية المنقذة للحياة، ومن الكتب المدرسية إلى المنازل الكريمة.',
                  "Chaque projet est une histoire de réussite racontée par les communautés de Taroudant — de l'eau potable aux opérations chirurgicales vitales, des fournitures scolaires aux logements dignes."
                )}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {values.map(({ icon: Icon, fr, ar }) => (
                  <div key={fr} className="flex items-center gap-3 p-3 rounded-xl bg-white border hover:border-primary/30 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{t(ar, fr)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary rounded-3xl p-8 text-white shadow-2xl shadow-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t("رئيس الجمعية", "Président de l'Association")}</div>
                    <div className="text-white/60 text-sm">Mr. Idriss Id Taleb</div>
                  </div>
                </div>
                <blockquote className="text-white/80 text-lg leading-relaxed italic mb-6 border-l-4 border-secondary pl-4">
                  {t(
                    '"كل قطعة نقود تُتبرع بها هي أمل يُوهب لعائلة. نحن لسنا مجرد جمعية — نحن جسر بين الخير والمحتاجين."',
                    '"Chaque dirham donné est un espoir offert à une famille. Nous ne sommes pas une simple association — nous sommes un pont entre la générosité et le besoin."'
                  )}
                </blockquote>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-secondary">3+</div>
                    <div className="text-white/60 text-sm">{t("سنوات من العمل", "années d'action")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-extrabold text-secondary">100%</div>
                    <div className="text-white/60 text-sm">{t("شفافية مالية", "transparence financière")}</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{t("مقرنا", "Siège social")}</div>
                  <div className="text-sm font-bold text-primary">Douar Anrouz, Taroudant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-4">
              {t('مسيرتنا', 'Notre parcours')}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
              {t("سنوات من التأثير", "Des années d'impact")}
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <div key={item.year} className={cn("relative flex flex-col md:flex-row items-center gap-8", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}>
                  <div className="w-full md:w-5/12">
                    <div className="bg-background rounded-2xl p-6 border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={cn("w-3 h-3 rounded-full", item.color)} />
                        <span className="text-sm text-muted-foreground font-medium">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-2">{t(item.titleAr, item.titleFr)}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t(item.descAr, item.descFr)}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={cn("w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white text-sm font-black", item.color)}>
                      {item.year.slice(2)}
                    </div>
                  </div>
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="py-24 bg-background" id="domaines">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block text-secondary font-bold text-sm uppercase tracking-widest mb-4">
              {t("مجالات العمل", "Domaines d'action")}
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              {t("تدخل شامل ومتكامل", "Une intervention globale et intégrée")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                "نعمل في ستة مجالات رئيسية لضمان التنمية الشاملة للمجتمعات التي نخدمها",
                "Nous intervenons dans six domaines clés pour garantir un développement global des communautés que nous servons"
              )}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map(({ icon: Icon, titleFr, titleAr, descFr, descAr, color, border, iconBg, examples }) => (
              <div key={titleFr} className={cn("rounded-2xl p-6 border bg-gradient-to-br hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group", color, border)}>
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", iconBg)}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{t(titleAr, titleFr)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(descAr, descFr)}</p>
                <div className="flex flex-col gap-1">
                  {examples.map((ex) => (
                    <div key={ex} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-500 shrink-0" />
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            {t("ساهم معنا", "Rejoignez notre cause")}
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {t("معًا نبني مستقبلًا أفضل", "Ensemble, construisons un avenir meilleur")}
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t(
              "تبرعك مهما كان صغيراً يصنع فرقاً حقيقياً في حياة عائلات تحتاج دعمك",
              "Votre don, quelle que soit sa taille, fait une réelle différence dans la vie de familles qui ont besoin de votre soutien."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-6 text-lg rounded-xl shadow-lg shadow-secondary/30">
              {t("تبرع الآن", "Faire un don maintenant")}
              <Heart className={cn("w-5 h-5", isRtl ? "mr-2" : "ml-2")} />
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-6 text-lg rounded-xl">
              {t("مشاريعنا", "Voir nos projets")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function AboutPage() {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
}
