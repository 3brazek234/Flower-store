import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Location = () => {
  return (
    <section className="py-20 bg-gradient-hero" id="location">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            موقعنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            قم بزيارتنا في متجرنا للاستمتاع بتجربة تسوق فريدة واختيار الورود بنفسك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Section */}
          <div className="animate-scale-in">
            <div className="bg-card rounded-3xl overflow-hidden shadow-elegant">
              <div className="h-80 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">خريطة الموقع</h3>
                  <p className="text-muted-foreground">النقر هنا لفتح الخريطة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all hover-glow">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">العنوان</h3>
                <p className="text-muted-foreground leading-relaxed">
                  شارع الملك فهد، حي الملز<br />
                  الرياض، المملكة العربية السعودية<br />
                  الرمز البريدي: 12345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all hover-glow">
              <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">ساعات العمل</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>السبت - الخميس: 9:00 ص - 10:00 م</p>
                  <p>الجمعة: 2:00 م - 10:00 م</p>
                  <p className="text-primary font-medium">مفتوح كل أيام الأسبوع</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all hover-glow">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">للاستفسار</h3>
                <p className="text-muted-foreground mb-3">
                  تواصل معنا للحصول على المساعدة أو لطلب باقة مخصصة
                </p>
                <p className="text-lg font-semibold text-primary direction-ltr">+966 11 123 4567</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90 text-white hover-glow"
                size="lg"
              >
                <Navigation className="mr-2 w-5 h-5" />
                الحصول على الاتجاهات
              </Button>
              
              <Button 
                variant="outline"
                className="flex-1 hover-glow"
                size="lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                اتصل بنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};