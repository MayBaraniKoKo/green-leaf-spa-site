
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-olive-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-olive-800 mb-6 leading-tight">
            Crafting Excellence
            <span className="block text-olive-600">Naturally</span>
          </h1>
          <p className="text-xl md:text-2xl text-olive-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We blend traditional craftsmanship with modern innovation to deliver 
            exceptional experiences that honor both quality and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-olive-600 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-olive-700 transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Explore Our Services
            </a>
            <a
              href="#about"
              className="border-2 border-olive-600 text-olive-600 px-8 py-4 rounded-lg font-semibold hover:bg-olive-600 hover:text-primary-foreground transition-all duration-200 hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-olive-600 hover:text-olive-800 transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
