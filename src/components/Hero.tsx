import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images.jpeg"

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-green-50">
      {/* صورة خلفية ورد أبيض مع طبقة لون موحدة */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Bidaya Hayah" className="w-full h-full object-contain object-center opacity-80" />
        
      </div>
      {/* محتوى مركزي هادئ */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        <div className="mx-auto max-w-xl bg-white/80 rounded-2xl py-8 px-6 md:px-12 text-center shadow-lg backdrop-blur-sm">
          <h2 className="text-gray-700 text-lg font-light tracking-widest mb-2 uppercase">Discover our collection</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-wider uppercase">Same day delivery</h1>
          <Button className="bg-green-100 hover:bg-green-200 text-green-900 font-semibold px-8 py-3 rounded-full text-lg shadow-none mt-2">
            Shop now
          </Button>
        </div>
      </div>
    </section>
  );
};