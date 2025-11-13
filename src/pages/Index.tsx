import React, { useState, useMemo } from 'react';
import Layout from "@/components/Layout";
import NewsCard from "@/components/NewsCard";

// بيانات وهمية للأخبار
const dummyNews = [
  {
    id: 1,
    title: "اكتشاف علمي جديد يغير فهمنا للكون",
    summary: "أعلن فريق دولي من العلماء عن اكتشاف مذهل قد يعيد كتابة كتب الفيزياء الفلكية، حيث تم رصد ظاهرة لم يسبق لها مثيل في مجرة بعيدة.",
    category: "تكنولوجيا",
    imageUrl: "https://via.placeholder.com/600x400?text=Science+Discovery",
    date: "منذ ساعة",
  },
  {
    id: 2,
    title: "أسعار النفط ترتفع بعد اجتماع منظمة أوبك+",
    summary: "شهدت أسواق النفط العالمية ارتفاعاً ملحوظاً اليوم عقب قرار منظمة الدول المصدرة للنفط وحلفائها (أوبك+) بتثبيت مستويات الإنتاج الحالية.",
    category: "اقتصاد",
    imageUrl: "https://via.placeholder.com/600x400?text=Oil+Prices",
    date: "منذ 3 ساعات",
  },
  {
    id: 3,
    title: "فوز تاريخي للمنتخب الوطني في البطولة القارية",
    summary: "احتفل الآلاف بفوز المنتخب الوطني بلقب البطولة القارية بعد مباراة مثيرة انتهت بركلات الترجيح، مما أثار موجة من الفرح في جميع أنحاء البلاد.",
    category: "رياضة",
    imageUrl: "https://via.placeholder.com/600x400?text=Football+Victory",
    date: "أمس",
  },
  {
    id: 4,
    title: "البرلمان يقر قانون الإصلاحات الضريبية الجديد",
    summary: "صوت أعضاء البرلمان بأغلبية ساحقة لصالح قانون الإصلاحات الضريبية الذي يهدف إلى تحفيز الاستثمار وخلق فرص عمل جديدة في القطاعات الحيوية.",
    category: "سياسة",
    imageUrl: "https://via.placeholder.com/600x400?text=Parliament+Vote",
    date: "منذ يومين",
  },
];

const Index: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = useMemo(() => {
    if (!searchTerm) {
      return dummyNews;
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
      <h1 className="text-3xl font-bold mb-6 text-center">
        {searchTerm ? `نتائج البحث عن: "${searchTerm}"` : 'آخر الأخبار'}
      </h1>
      
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          عذراً، لم يتم العثور على أخبار تطابق بحثك.
        </p>
      )}
    </Layout>
  );
};

export default Index;