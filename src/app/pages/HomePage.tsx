import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function HomePage() {
  const featuredCakes = [
    {
      id: 1,
      name: 'Chocolate Dream Cake',
      description: 'Rich chocolate layers with creamy frosting',
      price: '$45.00',
      image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NjY5OTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      name: 'Wedding Elegance',
      description: 'Custom designed wedding cakes',
      price: '$250.00+',
      image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjY3NzE0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 3,
      name: 'Gourmet Cupcakes',
      description: 'Assorted flavors, freshly baked daily',
      price: '$4.50 each',
      image: 'https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGJha2VyeXxlbnwxfHx8fDE3NjY3NTEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1659352000821-19adc646f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlc3xlbnwxfHx8fDE3NjY3NzE0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Bakery showcase"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-amber-900/30 to-pink-900/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl mb-6 text-center drop-shadow-lg">Baked with Love, 
          <br/>Served with Joy</h1>
          <p className="text-xl md:text-2xl mb-10 text-center max-w-2xl drop-shadow-md font-light">
            Handcrafted cakes and pastries that make every moment sweeter
          </p>
          <Link 
            to="/cakes"
            className="bg-rose-400 hover:bg-rose-500 text-white px-10 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 font-medium"
          >
            View Our Cakes 
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6 text-amber-900">Welcome to Sweet Moments 🧁</h2>
          <p className="text-amber-800 text-lg mb-6 leading-relaxed">
            For over a decade, we've been creating beautiful cakes and delicious treats 
            that make every celebration special. From birthdays to weddings, our custom 
            creations are designed to delight your taste buds and warm your heart.
          </p>
        </div>
      </section>

      {/* Featured Cakes */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-amber-900">Our Featured Cakes</h2>
            <p className="text-amber-700 text-lg">Handpicked favorites that our customers adore</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCakes.map((cake) => (
              <div key={cake.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-amber-900">{cake.name}</h3>
                    <span className="text-rose-500 font-semibold">{cake.price}</span>
                  </div>
                  <p className="text-amber-700 leading-relaxed">{cake.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/cakes"
              className="inline-block bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
            >
              Explore All Our Cakes 🍰
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}