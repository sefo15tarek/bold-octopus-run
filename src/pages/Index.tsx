import { MadeWithDyad } from "@/components/made-with-dyad";
import Navbar from "@/components/Navbar";
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">آخر الأخبار</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dummyNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;