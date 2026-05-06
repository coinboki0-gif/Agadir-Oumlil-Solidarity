"use client"
import React, { useState, useEffect } from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Droplet, HeartPulse, GraduationCap, Home, Moon, Landmark, ChevronRight, X } from 'lucide-react';

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

const iconMap: Record<string, React.ReactNode> = {
  irrigation: <Droplet className="w-6 h-6" />,
  medical: <HeartPulse className="w-6 h-6" />,
  education: <GraduationCap className="w-6 h-6" />,
  ramadan: <Moon className="w-6 h-6" />,
  housing: <Home className="w-6 h-6" />,
  mosque: <Landmark className="w-6 h-6" />,
};
const colorMap: Record<string, string> = {
  Infrastructure: 'bg-blue-500',
  Health: 'bg-rose-500',
  Education: 'bg-indigo-500',
  Solidarity: 'bg-amber-500',
  Housing: 'bg-green-500',
  Religious: 'bg-teal-600',
};

type Project = {
  id: string;
  titleAr: string; titleFr: string; titleEn: string;
  descAr: string; descFr: string; descEn: string;
  budget: string; year: string; status: string;
  category: string; mainImage: string;
  stats?: { ar: string; fr: string; en: string }[];
  beforeImages?: string[]; afterImages?: string[];
};

const enrichProject = (p: Project) => ({
  ...p,
  icon: iconMap[p.id] ?? <Droplet className="w-6 h-6" />,
  color: colorMap[p.category] ?? 'bg-primary',
  categoryAr: p.category, categoryFr: p.category, categoryEn: p.category,
  stats: p.stats ?? [],
  beforeImages: p.id === 'irrigation' ? beforeImages : (p.beforeImages ?? []),
  afterImages: p.id === 'irrigation' ? afterImages : (p.afterImages ?? []),
});

const statusLabel = (status: string, language: string) => {
  if (status === 'completed') return language === 'ar' ? 'مكتمل' : language === 'en' ? 'Completed' : 'Terminé';
  return language === 'ar' ? 'جارٍ' : language === 'en' ? 'Active' : 'En cours';
};

const ProjectModal = ({ project, onClose }: { project: ReturnType<typeof enrichProject>; onClose: () => void }) => {
  const { t, language } = useLanguage();
  const [tab, setTab] = useState<'before' | 'after'>('after');
  const [imgIndex, setImgIndex] = useState(0);
  const imgs = tab === 'before' ? project.beforeImages : project.afterImages;
  const hasGallery = project.beforeImages.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-background rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all">
          <X className="w-5 h-5 text-primary" />
        </button>
        <div className="relative h-72 overflow-hidden rounded-t-3xl">
          <img src={hasGallery && imgs.length > 0 ? imgs[imgIndex] : project.mainImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          {hasGallery && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex bg-black/40 backdrop-blur-md rounded-full p-1 gap-1">
              <button onClick={() => { setTab('before'); setImgIndex(0); }} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${tab === 'before' ? 'bg-white text-primary' : 'text-white/70'}`}>{t('قبل', 'Avant', 'Before')}</button>
              <button onClick={() => { setTab('after'); setImgIndex(0); }} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${tab === 'after' ? 'bg-secondary text-white' : 'text-white/70'}`}>{t('بعد', 'Après', 'After')}</button>
            </div>
          )}
          <div className={`absolute bottom-3 left-4 ${project.color} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
            {language === 'ar' ? project.categoryAr : language === 'en' ? project.categoryEn : project.categoryFr}
          </div>
        </div>
        {hasGallery && imgs.length > 0 && (
          <div className="flex gap-2 p-3 bg-primary/5 overflow-x-auto scrollbar-hide">
            {imgs.map((img, i) => (
              <button key={i} onClick={() => setImgIndex(i)} className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${i === imgIndex ? 'border-secondary scale-105' : 'border-transparent opacity-60'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
        <div className="p-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h2 className="text-2xl font-bold text-primary">{language === 'ar' ? project.titleAr : language === 'en' ? project.titleEn : project.titleFr}</h2>
            <span className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-full ${project.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{statusLabel(project.status, language)}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">{language === 'ar' ? project.descAr : language === 'en' ? project.descEn : project.descFr}</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {project.stats.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span className="text-sm">{language === 'ar' ? s.ar : language === 'en' ? s.en : s.fr}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">{t('الميزانية', 'Budget', 'Budget')} · {project.year}</p>
              <p className="text-xl font-bold text-secondary" dir="ltr">{project.budget}</p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-6 py-5 rounded-xl gap-2">
              {t('تبرع الآن', 'Faire un don', 'Donate Now')}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsContent = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<ReturnType<typeof enrichProject> | null>(null);
  const [projects, setProjects] = useState<ReturnType<typeof enrichProject>[]>([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then(r => r.json())
      .then((data: Project[]) => setProjects(data.map(enrichProject)))
      .catch(() => setProjects([]));
  }, []);

  const categories = [
    { id: 'all', ar: 'الكل', fr: 'Tous', en: 'All' },
    { id: 'completed', ar: 'مكتملة', fr: 'Terminés', en: 'Completed' },
    { id: 'active', ar: 'جارية', fr: 'En cours', en: 'Active' },
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.status === filter);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="relative pt-32 pb-20 overflow-hidden bg-primary">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px'}} />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-medium tracking-widest uppercase">{t('مشاريعنا', 'Nos Projets', 'Our Projects')}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('إنجازات تغير الحياة', 'Des Réalisations qui Changent des Vies', 'Achievements That Change Lives')}</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">{t('كل مشروع هو قصة نجاح تحكيها مجتمعات دوار أنروز وإقليم تارودانت.', 'Chaque projet est une histoire de succès racontée par les communautés de Taroudant.', 'Each project is a success story told by the communities of Taroudant.')}</p>
            <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-white/10">
              <div className="text-center"><p className="text-3xl font-bold text-secondary">{projects.length}+</p><p className="text-white/50 text-xs mt-1">{t('مشروع', 'Projets', 'Projects')}</p></div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center"><p className="text-3xl font-bold text-secondary">815K</p><p className="text-white/50 text-xs mt-1">{t('درهم مستثمر', 'MAD investis', 'MAD Invested')}</p></div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center"><p className="text-3xl font-bold text-secondary">1000+</p><p className="text-white/50 text-xs mt-1">{t('مستفيد', 'Bénéficiaires', 'Beneficiaries')}</p></div>
            </div>
          </div>
        </section>

        <section className="py-8 sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 flex-wrap">
              {categories.map(cat => (
                <button key={cat.id} onClick={() => setFilter(cat.id)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat.id ? 'bg-primary text-white shadow-md' : 'bg-muted text-muted-foreground hover:bg-primary/10'}`}>
                  {language === 'ar' ? cat.ar : language === 'en' ? cat.en : cat.fr}
                </button>
              ))}
              <span className="ml-auto text-sm text-muted-foreground">{filtered.length} {t('مشروع', 'projets', 'projects')}</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            {projects.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">Loading...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(project => (
                  <div key={project.id} onClick={() => setSelected(project)} className="group bg-card rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <img src={project.mainImage} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className={`absolute top-3 left-3 ${project.color} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5`}>
                        {project.icon}
                        {language === 'ar' ? project.categoryAr : language === 'en' ? project.categoryEn : project.categoryFr}
                      </div>
                      <div className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${project.status === 'completed' ? 'bg-green-500/90 text-white' : 'bg-amber-500/90 text-white'}`}>{statusLabel(project.status, language)}</div>
                      {project.beforeImages.length > 0 && (
                        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                          {project.beforeImages.length + project.afterImages.length} {t('صورة', 'photos', 'photos')}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{language === 'ar' ? project.titleAr : language === 'en' ? project.titleEn : project.titleFr}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{language === 'ar' ? project.descAr : language === 'en' ? project.descEn : project.descFr}</p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <p className="text-xs text-muted-foreground">{project.year}</p>
                          <p className="text-base font-bold text-secondary" dir="ltr">{project.budget}</p>
                        </div>
                        <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:text-secondary transition-colors">
                          {t('التفاصيل', 'Détails', 'Details')}
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-secondary/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('ساهم في مشروعنا القادم', 'Contribuez à Notre Prochain Projet', 'Contribute to Our Next Project')}</h2>
            <p className="text-muted-foreground mb-8">{t('تبرعك يصنع الفرق. كل درهم يساهم في بناء مستقبل أفضل للمجتمعات الهشة.', 'Votre don fait la différence. Chaque dirham contribue à bâtir un meilleur avenir.', 'Your donation makes the difference. Every dirham helps build a better future.')}</p>
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-10 py-6 rounded-xl text-lg shadow-xl gap-2">
              {t('تبرع الآن', 'Faire un don', 'Donate Now')}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default function ProjectsPage() {
  return (
    <LanguageProvider>
      <ProjectsContent />
    </LanguageProvider>
  );
}
