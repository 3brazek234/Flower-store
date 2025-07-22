import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";

export const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "For orders and inquiries",
      value: "+966 11 123 4567",
      action: "Call"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Contact us anytime",
      value: "info@flowershop.sa",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick and direct communication",
      value: "+966 50 123 4567",
      action: "WhatsApp"
    }
  ];

  return (
    <section className="py-20 bg-green-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We are here to help! Contact us for a custom bouquet or to inquire about our products.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="p-6 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 bg-white/90"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <method.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-500 mb-4">
                {method.description}
              </p>
              <p className="font-semibold text-green-700 mb-4 text-lg">
                {method.value}
              </p>
              <Button 
                variant="outline" 
                className="w-full border-green-200 text-green-700 hover:bg-green-50"
              >
                {method.action}
              </Button>
            </Card>
          ))}
        </div>
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-md bg-white/90">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Send us a message
              </h3>
              <p className="text-gray-500">
                Fill out the form and we will get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Full Name</label>
                  <Input 
                    placeholder="Enter your full name"
                    className="bg-gray-50 border-green-100 focus:border-green-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-900">Phone Number</label>
                  <Input 
                    placeholder="Enter your phone number"
                    className="bg-gray-50 border-green-100 focus:border-green-400 transition-colors"
                    dir="ltr"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Email</label>
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-50 border-green-100 focus:border-green-400 transition-colors"
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Order Type</label>
                <select className="w-full p-3 bg-gray-50 border border-green-100 rounded-lg focus:border-green-400 transition-colors">
                  <option>Select order type</option>
                  <option>Wedding Bouquet</option>
                  <option>Birthday Bouquet</option>
                  <option>Romantic Bouquet</option>
                  <option>Graduation Bouquet</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Message</label>
                <Textarea 
                  placeholder="Write your message here..."
                  rows={5}
                  className="bg-gray-50 border-green-100 focus:border-green-400 transition-colors resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-green-100 hover:bg-green-200 text-green-900"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};