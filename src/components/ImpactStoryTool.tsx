"use client"

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Sparkles, Loader2, Copy } from 'lucide-react';
import { draftImpactStory } from '@/ai/flows/ai-impact-story-writer';
import { useToast } from '@/hooks/use-toast';

export const ImpactStoryTool = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [notes, setNotes] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!notes.trim()) return;
    setLoading(true);
    try {
      const { impactStory } = await draftImpactStory({ storyDetails: notes });
      setResult(impactStory);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: t("خطأ في العملية", "Erreur"),
        description: t("فشل في إنشاء القصة. حاول مرة أخرى.", "Échec de génération."),
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast({
      title: t("تم النسخ", "Copié"),
      description: t("تم نسخ القصة إلى الحافظة.", "L'histoire a été copiée."),
    });
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t("أداة كتابة قصص التأثير (AI)", "Assistant IA d'Histoires d'Impact")}
          </h2>
          <p className="text-muted-foreground">
            {t("حول ملاحظاتك الأولية إلى قصص ملهمة ومؤثرة لجمهورنا.", "Transformez vos notes en histoires inspirantes.")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="text-lg">
                {t("أدخل تفاصيل الحالة أو الملاحظات", "Détails du cas / Notes")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder={t("مثال: طفل من دوار أنروز يعاني من ضعف البصر، الجمعية تكلفت بالنظارات، الآن يدرس بشكل جيد...", "Ex: Enfant de Douar Anrouz, problème de vue, l'association a payé les lunettes...")}
                className="min-h-[150px] bg-white/50"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={handleGenerate}
                disabled={loading || !notes}
                className="w-full bg-primary hover:bg-primary/90 text-white py-6"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                  <Sparkles className="w-5 h-5 mr-2" />
                )}
                {t("إنشاء قصة مؤثرة", "Générer une histoire d'impact")}
              </Button>
            </CardFooter>
          </Card>

          {result && (
            <Card className="border-secondary/20 bg-secondary/5 animate-in fade-in slide-in-from-bottom duration-500">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-secondary">
                  {t("القصة المقترحة", "Histoire Proposée")}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                  <Copy className="w-4 h-4 mr-2" />
                  {t("نسخ", "Copier")}
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-primary whitespace-pre-wrap italic">
                  {result}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};
