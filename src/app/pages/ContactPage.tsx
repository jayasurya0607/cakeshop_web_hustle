import { MapPin, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

export function ContactPage() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/15551234567', '_blank');
  };

  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 via-white to-amber-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 text-amber-900">Let's Connect! 📞</h1>
            <p className="text-amber-800 text-lg">
              We'd love to hear from you and help make your celebration sweeter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-200 rounded-full mb-6">
                <MapPin className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-xl mb-4 text-amber-900 font-semibold">Visit Us</h3>
              <p className="text-amber-800 leading-relaxed">123 Bakery Lane<br />Downtown, CA 94102</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-full mb-6">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl mb-4 text-amber-900 font-semibold">Working Hours</h3>
              <p className="text-amber-800 leading-relaxed">Mon-Fri: 8am - 6pm<br />Sat-Sun: 9am - 5pm</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-200 rounded-full mb-6">
                <Phone className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl mb-4 text-amber-900 font-semibold">Call Us</h3>
              <p className="text-amber-800 leading-relaxed">
                <a href="tel:+15551234567" className="hover:text-rose-500 transition-colors">
                  (555) 123-4567
                </a>
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-100 to-amber-200 rounded-full mb-6">
                <Mail className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-xl mb-4 text-amber-900 font-semibold">Email Us</h3>
              <p className="text-amber-800 leading-relaxed">
                <a href="mailto:orders@sweetmoments.com" className="hover:text-rose-500 transition-colors">
                  orders@sweetmoments.com
                </a>
              </p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center mb-16">
            <button 
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white px-12 py-5 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg font-medium"
            >
              <MessageCircle className="w-6 h-6" />
              Order on WhatsApp 💬
            </button>
            <p className="text-amber-700 mt-4 text-sm">Quick responses during business hours!</p>
          </div>

          {/* Google Maps Section */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl mb-6 text-center text-amber-900">Find Our Bakery 🗺️</h2>
            <div className="w-full h-96 bg-neutral-200 rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019916788!2d-122.41941508468208!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sUnion%20Square%2C%20San%20Francisco%2C%20CA%2094108!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bakery Location"
              />
            </div>
            <p className="text-center text-amber-700 mt-6 text-lg">
              Conveniently located in downtown with ample parking available 🚗
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}