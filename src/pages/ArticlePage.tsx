import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { dummyNews } from '@/data/news'; // Import data

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();

  const article = useMemo(() => {
    return dummyNews.find(a => a.id === parseInt(id || '0'));
  }, [id]);

  const handleShare = () => {
    const articleUrl = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(articleUrl).then(() => {
        toast({
          title: "تم النسخ!",
          description: "تم نسخ رابط الخبر إلى الحافظة.",
        });
      }).catch(() => {
        // Fallback for older browsers
        prompt("انسخ الرابط يدوياً:", articleUrl);
      });
    } else {
      prompt("انسخ الرابط يدوياً:", articleUrl);
    }
  };

  if (!article) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-red-500">404</h1>
          <p className="text-xl text-muted-foreground">عذراً، لم يتم العثور على هذا الخبر.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="p-6">
            <div className="flex justify-between items-start mb-4">
              <Badge className="text-lg px-3 py-1">{article.category}</Badge>
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="h-5 w-5" />
                <span className="sr-only">مشاركة</span>
              </Button>
            </div>
            <CardTitle className="text-4xl font-extrabold leading-tight mb-4">
              {article.title}
            </CardTitle>
            <div className="text-sm text-muted-foreground flex justify-between">
              <span>نشرت: {article.date}</span>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto rounded-lg mb-6 object-cover"
            />
            <p className="text-xl font-semibold mb-6 text-foreground/80">
              {article.summary}
            </p>
            <div className="prose prose-lg dark:prose-invert max-w-none text-right">
              {/* تقسيم المحتوى إلى فقرات بسيطة للعرض */}
              {/* نستخدم المحتوى الكامل هنا، مع التأكد من وجوده */}
              {article.content && article.content.split('. ').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}.
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ArticlePage;