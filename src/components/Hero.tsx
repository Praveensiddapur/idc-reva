import React from 'react';
import { ArrowRight, Play, Users, Calendar, Trophy } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">REVA</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500"> IDC</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-green-400 font-semibold mb-4">
              Indian Data Club Chapter
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Empowering the next generation of data scientists, developers, and tech innovators 
              through cutting-edge events, workshops, and collaborative projects.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
            >
              Explore Our Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 w-5 h-5" />
              View Events
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Users, label: 'Active Members', value: '500+' },
              { icon: Calendar, label: 'Events Organized', value: '50+' },
              { icon: Trophy, label: 'Awards Won', value: '25+' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;