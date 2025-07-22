import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Flower2, ShoppingCart, Heart, User, Search } from "lucide-react";
import { useStore } from "@/lib/store";
import i18n from "@/lib/i18n";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Use Zustand selectors directly
  const language = useStore((state) => state.language);
  const setLanguage = useStore((state) => state.setLanguage);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Shop", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "About us", href: "#about" },
    { name: "Contact us", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
              <Flower2 className="w-7 h-7 text-gray-400" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-light tracking-widest text-gray-700 uppercase">Bidaya Hayah</span>
              <span className="text-xs text-gray-400 tracking-widest">FLOWERS & GIFTS</span>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-700 transition-colors font-normal text-base px-2"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Language Switcher */}
          <button
            className="mr-2 px-3 py-1 rounded-full bg-green-100 text-green-900 text-sm font-semibold border border-green-200 hover:bg-green-200 transition hidden md:block"
            onClick={toggleLanguage}
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <Search className="w-5 h-5 text-gray-500" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <User className="w-5 h-5 text-gray-500" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
              <Heart className="w-5 h-5 text-gray-500" />
            </button>
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition relative">
              <ShoppingCart className="w-5 h-5 text-gray-500" />
              <span className="absolute -top-1 -right-1 bg-green-200 text-green-800 text-xs rounded-full px-1.5">1</span>
            </button>
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
          <div className="md:hidden py-4 border-t border-gray-100 animate-slide-up bg-white">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex gap-2 mt-4 px-4">
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <User className="w-5 h-5 text-gray-500" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <Heart className="w-5 h-5 text-gray-500" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition relative">
                <ShoppingCart className="w-5 h-5 text-gray-500" />
                <span className="absolute -top-1 -right-1 bg-green-200 text-green-800 text-xs rounded-full px-1.5">1</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};