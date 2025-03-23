import React from 'react';

const Menu = () => {
  return (
    <div className='bg-[#101828] h-min-screen text-white'>
    

      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Our Menu</h2>
        
        {/* Appetizers Section */}
        <section className="mb-12">
          <h3 className="text-2xl text-yellow-400 border-b border-yellow-400 pb-2 mb-6">Appetizers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item */}
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Bruschetta</h4>
                  <span className="text-yellow-400 font-bold">$12.99</span>
                </div>
                <p className="text-gray-400">Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomatoes.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Calamari</h4>
                  <span className="text-yellow-400 font-bold">$15.99</span>
                </div>
                <p className="text-gray-400">Lightly fried squid served with a zesty lemon aioli dipping sauce.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Mediterranean Plate</h4>
                  <span className="text-yellow-400 font-bold">$14.99</span>
                </div>
                <p className="text-gray-400">Hummus, falafel, olives, and warm pita bread.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Courses Section */}
        <section className="mb-12">
          <h3 className="text-2xl text-yellow-400 border-b border-yellow-400 pb-2 mb-6">Main Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Lemon Chicken</h4>
                  <span className="text-yellow-400 font-bold">$22.99</span>
                </div>
                <p className="text-gray-400">Grilled chicken breast marinated in lemon and herbs, served with roasted vegetables.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Seafood Pasta</h4>
                  <span className="text-yellow-400 font-bold">$24.99</span>
                </div>
                <p className="text-gray-400">Linguine with shrimp, mussels, and calamari in a light tomato sauce.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Vegetable Risotto</h4>
                  <span className="text-yellow-400 font-bold">$19.99</span>
                </div>
                <p className="text-gray-400">Creamy arborio rice with seasonal vegetables and parmesan cheese.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Desserts Section */}
        <section>
          <h3 className="text-2xl text-yellow-400 border-b border-yellow-400 pb-2 mb-6">Desserts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Lemon Sorbet</h4>
                  <span className="text-yellow-400 font-bold">$8.99</span>
                </div>
                <p className="text-gray-400">Refreshing homemade lemon sorbet served with fresh mint.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Tiramisu</h4>
                  <span className="text-yellow-400 font-bold">$9.99</span>
                </div>
                <p className="text-gray-400">Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-bold text-lg">Baklava</h4>
                  <span className="text-yellow-400 font-bold">$7.99</span>
                </div>
                <p className="text-gray-400">Sweet pastry made of layers of filo filled with chopped nuts and sweetened with syrup.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Menu;