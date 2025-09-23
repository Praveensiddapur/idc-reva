import React from 'react';
import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-green-400"> IDC REVA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Indian Data Club at REVA University is a dynamic community dedicated to fostering 
            innovation in data science, artificial intelligence, and emerging technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              Founded with a vision to bridge the gap between academic learning and industry requirements, 
              REVA IDC has emerged as a premier student organization. We organize cutting-edge workshops, 
              hackathons, and collaborative projects that prepare students for the future of technology.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our community comprises passionate students, experienced faculty, and industry experts who 
              work together to create an ecosystem of continuous learning and innovation.
            </p>
            <div className="flex space-x-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">2024</div>
                <div className="text-sm text-gray-400">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">500+</div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-400">Events</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-green-500/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-gray-900 p-8 rounded-2xl border border-green-400/20">
              <h4 className="text-2xl font-bold text-white mb-4">What We Do</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Organize technical workshops and seminars</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Host competitive programming contests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conduct industry collaboration projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Provide mentorship and career guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To cultivate a culture of innovation and technical excellence among students through hands-on learning experiences.'
            },
            {
              icon: Eye,
              title: 'Our Vision',
              description: 'To be the leading student organization that bridges academia and industry in the field of data science and technology.'
            },
            {
              icon: Heart,
              title: 'Our Values',
              description: 'Collaboration, continuous learning, innovation, and inclusive growth define our core values and approach.'
            },
            {
              icon: Lightbulb,
              title: 'Our Impact',
              description: 'Empowering students with practical skills and industry connections to become tomorrow\'s tech leaders.'
            }
          ].map((item, index) => (
            <div key={index} className="group p-6 bg-gray-900/50 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-black" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;