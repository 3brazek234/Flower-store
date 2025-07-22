import { Heart, Users, Award, Flower2, Star } from "lucide-react";

export const AboutUs = () => {
  const features = [
    {
      icon: Heart,
      title: "Passion for Beauty",
      description: "We believe flowers convey emotions and create magical moments."
    },
    {
      icon: Users,
      title: "15 Years of Experience",
      description: "A team of experts in flower arrangement and bouquet design."
    },
    {
      icon: Award,
      title: "Guaranteed Quality", 
      description: "We select the finest natural flowers from the best farms."
    },
    {
      icon: Flower2,
      title: "Unique Designs",
      description: "We create unique designs for all occasions and tastes."
    }
  ];

  return (
    <section className="py-24 bg-green-50 relative overflow-hidden" id="about">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 animate-float opacity-20">
        <div className="w-32 h-32 gradient-magical rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-10 right-10 animate-float-delayed opacity-20">
        <div className="w-24 h-24 gradient-sunset rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-6 py-3 mb-6">
            <Heart className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold">About Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            A Love Story with <span className="text-green-600">Beauty</span>
          </h2>
          <p className="text-2xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
            For 15 years, we have been making every moment in your life more beautiful with the finest flowers and the most creative designs in the world of floristry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group p-8 rounded-3xl bg-white/90 shadow-md hover:shadow-lg transition-all duration-500"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <feature.icon className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-10 rounded-3xl bg-white/90 shadow-md max-w-4xl">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-8 h-8 text-green-600" />
              <h3 className="text-3xl font-bold text-gray-900">Our Magical Message</h3>
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-xl text-gray-500 leading-relaxed">
              We believe every flower carries a message of love, and every bouquet tells a beautiful story. We strive to turn your dreams into a reality colored with the most beautiful natural colors, because love deserves the most beautiful expressions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};