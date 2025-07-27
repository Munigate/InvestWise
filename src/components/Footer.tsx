import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Privacy', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' }
  ];

  return (
    <footer className={`py-16 px-4 ${isDark ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="md:col-span-2">
            <div className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-blue-600">Invest</span>Wise
            </div>
            <p className={`text-lg mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-md`}>
              Empowering your financial journey, one share at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isDark 
                        ? 'bg-gray-700 text-gray-400 hover:bg-blue-600 hover:text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? 'text-gray-400 hover:text-blue-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Mail className="w-5 h-5" />
                <span>support@investwise.com</span>
              </div>
              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <MapPin className="w-5 h-5" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`rounded-2xl p-8 mb-12 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h3>
          <form className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className={`px-4 py-3 rounded-lg transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:border-blue-500' 
                  : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`px-4 py-3 rounded-lg transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:border-blue-500' 
                  : 'bg-white text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} text-center`}>
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 InvestWise. All rights reserved. | Made with ❤️ for smart investors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;