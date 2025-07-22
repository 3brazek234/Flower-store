import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface StoreState {
  cart: CartItem[];
  wishlist: WishlistItem[];
  language: 'en' | 'ar';
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  wishlist: [],
  language: 'en',
  addToCart: (item) => set((state) => {
    const exists = state.cart.find((i) => i.id === item.id);
    if (exists) {
      return {
        cart: state.cart.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i),
      };
    }
    return { cart: [...state.cart, item] };
  }),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((i) => i.id !== id) })),
  addToWishlist: (item) => set((state) => {
    if (state.wishlist.find((i) => i.id === item.id)) return {};
    return { wishlist: [...state.wishlist, item] };
  }),
  removeFromWishlist: (id) => set((state) => ({ wishlist: state.wishlist.filter((i) => i.id !== id) })),
  setLanguage: (lang) => set(() => ({ language: lang })),
  clearCart: () => set(() => ({ cart: [] })),
}));

export const useCart = () => useStore((state) => ({
  cart: state.cart,
  addToCart: state.addToCart,
  removeFromCart: state.removeFromCart,
  clearCart: state.clearCart,
}));

export const useWishlist = () => useStore((state) => ({
  wishlist: state.wishlist,
  addToWishlist: state.addToWishlist,
  removeFromWishlist: state.removeFromWishlist,
}));

export const useLanguage = () => useStore((state) => ({
  language: state.language,
  setLanguage: state.setLanguage,
})); 