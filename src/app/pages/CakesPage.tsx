import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface Cake {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const cakes: Cake[] = [
  {
    id: 1,
    name: 'Chocolate Dream Cake',
    description: 'Rich chocolate layers with creamy frosting',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NjY5OTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Classic'
  },
  {
    id: 2,
    name: 'Wedding Elegance',
    description: 'Custom designed multi-tier wedding cakes',
    price: '$250.00+',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZXxlbnwxfHx8fDE3NjY3NzE0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Special Occasions'
  },
  {
    id: 3,
    name: 'Gourmet Cupcakes',
    description: 'Assorted flavors, freshly baked daily',
    price: '$4.50 each',
    image: 'https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGJha2VyeXxlbnwxfHx8fDE3NjY3NTEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Cupcakes'
  },
  {
    id: 4,
    name: 'Red Velvet Delight',
    description: 'Classic red velvet with cream cheese frosting',
    price: '$48.00',
    image: 'https://images.unsplash.com/photo-1659352000821-19adc646f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlc3xlbnwxfHx8fDE3NjY3NzE0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Classic'
  },
  {
    id: 5,
    name: 'Vanilla Bean Classic',
    description: 'Light and fluffy vanilla cake with buttercream',
    price: '$42.00',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NjY5OTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Classic'
  },
  {
    id: 6,
    name: 'Birthday Celebration',
    description: 'Custom birthday cakes with your choice of design',
    price: '$55.00+',
    image: 'https://images.unsplash.com/photo-1659352000821-19adc646f748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBjYWtlc3xlbnwxfHx8fDE3NjY3NzE0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Special Occasions'
  },
  {
    id: 7,
    name: 'Strawberry Shortcake',
    description: 'Fresh strawberries and whipped cream',
    price: '$46.00',
    image: 'https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGJha2VyeXxlbnwxfHx8fDE3NjY3NTEyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Classic'
  },
  {
    id: 8,
    name: 'Lemon Bliss',
    description: 'Zesty lemon cake with lemon buttercream',
    price: '$44.00',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlfGVufDF8fHx8MTc2NjY5OTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Classic'
  }
];

export function CakesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 via-white to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 text-amber-900">Our Delicious Cakes 🎂</h1>
            <p className="text-amber-800 text-lg max-w-2xl mx-auto leading-relaxed">
              Browse our selection of handcrafted cakes, all made fresh to order with love and the finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cakes.map((cake) => (
              <div key={cake.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="h-52 overflow-hidden">
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
                  <p className="text-amber-700 text-sm mb-4 leading-relaxed">{cake.description}</p>
                  <span className="inline-block text-sm text-rose-600 bg-rose-50 px-4 py-2 rounded-full font-medium">
                    {cake.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}