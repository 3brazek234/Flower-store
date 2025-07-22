import { Heart, Flower2, Phone, Mail, MapPin, Instagram, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-100 relative overflow-hidden">
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
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <span className="text-2xl font-bold text-green-700">Bidaya Hayah</span>
                <div className="text-sm text-gray-500">A world of beauty and flowers</div>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed text-lg">
              A specialized store for the most beautiful natural bouquets for all occasions. We turn your dreams into magical bouquets that tell the most beautiful stories.
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center cursor-pointer">
                <Instagram className="w-6 h-6 text-green-600" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center cursor-pointer">
                <Twitter className="w-6 h-6 text-green-600" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center cursor-pointer">
                <Facebook className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Location", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-green-700 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Our Products</h3>
            <ul className="space-y-2">
              {["Wedding Bouquets", "Romantic Bouquets", "Graduation Bouquets", "Birthday Bouquets", "Indoor Plants"].map((product) => (
                <li key={product}>
                  <a href="#" className="text-gray-500 hover:text-green-700 transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-500 text-sm">
                  King Fahd Street, Al Malaz District<br />
                  Riyadh, Saudi Arabia
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-gray-500 text-sm" dir="ltr">+966 11 123 4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-gray-500 text-sm" dir="ltr">info@flowershop.sa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-100 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center gap-3 text-gray-500">
            <Heart className="w-5 h-5 text-green-600" />
            <span className="text-lg">© 2024 Bidaya Hayah. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Made with love for flower lovers</span>
            <Heart className="w-5 h-5 text-green-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};