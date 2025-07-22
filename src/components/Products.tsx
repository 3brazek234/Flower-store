import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import bouquet1 from "@/assets/img.jpg";
import bouquet2 from "@/assets/img7.jpg";
import bouquet3 from "@/assets/img6.jpg";
import bouquet4 from "@/assets/img2.jpg";
import bouquet5 from "@/assets/img3.jpg";
import bouquet6 from "@/assets/img4.jpg";
import React from "react";

const naturalFlowers = [
  {
    id: 1,
    name: "Pink Love Bouquet",    
    description: "A romantic bouquet of pink and white roses with eucalyptus leaves.",
    price: "$40",
    originalPrice: "$55",
    image: bouquet4,
    rating: 4.9,
    reviews: 127,
    badge: "Best Seller"
  },
  {
    id: 1,
    name: "Pink Love Bouquet",
    description: "A romantic bouquet of pink and white roses with eucalyptus leaves.",
    price: "$40",
    originalPrice: "$55",
    image: bouquet5,
    rating: 4.9,
    reviews: 127,
    badge: "Best Seller"
  },
  {
    id: 1,
    name: "Pink Love Bouquet",
    description: "A romantic bouquet of pink and white roses with eucalyptus leaves.",
    price: "$40",
    originalPrice: "$55",
    image: bouquet1,
    rating: 4.9,
    reviews: 127,
    badge: "Best Seller"
  },
  {
    id: 1,
    name: "Pink Love Bouquet",
    description: "A romantic bouquet of pink and white roses with eucalyptus leaves.",
    price: "$40",
    originalPrice: "$55",
    image: bouquet6,
    rating: 4.9,
    reviews: 127,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Classic Red Roses",
    description: "A luxurious bouquet of natural red roses for special occasions.",
    price: "$53",
    originalPrice: "$67",
    image: bouquet2,
    rating: 4.8,
    reviews: 89,
    badge: "Special Offer"
  },
  {
    id: 3,
    name: "Sunny Sunflowers",
    description: "A cheerful bouquet of sunflowers and orange flowers.",
    price: "$32",
    originalPrice: "$43",
    image: bouquet3,
    rating: 4.7,
    reviews: 65,
    badge: "New"
  }
];

const artificialFlowers = [
  {
    id: 4,
    name: "Premium Artificial Roses",
    description: "High-quality artificial roses that last long and suit any decor.",
    price: "$27",
    originalPrice: "$35",
    image: bouquet2,
    rating: 4.6,
    reviews: 40,
    badge: "Most Popular"
  },
  {
    id: 5,
    name: "Colorful Artificial Flowers",
    description: "Vivid colors and a beautiful touch that lasts forever in your home or office.",
    price: "$24",
    originalPrice: "$32",
    image: bouquet3,
    rating: 4.5,
    reviews: 28,
    badge: "New"
  }
];

export const Products = () => {
  return (
    <section className="py-24 bg-green-50 relative overflow-hidden" id="products">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="absolute top-20 left-20 w-64 h-64 gradient-magical rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 gradient-sunset rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold">Our Featured Products</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Flowers that <span className="text-green-600">tell your story</span>
          </h2>
          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Each bouquet is carefully designed to express your feelings and add magic to your special moments.
          </p>
        </div>
        <Tabs defaultValue="natural" className="w-full">
          <TabsList className="mx-auto mb-10 flex justify-center bg-green-100">
            <TabsTrigger value="natural">Natural Flowers</TabsTrigger>
            <TabsTrigger value="artificial">Artificial Flowers</TabsTrigger>
          </TabsList>
          <TabsContent value="natural">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-16"
            >
              {naturalFlowers.map((product, index) => (
                <SwiperSlide key={product.id}>
                  <div className="group bg-white/90 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-700 hover:-translate-y-2 border border-green-100">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-200 px-4 py-2 rounded-full shadow-sm">
                          <span className="text-green-800 font-semibold text-sm">{product.badge}</span>
                        </div>
                      </div>
                      {/* Heart Icon */}
                      <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-green-100 transition-all shadow-sm">
                        <Heart className="w-5 h-5 text-green-600" />
                      </button>
                    </div>
                    {/* Product Info */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex text-green-600">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-green-700">
                            {product.price}
                          </span>
                          <span className="text-lg text-gray-400 line-through bg-gray-100 px-2 py-1 rounded">
                            {product.originalPrice}
                          </span>
                        </div>
                        <div className="bg-green-50 px-3 py-2 rounded-full">
                          <span className="text-green-700 font-semibold text-sm">Save 25%</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-green-100 hover:bg-green-200 text-green-900 border-0 py-4 text-lg font-semibold rounded-2xl"
                        size="lg"
                      >
                        <ShoppingCart className="ml-3 w-6 h-6" />
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabsContent>
          <TabsContent value="artificial">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-16"
            >
              {artificialFlowers.map((product, index) => (
                <SwiperSlide key={product.id}>
                  <div className="group bg-white/90 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-700 hover:-translate-y-2 border border-green-100">
                    {/* Product Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-200 px-4 py-2 rounded-full shadow-sm">
                          <span className="text-green-800 font-semibold text-sm">{product.badge}</span>
                        </div>
                      </div>
                      {/* Heart Icon */}
                      <button className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-green-100 transition-all shadow-sm">
                        <Heart className="w-5 h-5 text-green-600" />
                      </button>
                    </div>
                    {/* Product Info */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex text-green-600">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-bold text-green-700">
                            {product.price}
                          </span>
                          <span className="text-lg text-gray-400 line-through bg-gray-100 px-2 py-1 rounded">
                            {product.originalPrice}
                          </span>
                        </div>
                        <div className="bg-green-50 px-3 py-2 rounded-full">
                          <span className="text-green-700 font-semibold text-sm">Save 25%</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-green-100 hover:bg-green-200 text-green-900 border-0 py-4 text-lg font-semibold rounded-2xl"
                        size="lg"
                      >
                        <ShoppingCart className="ml-3 w-6 h-6" />
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabsContent>
        </Tabs>
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-green-100 hover:bg-green-200 text-green-900 px-12 py-4 text-xl rounded-2xl border-0"
          >
            View all products
          </Button>
        </div>
      </div>
    </section>
  );
};