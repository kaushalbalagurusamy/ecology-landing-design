
import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">RCT Workshop</h3>
            <p className="text-primary-100">
              Bridging human connections and ecological awareness for a more balanced and sustainable future.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-accent-300 transition-colors">About the Workshop</a>
              </li>
              <li>
                <a href="#details" className="hover:text-accent-300 transition-colors">Workshop Details</a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-accent-300 transition-colors">Our Speakers</a>
              </li>
              <li>
                <a href="#register" className="hover:text-accent-300 transition-colors">Registration</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Relational Cultural Theory</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Deep Ecology Resources</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Recommended Books</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Past Workshops</a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-300 transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent-300" />
                <a href="mailto:info@rctworkshop.com" className="hover:text-accent-300 transition-colors">info@rctworkshop.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent-300" />
                <a href="tel:+18025550123" className="hover:text-accent-300 transition-colors">(802) 555-0123</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-accent-300 mt-1" />
                <span>123 Forest Road, Burlington, VT 05401</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-500 pt-6 mt-8 text-center">
          <p className="text-primary-200">
            © {currentYear} Relational Cultural Theory Workshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
