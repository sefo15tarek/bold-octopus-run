import React, { useState, useMemo } from 'react';
import Layout from "@/components/Layout";
import NewsCard from "@/components/NewsCard";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { dummyNews, NewsArticle } from '@/data/news'; // Import data

// مكون الخبر الرئيسي (Hero Article)
const HeroArticle: React.FC<{ article: NewsArticle }> = ({ article }) => (
  <a href={`/article/${article.id}`} className="block mb-8 group">
    <Card className="overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl">
      <div className="grid md:grid-cols-2">
        <div className="h-64 md:h-full">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6 flex flex-col justify-center">
          <Badge className="mb-2 w-fit">{article.category}</Badge>
          <CardTitle className="text-3xl font-extrabold mb-3 group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
          <p className="text-lg text-muted-foreground mb-4 line-clamp-3">
            {article.summary}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{article.date}</span>
            <span className="flex items-center text-primary font-medium">
              قراءة الخبر <ArrowLeft className="w-4 h-4 mr-1" />
            </span>
          </div>
        </CardContent>
      </div>
    </Card>
  </a>
);

// مكون الشريط الجانبي للأخبار الشائعة
const TrendingSidebar: React.FC<{ news: NewsArticle[] }> = ({ news }) => {
  // عرض أول 4 أخبار كأخبار شائعة
  const trending = news.slice(0, 4);

  return (
    <Card className="p-4 sticky top-20">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-xl font-bold border-b pb-2">
          الأخبار الشائعة
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 space-y-4">
        {trending.map((article, index) => (
          <a key={article.id} href={`/article/${article.id}`} className="flex group">
            <div className="text-3xl font-extrabold text-primary/50 mr-3">{index + 1}</div>
            <div className="flex-1">
              <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                {article.title}
              </p>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </a>
        ))}
      </CardContent>
    </Card>
  );
};


const Index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const heroArticle = dummyNews[0];
  const otherNews = dummyNews.slice(1);

  const filteredNews = useMemo(() => {
    if (!searchTerm) {
      return otherNews;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return dummyNews.filter(article =>
      article.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      article.summary.toLowerCase().includes(lowerCaseSearchTerm) ||
      article.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  return (
    <Layout searchTerm={searchTerm} onSearchChange={setSearchTerm}>
      
      {/* Hero Section (Only visible when not searching) */}
      {!searchTerm && <HeroArticle article={heroArticle} />}

      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
        {searchTerm ? `نتائج البحث عن: "${searchTerm}"` : 'أخبار أخرى'}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-muted-foreground py-10">
              عذراً، لم يتم العثور على أخبار تطابق بحثك.
            </p>
          )}
        </div>

        {/* Sidebar Area (Hidden when searching) */}
        {!searchTerm && (
          <aside className="lg:col-span-1">
            <TrendingSidebar news={dummyNews} />
          </aside>
        )}
      </div>
    </Layout>
  );
};

export default Index;