import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-steel-gray text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-construction-yellow">
              Kantai Building Material Suppliers
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for quality building materials. We supply premium 
              cement, steel, bricks, and sand for all your construction needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-yellow transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-construction-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cement" className="text-gray-300 hover:text-white transition-colors">
                  Cement Products
                </Link>
              </li>
              <li>
                <Link to="/steel" className="text-gray-300 hover:text-white transition-colors">
                  Steel Products
                </Link>
              </li>
              <li>
                <Link to="/bricks" className="text-gray-300 hover:text-white transition-colors">
                  Bricks
                </Link>
              </li>
              <li>
                <Link to="/sand" className="text-gray-300 hover:text-white transition-colors">
                  Sand Types
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-construction-yellow">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-construction-orange" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-construction-orange" />
                <span className="text-gray-300">info@kantaibuilding.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-construction-orange" />
                <span className="text-gray-300">
                  123 Industrial Area, Construction Zone,<br />
                  Building City - 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kantai Building Material Suppliers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;