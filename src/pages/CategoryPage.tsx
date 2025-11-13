import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import NewsCard from '@/components/NewsCard';
import { dummyNews } from '@/data/news'; // Import data

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  // تحويل اسم الفئة من المسار إلى الاسم العربي المستخدم في البيانات الوهمية
  const categoryMap: { [key: string]: string } = useMemo(() => ({
    politics: 'سياسة',
    economy: 'اقتصاد',
    sports: 'رياضة',
    tech: 'تكنولوجيا',
  }), []);

  const arabicCategory = category ? categoryMap[category] : '';

  const filteredNews = useMemo(() => {
    return dummyNews.filter(
      (article) => article.category === arabicCategory
    );
  }, [arabicCategory]);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">
        أخبار فئة: {arabicCategory || 'غير محدد'}
      </h1>
      
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-muted-foreground">
          لا توجد أخبار حاليًا في هذه الفئة.
        </p>
      )}
    </Layout>
  );
};

export default CategoryPage;