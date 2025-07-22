import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Send, MapPin } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "اتصل بنا",
      description: "للطلبات والاستفسارات",
      value: "+966 11 123 4567",
      action: "اتصال"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني", 
      description: "راسلنا في أي وقت",
      value: "info@flowershop.sa",
      action: "إرسال إيميل"
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      description: "تواصل سريع ومباشر",
      value: "+966 50 123 4567",
      action: "واتساب"
    }
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن هنا للمساعدة! تواصل معنا لطلب باقة مخصصة أو للاستفسار عن منتجاتنا
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all hover:-translate-y-1 animate-scale-in hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <method.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {method.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {method.description}
              </p>
              
              <p className="font-semibold text-primary mb-4 text-lg">
                {method.value}
              </p>
              
              <Button 
                variant="outline" 
                className="w-full hover-glow"
              >
                {method.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant animate-slide-up">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                أرسل لنا رسالة
              </h3>
              <p className="text-muted-foreground">
                املأ النموذج وسنتواصل معك في أقرب وقت ممكن
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">الاسم الكامل</label>
                  <Input 
                    placeholder="أدخل اسمك الكامل"
                    className="bg-muted/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">رقم الهاتف</label>
                  <Input 
                    placeholder="أدخل رقم هاتفك"
                    className="bg-muted/50 border-border focus:border-primary transition-colors"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">البريد الإلكتروني</label>
                <Input 
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  className="bg-muted/50 border-border focus:border-primary transition-colors"
                  dir="ltr"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">نوع الطلب</label>
                <select className="w-full p-3 bg-muted/50 border border-border rounded-lg focus:border-primary transition-colors">
                  <option>اختر نوع الطلب</option>
                  <option>باقة زفاف</option>
                  <option>باقة عيد ميلاد</option>
                  <option>باقة رومانسية</option>
                  <option>باقة تخرج</option>
                  <option>أخرى</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">الرسالة</label>
                <Textarea 
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  className="bg-muted/50 border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white hover-glow"
              >
                <Send className="mr-2 w-5 h-5" />
                إرسال الرسالة
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};