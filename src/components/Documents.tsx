"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FileText, Download, Eye, Calendar, ArrowRight } from "lucide-react";

type Doc = {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  category: string;
  date: string;
  filename: string;
  url: string;
};

const CAT_COLORS: Record<string, string> = {
  rapport: "#6366f1",
  technique: "#f59e0b",
  humanitaire: "#10b981",
  formulaire: "#3b82f6",
  autre: "#9ca3af",
};

const CAT_LABELS: Record<string, [string, string, string]> = {
  rapport:      ["تقرير سنوي",   "Rapport Annuel",     "Annual Report"],
  technique:    ["فيشة تقنية",   "Fiche Technique",    "Technical Sheet"],
  humanitaire:  ["عمل إنساني",   "Action Humanitaire", "Humanitarian"],
  formulaire:   ["استمارة",      "Formulaire",         "Form"],
  autre:        ["أخرى",         "Autre",               "Other"],
};

export function Documents() {
  const { t, language } = useLanguage();
  const [docs, setDocs]       = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter]   = useState("all");

  useEffect(() => {
    fetch("/data/documents.json")
      .then(r => r.json())
      .then(setDocs)
      .catch(() => setDocs([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["all", ...Array.from(new Set(docs.map(d => d.category)))];
  const filtered = filter === "all" ? docs : docs.filter(d => d.category === filter);

  if (!loading && docs.length === 0) return null;

  return (
    <section id="documents" className="relative py-24 overflow-hidden" style={{ background: "var(--color-primary, #0d1b2a)" }}>

      {/* Background dots — same as Hero */}
      <div className="absolute top-16 right-16 w-44 h-44 opacity-[0.04] z-0 hidden lg:block"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }} />
      <div className="absolute bottom-16 left-12 w-32 h-32 opacity-[0.04] z-0 hidden lg:block"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">

        {/* Header — same pattern as Hero badge + heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-white/70 font-medium text-xs tracking-[0.18em] uppercase">
              {t("وثائقنا الرسمية", "Nos Documents Officiels", "Our Official Documents")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t(
              <>تقارير و<span className="text-secondary">وثائق</span> الجمعية</>,
              <><span className="text-secondary">Rapports</span> & Documents</>,
              <>Reports & <span className="text-secondary">Documents</span></>
            )}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            {t(
              "تصفح وتحميل وثائقنا الرسمية — التقارير السنوية والملفات التقنية والاستمارات",
              "Consultez et téléchargez nos documents officiels — rapports annuels, fiches techniques et formulaires",
              "Browse and download our official documents — annual reports, technical sheets and forms"
            )}
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filter === cat
                    ? "bg-secondary border-secondary text-white shadow-lg"
                    : "bg-white/5 border-white/15 text-white/60 hover:bg-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat === "all"
                  ? t("الكل", "Tous", "All")
                  : t(...(CAT_LABELS[cat] ?? [cat, cat, cat]))}
              </button>
            ))}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 rounded-full border-2 border-white/10 border-t-secondary animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(doc => {
              const color = CAT_COLORS[doc.category] ?? "#9ca3af";
              const label = t(...(CAT_LABELS[doc.category] ?? [doc.category, doc.category, doc.category]));
              return (
                <div
                  key={doc.id}
                  className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Top */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: color + "22" }}
                    >
                      <FileText size={22} color={color} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: color + "22", color }}
                    >
                      {label}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-base leading-snug mb-1">
                      {language === "ar" && doc.titleAr ? doc.titleAr : doc.title}
                    </h3>
                    {doc.description && (
                      <p className="text-white/45 text-sm leading-relaxed">{doc.description}</p>
                    )}
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-white/30">
                    <Calendar size={12} />
                    <span className="text-xs">
                      {new Date(doc.date).toLocaleDateString(
                        language === "ar" ? "ar-MA" : language === "en" ? "en-US" : "fr-MA",
                        { year: "numeric", month: "long" }
                      )}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-1 border-t border-white/10">
                    
                      <a
                      href={doc.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all">
                      <Eye size={14} />
                      {t("عرض", "Consulter", "View")}
                    </a>
                    
                      <a
                      href={doc.url}
                      download={doc.filename}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold bg-secondary hover:bg-secondary/90 text-white transition-all"
                    >
                      <Download size={14} />
                      {t("تحميل", "Télécharger", "Download")}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
