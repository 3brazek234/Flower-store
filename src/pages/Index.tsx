import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Products } from "@/components/Products";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Products />
        <AboutUs />
      
        {/* <Location /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
