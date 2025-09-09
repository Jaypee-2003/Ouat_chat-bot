import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-green-700 to-green-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <div className="mb-0 mt-16 md:mt-0 md:mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Orissa University of
            <span className="block text-yellow-300">Agriculture & Technology</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-4xl mx-auto">
            Nurturing Excellence in Agricultural Education, Research & Innovation
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-8 py-4 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Explore Programs
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold px-8 py-4 rounded-lg text-lg transition duration-300">
            Learn More
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-0 grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto md:mt-16 md:gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">50+</div>
            <div className="text-lg">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">10,000+</div>
            <div className="text-lg">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">100+</div>
            <div className="text-lg">Faculty Members</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
