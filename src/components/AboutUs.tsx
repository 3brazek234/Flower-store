import { Heart, Users, Award, Flower2, Star } from "lucide-react";

export const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: "شغف بالجمال",
      description: "نحن نؤمن بأن الورود تنقل المشاعر وتخلق اللحظات السحرية"
    },
    {
      icon: Users,
      title: "خبرة 15 عاماً",
      description: "فريق من الخبراء في تنسيق الورود وتصميم الباقات"
    },
    {
      icon: Award,
      title: "جودة مضمونة", 
      description: "نختار أجود أنواع الورود الطبيعية من أفضل المزارع"
    },
    {
      icon: Flower2,
      title: "تصاميم فريدة",
      description: "نبتكر تصاميم مميزة تناسب جميع المناسبات والأذواق"
    }
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden" id="about">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 animate-float opacity-20">
        <div className="w-32 h-32 gradient-magical rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 animate-float-delayed opacity-20">
        <div className="w-24 h-24 gradient-sunset rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">تعرف علينا</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            قصة حب مع 
            <span className="gradient-primary bg-clip-text text-transparent">الجمال</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            منذ 15 عاماً ونحن نسعى لجعل كل لحظة في حياتكم أجمل من خلال أرقى الورود 
            وأكثر التصاميم إبداعاً في عالم الزهور
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group animate-scale-in hover-magical p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-elegant hover:shadow-magical transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 gradient-accent rounded-full animate-bounce-soft opacity-80"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <div className="inline-block p-10 rounded-3xl bg-card/80 backdrop-blur-sm shadow-magical hover:shadow-glow transition-all hover-glow max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-8 h-8 text-accent fill-current animate-bounce-soft" />
              <h3 className="text-3xl font-bold text-foreground">رسالتنا السحرية</h3>
              <Star className="w-8 h-8 text-accent fill-current animate-bounce-soft" />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نؤمن بأن كل ورده تحمل رسالة حب، وكل باقة تحكي قصة جميلة. 
              نسعى لتحويل أحلامكم إلى واقع ملون بأجمل الألوان الطبيعية، 
              لأن الحب يستحق أجمل التعبيرات 💝
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};