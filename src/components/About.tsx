
import React from 'react';
import { Leaf, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "We prioritize eco-friendly methods in everything we do, ensuring a positive impact on our environment."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Our commitment to quality is unwavering, delivering results that exceed expectations every time."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience and passion to every project we undertake."
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your satisfaction is our priority. We listen, understand, and deliver solutions tailored to your needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-800 mb-6">
            About Olive & Co
          </h2>
          <p className="text-lg text-olive-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been dedicated to creating meaningful experiences 
            that blend artisanal craftsmanship with sustainable innovation. Our story 
            is one of passion, dedication, and an unwavering commitment to excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-olive-800">Our Story</h3>
            <p className="text-olive-600 leading-relaxed">
              Founded in 2012, Olive & Co began as a small family business with a 
              simple mission: to create beautiful, sustainable solutions that make 
              a difference. What started in a small workshop has grown into a 
              trusted name, serving clients who value quality, authenticity, and 
              environmental responsibility.
            </p>
            <p className="text-olive-600 leading-relaxed">
              Today, we continue to honor our roots while embracing innovation, 
              ensuring that every project reflects our core values of sustainability, 
              craftsmanship, and genuine care for our clients and community.
            </p>
          </div>
          <div className="bg-olive-100 rounded-2xl p-8 h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl text-olive-600 mb-4">🌿</div>
              <p className="text-olive-700 font-medium">Sustainability at Heart</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-olive-50 hover:bg-olive-100 transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-olive-600 text-primary-foreground rounded-full mb-6">
                <feature.icon size={32} />
              </div>
              <h4 className="text-xl font-semibold text-olive-800 mb-3">
                {feature.title}
              </h4>
              <p className="text-olive-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
