"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { FileText, Download, Eye, Calendar, ArrowRight } from "lucide-react";

type Doc = {
  id: string; title: string; titleAr: string;
  description: string; category: string;
  date: string; url: string; filename: string;
};

const CAT_COLORS: Record<string, string> = {
  rapport:"#0f766e", technique:"#d97706",
  humanitaire:"#059669", formulaire:"#2563eb", autre:"#6b7280",
};
const CAT_LABELS: Record<string,[string,string,string]> = {
  rapport:      ["تقرير سنوي","Rapport Annuel","Annual Report"],
  technique:    ["فيشة تقنية","Fiche Technique","Technical Sheet"],
  humanitaire:  ["عمل إنساني","Action Humanitaire","Humanitarian"],
  formulaire:   ["استمارة","Formulaire","Form"],
  autre:        ["أخرى","Autre","Other"],
};

export function Documents() {
  const { t, language } = useLanguage();
  const [docs, setDocs]       = useState<Doc[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter]   = useState("all");

  useEffect(() => {
    fetch("/data/documents.json")
      .then(r => r.json()).then(setDocs)
      .catch(() => setDocs([]))
      .finally(() => setLoading(false));
  }, []);

  const categories = ["all", ...Array.from(new Set(docs.map(d => d.category)))];
  const filtered = filter === "all" ? docs : docs.filter(d => d.category === filter);

  return (
    <section id="documents" className="relative overflow-hidden" style={{background:"#f8f7f4"}}>

      {/* Wave separator top */}
      <div className="w-full overflow-hidden leading-none" style={{marginBottom:"-2px"}}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20" style={{display:"block"}}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#0f4c5c"/>
        </svg>
      </div>

      {/* Subtle grid texture */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage:"linear-gradient(rgba(15,76,92,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(15,76,92,0.03) 1px,transparent 1px)",backgroundSize:"40px 40px"}}/>

      {/* Accent blob */}
      <div className="absolute top-32 right-0 w-96 h-96 rounded-full z-0 pointer-events-none" style={{background:"radial-gradient(circle,rgba(245,158,11,0.08) 0%,transparent 70%)",transform:"translate(30%,-20%)"}}/>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full z-0 pointer-events-none" style={{background:"radial-gradient(circle,rgba(15,76,92,0.06) 0%,transparent 70%)",transform:"translate(-30%,30%)"}}/>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-8 pb-28">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full border" style={{background:"rgba(15,76,92,0.06)",borderColor:"rgba(15,76,92,0.15)"}}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{background:"#f59e0b"}}/>
            <span className="font-semibold text-xs tracking-[0.2em] uppercase" style={{color:"#0f4c5c"}}>
              {t("وثائقنا الرسمية","Nos Documents Officiels","Our Official Documents")}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-5 leading-tight tracking-tight" style={{color:"#0a2e38"}}>
            {t(
              <><span style={{color:"#f59e0b"}}>تقارير</span> ووثائق الجمعية</>,
              <><span style={{color:"#f59e0b"}}>Rapports</span>{" & "}Documents</>,
              <>Reports{" & "}<span style={{color:"#f59e0b"}}>Documents</span></>
            )}
          </h2>
          <p className="max-w-lg mx-auto text-base leading-relaxed" style={{color:"#4a6572"}}>
            {t(
              "تصفح وتحميل وثائقنا الرسمية — التقارير السنوية والملفات التقنية",
              "Consultez et téléchargez nos documents officiels — rapports annuels et fiches techniques",
              "Browse and download our official documents"
            )}
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16" style={{background:"linear-gradient(to right,transparent,#0f4c5c)"}}/>
            <div className="w-2 h-2 rounded-full" style={{background:"#f59e0b"}}/>
            <div className="h-px w-16" style={{background:"linear-gradient(to left,transparent,#0f4c5c)"}}/>
          </div>
        </div>

        {/* Filter pills */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => {
              const active = filter === cat;
              return (
                <button key={cat} onClick={() => setFilter(cat)}
                  className="px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200"
                  style={{
                    background: active ? "#0f4c5c" : "white",
                    color: active ? "white" : "#4a6572",
                    borderColor: active ? "#0f4c5c" : "#d1d5db",
                    boxShadow: active ? "0 4px 14px rgba(15,76,92,0.25)" : "none",
                    transform: active ? "translateY(-1px)" : "none",
                  }}>
                  {cat === "all"
                    ? t("الكل","Tous","All")
                    : t(...(CAT_LABELS[cat] ?? [cat,cat,cat]))}
                </button>
              );
            })}
          </div>
        )}

        {/* Cards grid */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin" style={{borderColor:"#0f4c5c33",borderTopColor:"#0f4c5c"}}/>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(doc => {
              const color = CAT_COLORS[doc.category] ?? "#6b7280";
              const label = t(...(CAT_LABELS[doc.category] ?? [doc.category,doc.category,doc.category]));
              return (
                <div key={doc.id}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background:"white",
                    boxShadow:"0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)",
                    border:"1px solid rgba(0,0,0,0.06)",
                  }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.boxShadow="0 8px 32px rgba(15,76,92,0.12),0 2px 8px rgba(0,0,0,0.06)";(e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.boxShadow="0 1px 3px rgba(0,0,0,0.06),0 4px 16px rgba(0,0,0,0.04)";(e.currentTarget as HTMLDivElement).style.transform="translateY(0)";}}
                >
                  {/* Card top color bar */}
                  <div className="h-1 w-full" style={{background:color}}/>

                  <div className="flex flex-col gap-4 p-6 flex-1">
                    {/* Icon + badge */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{background:color+"15"}}>
                        <FileText size={20} color={color}/>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={{background:color+"12",color}}>
                        {label}
                      </span>
                    </div>

                    {/* Title + desc */}
                    <div className="flex-1">
                      <h3 className="font-bold text-base leading-snug mb-2" style={{color:"#0a2e38"}}>
                        {language === "ar" && doc.titleAr ? doc.titleAr : doc.title}
                      </h3>
                      {doc.description && (
                        <p className="text-sm leading-relaxed" style={{color:"#6b7280"}}>{doc.description}</p>
                      )}
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5" style={{color:"#9ca3af"}}>
                      <Calendar size={12}/>
                      <span className="text-xs">
                        {new Date(doc.date).toLocaleDateString(
                          language==="ar"?"ar-MA":language==="en"?"en-US":"fr-MA",
                          {year:"numeric",month:"long"}
                        )}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-3" style={{borderTop:"1px solid #f3f4f6"}}>
                      <a href={doc.url} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:border-current"
                        style={{borderColor:"#e5e7eb",color:"#4a6572",background:"#f9fafb"}}
                        onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#f3f4f6";}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#f9fafb";}}
                      >
                        <Eye size={14}/>
                        {t("عرض","Consulter","View")}
                      </a>
                      <a href={doc.url} target="_blank" rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
                        style={{background:"#f59e0b"}}
                        onMouseEnter={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#d97706";}}
                        onMouseLeave={e=>{(e.currentTarget as HTMLAnchorElement).style.background="#f59e0b";}}
                      >
                        <Download size={14}/>
                        {t("تحميل","Télécharger","Download")}
                      </a>
                    </div>
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
