
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-olive-800 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="text-olive-300 mr-2" size={32} />
              <h3 className="text-2xl font-bold">Olive & Co</h3>
            </div>
            <p className="text-olive-200 mb-6 leading-relaxed max-w-md">
              Creating sustainable solutions with artisanal craftsmanship and modern innovation. 
              We're committed to excellence in everything we do, honoring both quality and environmental responsibility.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-olive-700 rounded-full flex items-center justify-center hover:bg-olive-600 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-olive-200 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={16} className="text-olive-300 mr-3" />
                <span className="text-olive-200 text-sm">hello@oliveandco.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-olive-300 mr-3" />
                <span className="text-olive-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-olive-300 mr-3 mt-0.5" />
                <span className="text-olive-200 text-sm">
                  123 Green Street<br />
                  Eco City, EC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-olive-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-olive-200 text-sm mb-4 md:mb-0">
              © {currentYear} Olive & Co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-olive-200 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-olive-200 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-olive-200 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
