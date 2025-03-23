import React from 'react';

const OrderOnline = () => {
  return (
    <div className='bg-[#101828] h-min-screen text-white'>
      

      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Order Online</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-bold mb-2">Delivery</h3>
            <p className="text-gray-400">Order from the comfort of your home</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🚶</div>
            <h3 className="text-xl font-bold mb-2">Pickup</h3>
            <p className="text-gray-400">Order ahead and pick up at our restaurant</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-2">Catering</h3>
            <p className="text-gray-400">Order for your events and gatherings</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Categories</h3>
              <ul>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Appetizers</a></li>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Main Courses</a></li>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Pasta & Risotto</a></li>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Seafood</a></li>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Salads</a></li>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Sides</a></li>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Desserts</a></li>
                <li className="mb-3"><a href="#" className="block text-white hover:text-yellow-400">Beverages</a></li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Your Order</h3>
              <div className="text-center p-8 text-gray-400">
                <p>Your cart is empty</p>
                <button className="mt-4 py-2 px-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                  Start Ordering
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Most Popular Items</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex bg-gray-700 rounded-lg overflow-hidden">
                  <div className="w-24 h-24 bg-gray-600"></div>
                  <div className="p-3 flex-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold">Lemon Chicken</h4>
                      <span className="text-yellow-400 font-bold">$22.99</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Grilled chicken breast marinated in lemon and herbs.</p>
                    <button className="text-sm py-1 px-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500">Add to cart</button>
                  </div>
                </div>
                
                <div className="flex bg-gray-700 rounded-lg overflow-hidden">
                  <div className="w-24 h-24 bg-gray-600"></div>
                  <div className="p-3 flex-1">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-bold">Mediterranean Plate</h4>
                      <span className="text-yellow-400 font-bold">$14.99</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Hummus, falafel, olives, and warm pita bread.</p>
                    <button className="text-sm py-1 px-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">Featured Menu</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold border-b border-gray-600 pb-2 mb-3">Appetizers</h4>
                  
                  <div className="mb-4 pb-4 border-b border-gray-600">
                    <div className="flex justify-between mb-1">
                      <h5 className="font-bold">Bruschetta</h5>
                      <span className="text-yellow-400 font-bold">$12.99</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Grilled bread rubbed with garlic and topped with olive oil, salt, and fresh tomatoes.</p>
                    <button className="text-sm py-1 px-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500">Add to cart</button>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h5 className="font-bold">Calamari</h5>
                      <span className="text-yellow-400 font-bold">$15.99</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Lightly fried squid served with a zesty lemon aioli dipping sauce.</p>
                    <button className="text-sm py-1 px-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500">Add to cart</button>
                  </div>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold border-b border-gray-600 pb-2 mb-3">Main Courses</h4>
                  
                  <div className="mb-4 pb-4 border-b border-gray-600">
                    <div className="flex justify-between mb-1">
                      <h5 className="font-bold">Seafood Pasta</h5>
                      <span className="text-yellow-400 font-bold">$24.99</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Linguine with shrimp, mussels, and calamari in a light tomato sauce.</p>
                    <button className="text-sm py-1 px-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500">Add to cart</button>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <h5 className="font-bold">Vegetable Risotto</h5>
                      <span className="text-yellow-400 font-bold">$19.99</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Creamy arborio rice with seasonal vegetables and parmesan cheese.</p>
                    <button className="text-sm py-1 px-3 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderOnline;