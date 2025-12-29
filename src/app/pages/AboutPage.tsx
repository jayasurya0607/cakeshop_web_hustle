export function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl mb-6 text-amber-900">Our Sweet Story 💕</h1>
            <p className="text-amber-800 text-lg max-w-2xl mx-auto">
              The heartwarming journey behind Sweet Moments Bakery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl mb-8 text-amber-900">From Our Kitchen to Your Heart</h2>
              <p className="text-amber-800 mb-6 leading-relaxed text-lg">
                Sweet Moments Bakery was founded in 2015 with a simple dream: to create 
                beautiful, delicious cakes that make every celebration special. What started 
                as a home-based passion has blossomed into a beloved local treasure.
              </p>
              <p className="text-amber-800 mb-6 leading-relaxed text-lg">
                Our founder, Sarah Johnson, trained at the Culinary Institute and spent years 
                perfecting her craft. Her love for baking and dedication to quality shines 
                through in every creation that leaves our kitchen.
              </p>
              <p className="text-amber-800 leading-relaxed text-lg">
                Today, we're proud to serve our community with handcrafted cakes made from 
                scratch using premium ingredients. From birthdays to weddings, we're honored 
                to be part of your most precious moments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-4 text-rose-500">10+</div>
                <div className="text-amber-800 font-medium">Years of Sweet Memories</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-4 text-amber-600">5k+</div>
                <div className="text-amber-800 font-medium">Cakes Crafted with Love</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-4 text-pink-500">100%</div>
                <div className="text-amber-800 font-medium">Fresh Premium Ingredients</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-3xl text-center shadow-lg">
                <div className="text-5xl mb-4 text-amber-500">Daily</div>
                <div className="text-amber-800 font-medium">Baked Fresh Each Morning</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 p-12 rounded-3xl shadow-xl">
            <h2 className="text-4xl mb-8 text-center text-amber-900">Our Mission</h2>
            <p className="text-amber-800 text-center max-w-3xl mx-auto text-xl leading-relaxed">
              To create exceptional cakes that not only taste incredible but also look 
              stunning. We believe every celebration deserves a cake that's as unique and 
              special as the occasion itself. Quality, creativity, and spreading joy 
              are at the heart of everything we bake. ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}