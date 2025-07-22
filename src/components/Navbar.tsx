import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Flower2, Phone, ShoppingCart } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "الرئيسية", href: "#home" },
    { name: "من نحن", href: "#about" },
    { name: "المنتجات", href: "#products" },
    { name: "موقعنا", href: "#location" },
    { name: "تواصل معنا", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-primary/10 z-50 shadow-elegant">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 hover-glow">
            <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-soft">
              <Flower2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">متجر الورود</span>
              <div className="text-xs text-muted-foreground">عالم من الجمال</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm" className="hover-glow border-primary/20 hover:border-primary">
              <Phone className="w-4 h-4 ml-2" />
              اتصل بنا
            </Button>
            
            <Button size="sm" className="gradient-primary hover:shadow-magical text-white border-0 hover-magical">
              <ShoppingCart className="w-4 h-4 ml-2" />
              السلة (0)
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-2 mt-4 px-4">
              <Button variant="outline" size="sm" className="w-full">
                <Phone className="w-4 h-4 ml-2" />
                اتصل بنا
              </Button>
              
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                <ShoppingCart className="w-4 h-4 ml-2" />
                السلة (0)
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};