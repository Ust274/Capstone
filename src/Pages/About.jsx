import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between bg-[#101828] px-6 md:px-10 py-6 text-white">
      {/* Left Section: Text */}
      <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">Little Lemon</h1>
        <span className="font-semibold text-lg mt-2">Chicago</span>
        <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatum quaerat nihil quos nemo vero explicabo cumque est doloribus
          dolore aliquid libero iusto assumenda cum quo, natus similique quis temporibus in.
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="flex w-full md:w-1/2 items-center justify-center mt-6 md:mt-0">
        <img 
          className="rounded-lg shadow-lg w-3/4 max-w-[400px] md:max-w-[500px] object-cover"
          src="src\assets\chef.webp"
          alt="Chef"
        />
      </div>
    </div>
  );
};

export default About;
