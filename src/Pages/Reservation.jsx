import React from 'react';

const Reservation = () => {
  return (
    <div className='bg-[#101828] h-min-screen text-white'>
      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">Make a Reservation</h2>
        
        <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="guests">Number of Guests</label>
                <select 
                  id="guests" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option>1 Person</option>
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6 People</option>
                  <option>7 People</option>
                  <option>8+ People</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="date">Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium" htmlFor="time">Time</label>
                <select 
                  id="time" 
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium" htmlFor="special">Special Requests</label>
              <textarea 
                id="special" 
                rows="4" 
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                placeholder="Any special requests or dietary restrictions?"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-3 px-6 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              Book Table
            </button>
          </form>
        </div>

      </main>
    </div>
  );
};

export default Reservation;
