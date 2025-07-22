import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star, ShoppingCart, Sparkles } from "lucide-react";
import bouquet1 from "@/assets/bouquet-1.jpg";
import bouquet2 from "@/assets/bouquet-2.jpg";
import bouquet3 from "@/assets/bouquet-3.jpg";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "باقة الحب الوردي",
      description: "باقة رومانسية من الورود الوردية والبيضاء مع أوراق الكينا",
      price: "150 ريال",
      originalPrice: "200 ريال",
      image: bouquet1,
      rating: 4.9,
      reviews: 127,
      badge: "الأكثر مبيعاً"
    },
    {
      id: 2,
      name: "باقة الورد الأحمر الكلاسيكية",
      description: "باقة فاخرة من الورود الحمراء الطبيعية للمناسبات الخاصة",
      price: "200 ريال",
      originalPrice: "250 ريال", 
      image: bouquet2,
      rating: 4.8,
      reviews: 89,
      badge: "عرض خاص"
    },
    {
      id: 3,
      name: "باقة عباد الشمس المشرقة",
      description: "باقة مبهجة من عباد الشمس والزهور البرتقالية الطبيعية",
      price: "120 ريال",
      originalPrice: "160 ريال",
      image: bouquet3,
      rating: 4.7,
      reviews: 65,
      badge: "جديد"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="products">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 gradient-magical rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 gradient-sunset rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="text-primary font-semibold">منتجاتنا المميزة</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            ورود تحكي 
            <span className="gradient-magical bg-clip-text text-transparent">أجمل القصص</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            كل باقة مصممة بعناية فائقة لتعبر عن مشاعركم وتضيف السحر للحظاتكم الخاصة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-elegant hover:shadow-magical transition-all duration-700 hover:-translate-y-4 animate-scale-in border border-primary/10"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <div className="gradient-primary px-4 py-2 rounded-full shadow-glow animate-pulse-soft">
                    <span className="text-white font-semibold text-sm">{product.badge}</span>
                  </div>
                </div>
                
                {/* Heart Icon */}
                <button className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all group/heart shadow-soft hover:shadow-glow">
                  <Heart className="w-6 h-6 text-primary group-hover/heart:fill-current group-hover/heart:scale-110 transition-all animate-bounce-soft" />
                </button>
                
                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="gradient-primary text-white px-6 py-3 rounded-full shadow-magical hover:scale-105 transition-transform">
                    مشاهدة سريعة
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''} animate-bounce-soft`} 
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    ({product.reviews} تقييم)
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                      {product.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through bg-muted/50 px-2 py-1 rounded">
                      {product.originalPrice}
                    </span>
                  </div>
                  <div className="bg-secondary/10 px-3 py-2 rounded-full">
                    <span className="text-secondary font-semibold text-sm">وفر 25%</span>
                  </div>
                </div>

                <Button 
                  className="w-full gradient-primary hover:shadow-magical text-white hover-magical border-0 py-4 text-lg font-semibold rounded-2xl"
                  size="lg"
                >
                  <ShoppingCart className="ml-3 w-6 h-6 animate-bounce-soft" />
                  إضافة للسلة
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-up">
          <Button 
            size="lg"
            className="gradient-primary hover:shadow-magical text-white px-12 py-4 text-xl rounded-2xl hover-magical border-0"
          >
            <Sparkles className="ml-3 w-6 h-6" />
            استكشف جميع المنتجات
          </Button>
        </div>
      </div>
    </section>
  );
};