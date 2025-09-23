import React from 'react';
import { Code2, Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Events', href: '#events' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Student Resources', href: '#' },
    { name: 'Project Guidelines', href: '#' },
    { name: 'Mentorship Program', href: '#' },
    { name: 'Career Support', href: '#' },
    { name: 'Alumni Network', href: '#' },
    { name: 'Industry Partners', href: '#' }
  ];

  const events = [
    { name: 'DataHack 2024', date: 'Mar 1, 2024' },
    { name: 'AI Workshop', date: 'Feb 15, 2024' },
    { name: 'Tech Talk Series', date: 'Feb 28, 2024' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-green-400/20">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-7 h-7 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">REVA IDC</h3>
                <p className="text-sm text-green-400">CHAPTER</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering the next generation of tech innovators through hands-on learning, 
              collaborative projects, and industry connections at REVA University.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Mail className="w-4 h-4 text-green-400" />
                <span>idc.reva@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <Phone className="w-4 h-4 text-green-400" />
                <span>+91 9741640724</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 text-green-400" />
                <span>REVA University, Bangalore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Upcoming Events */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Upcoming Events</h4>
            <div className="space-y-3">
              {events.map((event, index) => (
                <div key={index} className="bg-gray-900/50 p-3 rounded-lg border border-green-400/20">
                  <p className="text-white font-medium text-sm">{event.name}</p>
                  <p className="text-green-400 text-xs">{event.date}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-300">
              View All Events →
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-green-400/10 to-green-500/10 rounded-2xl p-8 mb-8 border border-green-400/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest events and opportunities</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-green-400/20 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-400/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2024 REVA IDC Chapter. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> by REVA IDC Team
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-green-400 text-black rounded-full flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:transform hover:scale-110"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-green-400/20">
          <div className="flex justify-center space-x-6">
            {[
              { name: 'Instagram', href: 'https://instagram.com/revaidc' },
              { name: 'LinkedIn', href: 'https://linkedin.com/company/revaidc' },
              { name: 'Twitter', href: 'https://twitter.com/revaidc' },
              { name: 'GitHub', href: 'https://github.com/revaidc' },
              { name: 'Discord', href: 'https://discord.gg/revaidc' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;