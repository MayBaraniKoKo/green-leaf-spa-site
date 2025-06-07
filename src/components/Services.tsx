
import React from 'react';
import { Palette, Cog, Lightbulb, Shield, Zap, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Creative Design",
      description: "Bespoke design solutions that capture your vision and bring it to life with artistic flair and functionality.",
      features: ["Brand Identity", "Visual Design", "Creative Direction"]
    },
    {
      icon: Cog,
      title: "Custom Development",
      description: "Tailored development services that transform ideas into robust, scalable solutions built for your specific needs.",
      features: ["Web Development", "Custom Software", "API Integration"]
    },
    {
      icon: Lightbulb,
      title: "Strategy & Consulting",
      description: "Expert guidance and strategic planning to help you navigate challenges and achieve your business objectives.",
      features: ["Business Strategy", "Digital Transformation", "Process Optimization"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control to ensure every deliverable meets the highest standards of excellence.",
      features: ["Testing Protocols", "Quality Control", "Performance Optimization"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Enhance your existing systems with performance improvements that drive efficiency and user satisfaction.",
      features: ["Speed Optimization", "System Enhancement", "User Experience"]
    },
    {
      icon: Globe,
      title: "Digital Solutions",
      description: "Complete digital ecosystem development from concept to deployment, ensuring seamless user experiences.",
      features: ["Digital Platforms", "E-commerce", "Mobile Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-800 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-olive-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of services designed to meet your unique needs 
            and help you achieve your goals with sustainable, innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-olive-600 text-primary-foreground rounded-lg mr-4 group-hover:bg-olive-700 transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-olive-800">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-olive-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-olive-600">
                    <div className="w-2 h-2 bg-olive-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-olive-600 text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-olive-700 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
