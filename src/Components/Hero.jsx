import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import CustomerReview from "./CustomerReview";

const Hero = () => {
  const navigate = useNavigate();
  
  const handleReservationClick = () => {
    navigate("/Menu");
  };

  return (
    <>
      {/* Hero Section */}
      <main className="flex flex-col md:flex-row justify-center items-center bg-gray-800 mx-4 md:mx-14 rounded-lg px-6 md:px-10 py-8 shadow-lg">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-4 md:mr-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">Little Lemon</h1>
          <p className="text-gray-300 text-base md:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed fugiat
            maxime voluptate molestias quidem labore molestiae, veniam repudiandae
            placeat atque! Sint accusamus commodi earum natus cupiditate.
          </p>
          <button className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg mt-4 hover:bg-yellow-500 transition-colors">
            Reserve Table
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="src/assets/image.png" 
            alt="Delicious Mediterranean dish"
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
      </main>

      {/* Specials Section */}
      <div className="mt-12 md:mt-16 px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 mx-4 md:mx-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4 sm:mb-0">This Week's Specials</h2>   
          <button 
            onClick={handleReservationClick}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors"
          >
            Online Menu
          </button>
        </div>
        
        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mx-4 md:mx-14">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-12 md:mt-16 bg-gray-800 py-10 mx-4 md:mx-10 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-10">Valuable Customer Reviews</h2>
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-14">
            <CustomerReview />
            <CustomerReview />
            <CustomerReview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;