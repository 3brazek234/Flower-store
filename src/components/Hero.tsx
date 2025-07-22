import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star, Gift, Crown } from "lucide-react";
import heroImage from "@/assets/hero-magical.jpg";
import petalsDecoration from "@/assets/petals-decoration.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Magical Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 gradient-magical opacity-70" />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Floating Petals */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-30 animate-float-slow"
          style={{ backgroundImage: `url(${petalsDecoration})`, backgroundSize: '200px' }}
        />
      </div>
      
      {/* Magical Floating Elements */}
      <div className="absolute top-16 left-8 animate-float animate-glow">
        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-magical">
          <Heart className="w-6 h-6 text-white fill-current" />
        </div>
      </div>
      
      <div className="absolute top-24 right-16 animate-float-delayed animate-rotate">
        <Star className="w-8 h-8 text-accent drop-shadow-lg" />
      </div>
      
      <div className="absolute top-40 left-32 animate-bounce-soft">
        <Crown className="w-10 h-10 text-accent opacity-80" />
      </div>
      
      <div className="absolute bottom-40 right-12 animate-float">
        <div className="w-16 h-16 gradient-sunset rounded-full flex items-center justify-center shadow-glow animate-pulse-soft">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-16 animate-float-delayed">
        <Gift className="w-12 h-12 text-primary-glow opacity-70 animate-bounce-soft" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-8 animate-glow">
            <Crown className="w-5 h-5 text-accent" />
            <span className="text-lg font-medium">المتجر الأول في المملكة</span>
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block animate-scale-in">
              سحر الورود
            </span>
            <span className="block gradient-sunset bg-clip-text text-transparent animate-pulse-soft text-5xl md:text-7xl">
              يبدأ من هنا ✨
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl mb-12 text-white/95 max-w-3xl mx-auto leading-relaxed font-light">
            اكتشف عالماً ساحراً من أجمل الورود والباقات الفاخرة 
            <br />
            <span className="text-accent font-medium">لحظات لا تُنسى تستحق ورود استثنائية</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-magical text-white px-10 py-6 text-xl font-semibold rounded-2xl hover-magical border-0 animate-scale-in"
            >
              <Heart className="ml-3 w-6 h-6 fill-current animate-bounce-soft" />
              ابدأ التسوق الآن
            </Button>
            
            <Button 
              size="lg"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border-white/30 px-10 py-6 text-xl rounded-2xl hover-glow animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Sparkles className="ml-3 w-6 h-6" />
              استكشف المجموعة
            </Button>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-8 text-white/90 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-current" />
              <span>جودة فائقة</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent fill-current" />
              <span>توصيل مجاني</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="w-5 h-5 text-accent" />
              <span>خدمة 24/7</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm">اكتشف المزيد</span>
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-bounce-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};