
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Olive & Co transformed our vision into reality with their sustainable approach and exceptional craftsmanship. Their attention to detail and commitment to quality is unmatched."
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoDesign Studio",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Working with this team was an absolute pleasure. They understood our needs perfectly and delivered results that exceeded our expectations. Highly recommended!"
    },
    {
      name: "Emily Rodriguez",
      role: "Director, Sustainable Living Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The level of professionalism and expertise shown by Olive & Co is remarkable. They not only delivered on time but also provided innovative solutions we hadn't considered."
    },
    {
      name: "David Thompson",
      role: "Marketing Manager, Nature's Best",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From concept to completion, every step of the process was smooth and professional. The final result perfectly captured our brand's essence and values."
    },
    {
      name: "Lisa Park",
      role: "Creative Director, Artisan Crafts",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Olive & Co's commitment to sustainability and quality craftsmanship aligns perfectly with our values. The collaboration was seamless and the results outstanding."
    },
    {
      name: "James Wilson",
      role: "Owner, Heritage Homes",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Exceptional service and attention to detail. They took the time to understand our unique requirements and delivered a solution that perfectly met our needs."
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-olive-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-olive-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about working with Olive & Co.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              <Quote className="text-olive-300 mb-4" size={32} />
              
              <StarRating rating={testimonial.rating} />
              
              <p className="text-olive-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-olive-800 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-olive-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-olive-600 text-primary-foreground rounded-xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-2">Ready to Join Them?</h3>
            <p className="mb-4">Let's create something amazing together.</p>
            <a
              href="#contact"
              className="bg-background text-olive-600 px-6 py-3 rounded-lg font-semibold hover:bg-olive-50 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
