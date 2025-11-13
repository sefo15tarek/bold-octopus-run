import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
  date: string;
}

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <img
        src={article.imageUrl || '/placeholder.svg'}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <CardHeader className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs">
            {article.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{article.date}</span>
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {article.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-sm mt-2">
          {article.summary}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <a href={`/article/${article.id}`} className="text-sm font-medium text-primary hover:underline">
          قراءة المزيد
        </a>
      </CardContent>
    </Card>
  );
};

export default NewsCard;