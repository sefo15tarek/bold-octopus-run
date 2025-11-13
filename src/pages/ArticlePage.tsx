import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// بيانات وهمية للأخبار (نفس البيانات المستخدمة في Index.tsx)
const dummyNews = [
  {
    id: 1,
    title: "اكتشاف علمي جديد يغير فهمنا للكون",
    category: "تكنولوجيا",
    imageUrl: "https://via.placeholder.com/1200x600?text=Science+Discovery",
    date: "منذ ساعة",
    content: "في تطور غير مسبوق، أعلن علماء من مرصد جيمس ويب الفضائي عن رصد إشارات ضوئية قادمة من مجرة تبعد مليارات السنين الضوئية، مما يشير إلى وجود تركيبات كيميائية معقدة لم تكن متوقعة في تلك المرحلة المبكرة من عمر الكون. هذا الاكتشاف يفتح الباب أمام نظريات جديدة حول نشأة المادة وتطور النجوم. وقد عقد الفريق مؤتمراً صحفياً اليوم لشرح النتائج الأولية وتأثيرها المحتمل على فهمنا الحالي للفيزياء الفلكية. ويُتوقع أن تستمر الأبحاث لعدة سنوات لتأكيد هذه النتائج وتعميق دراستها.",
  },
  {
    id: 2,
    title: "أسعار النفط ترتفع بعد اجتماع منظمة أوبك+",
    category: "اقتصاد",
    imageUrl: "https://via.placeholder.com/1200x600?text=Oil+Prices",
    date: "منذ 3 ساعات",
    content: "عقدت منظمة أوبك+ اجتماعها الشهري اليوم، وقررت بالإجماع الإبقاء على مستويات الإنتاج الحالية دون تغيير، مما أدى إلى ارتفاع فوري في أسعار خام برنت وغرب تكساس الوسيط. يرى المحللون أن هذا القرار يعكس حالة عدم اليقين في الأسواق العالمية والرغبة في الحفاظ على استقرار الأسعار فوق مستوى معين. وتأتي هذه التطورات في ظل تزايد المخاوف بشأن التضخم العالمي وتأثيره على الطلب على الطاقة.",
  },
  {
    id: 3,
    title: "فوز تاريخي للمنتخب الوطني في البطولة القارية",
    category: "رياضة",
    imageUrl: "https://via.placeholder.com/1200x600?text=Football+Victory",
    date: "أمس",
    content: "في ليلة لا تُنسى، تمكن المنتخب الوطني من تحقيق لقب البطولة القارية للمرة الأولى في تاريخه بعد فوزه على منافسه التقليدي في مباراة ماراثونية امتدت إلى ركلات الترجيح. وقد أشاد المدرب بأداء اللاعبين وروحهم القتالية، مؤكداً أن هذا الإنجاز هو ثمرة عمل جماعي دؤوب. ومن المقرر أن يقام احتفال جماهيري ضخم في العاصمة لاستقبال الأبطال.",
  },
  {
    id: 4,
    title: "البرلمان يقر قانون الإصلاحات الضريبية الجديد",
    category: "سياسة",
    imageUrl: "https://via.placeholder.com/1200x600?text=Parliament+Vote",
    date: "منذ يومين",
    content: "بعد مناقشات استمرت لأسابيع، أقر البرلمان قانون الإصلاحات الضريبية الجديد الذي يعد الأكبر منذ عقد. يهدف القانون إلى تبسيط النظام الضريبي وتخفيض الضرائب على الشركات الصغيرة والمتوسطة، مع فرض رسوم أعلى على بعض القطاعات الفاخرة. وقد أثار القانون ردود فعل متباينة بين المؤيدين الذين يرون فيه دفعة للاقتصاد، والمعارضين الذين يحذرون من تأثيره على الطبقات محدودة الدخل.",
  },
];

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const articleId = parseInt(id || '0');
  
  const article = dummyNews.find((a) => a.id === articleId);

  if (!article) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-destructive">خطأ 404</h1>
          <p className="text-xl text-muted-foreground mt-2">لم يتم العثور على هذا الخبر.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Badge className="text-sm mb-2">{article.category}</Badge>
          <h1 className="text-4xl font-extrabold leading-tight mb-3">{article.title}</h1>
          <p className="text-sm text-muted-foreground">{article.date}</p>
        </div>

        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg mb-8 shadow-md"
        />

        <Separator className="my-8" />

        <div className="prose prose-lg max-w-none dark:prose-invert text-lg leading-relaxed">
          {/* تقسيم المحتوى إلى فقرات بسيطة للعرض */}
          {article.content.split('. ').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.trim() + (index < article.content.split('. ').length - 1 ? '.' : '')}
            </p>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default ArticlePage;