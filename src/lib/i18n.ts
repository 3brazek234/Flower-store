import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      home: 'Home',
      shop: 'Shop',
      services: 'Services',
      clients: 'Clients',
      about: 'About us',
      contact: 'Contact us',
      discover: 'Discover our collection',
      sameDay: 'Same day delivery',
      shopNow: 'Shop now',
      featured: 'Our Featured Products',
      viewAll: 'View all products',
      addToCart: 'Add to cart',
      addToWishlist: 'Add to wishlist',
      cart: 'Cart',
      wishlist: 'Wishlist',
      // ...add more as needed
    },
  },
  ar: {
    translation: {
      home: 'الرئيسية',
      shop: 'المتجر',
      services: 'الخدمات',
      clients: 'العملاء',
      about: 'من نحن',
      contact: 'تواصل معنا',
      discover: 'اكتشف مجموعتنا',
      sameDay: 'توصيل في نفس اليوم',
      shopNow: 'تسوق الآن',
      featured: 'منتجاتنا المميزة',
      viewAll: 'عرض كل المنتجات',
      addToCart: 'أضف للسلة',
      addToWishlist: 'أضف للمفضلة',
      cart: 'السلة',
      wishlist: 'المفضلة',
      // ...add more as needed
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 