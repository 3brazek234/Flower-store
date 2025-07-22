import { Heart, Flower2, Phone, Mail, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="gradient-hero border-t border-primary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 gradient-primary rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 gradient-accent rounded-full blur-xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-soft">
                <Flower2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">متجر الورود</span>
                <div className="text-sm text-muted-foreground">عالم من الجمال والسحر</div>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed text-lg">
              متجر متخصص في بيع أجمل الورود والباقات الطبيعية لجميع المناسبات.
              نحول أحلامكم إلى باقات ساحرة تحكي أجمل القصص 🌹
            </p>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all cursor-pointer hover-glow">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center hover:shadow-glow transition-all cursor-pointer hover-glow">
                <Twitter className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 gradient-magical rounded-full flex items-center justify-center hover:shadow-glow transition-all cursor-pointer hover-glow">
                <Facebook className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">روابط سريعة</h3>
            <ul className="space-y-2">
              {["الرئيسية", "من نحن", "المنتجات", "موقعنا", "تواصل معنا"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">منتجاتنا</h3>
            <ul className="space-y-2">
              {["باقات الزفاف", "باقات رومانسية", "باقات التخرج", "باقات عيد الميلاد", "النباتات الداخلية"].map((product) => (
                <li key={product}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  شارع الملك فهد، حي الملز<br />
                  الرياض، المملكة العربية السعودية
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm" dir="ltr">+966 11 123 4567</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm" dir="ltr">info@flowershop.sa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Heart className="w-5 h-5 text-primary fill-current animate-bounce-soft" />
            <span className="text-lg">© 2024 متجر الورود. جميع الحقوق محفوظة.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">صُنع بحب لعشاق الجمال والورود</span>
            <Heart className="w-5 h-5 text-primary fill-current animate-bounce-soft" />
          </div>
        </div>
      </div>
    </footer>
  );
};