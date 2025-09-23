import React, { useState } from 'react';
import { Play, X, ExternalLink, Calendar } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    // {
    //   id: 1,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'CodeFest 2023 Opening Ceremony',
    //   event: 'CodeFest 2023',
    //   date: '2023-11-15'
    // },
    // {
    //   id: 2,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'AI Workshop in Progress',
    //   event: 'Data Science Summit',
    //   date: '2023-10-20'
    // },
    // {
    //   id: 3,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Industry Expert Talk Session',
    //   event: 'Tech Talk Series',
    //   date: '2023-09-30'
    // },
    // {
    //   id: 4,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Team Collaboration During Hackathon',
    //   event: 'DataHack 2023',
    //   date: '2023-08-15'
    // },
    // {
    //   id: 5,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Award Ceremony',
    //   event: 'CodeFest 2023',
    //   date: '2023-11-17'
    // },
    // {
    //   id: 6,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Web Development Workshop',
    //   event: 'WebDev Bootcamp',
    //   date: '2023-07-10'
    // },
    // {
    //   id: 7,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Cloud Computing Lab Session',
    //   event: 'Cloud Workshop',
    //   date: '2023-06-25'
    // },
    // {
    //   id: 8,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Mobile App Development Demo',
    //   event: 'Mobile Dev Workshop',
    //   date: '2023-05-18'
    // },
    // {
    //   id: 9,
    //   type: 'image',
    //   src: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   title: 'Networking Session',
    //   event: 'Alumni Meet 2023',
    //   date: '2023-04-12'
    // }
  ];

  const events = [...new Set(galleryItems.map(item => item.event))];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Photo <span className="text-green-400">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capturing memorable moments from our events, workshops, and community gatherings.
          </p>
        </div>

        {/* Event Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {events.slice(0, 6).map((event, index) => (
            <span key={index} className="px-4 py-2 bg-green-400/20 text-green-400 rounded-full text-sm font-medium">
              {event}
            </span>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 text-xs font-medium">{item.event}</span>
                    <span className="text-gray-300 text-xs">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Click to view */}
              <button
                onClick={() => setSelectedImage(item.src)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-400 hover:text-black"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Annual Events",
              count: "15+",
              description: "Major events including hackathons, conferences, and workshops"
            },
            {
              title: "Workshop Sessions",
              count: "50+",
              description: "Hands-on technical workshops and skill development sessions"
            },
            {
              title: "Community Meetups",
              count: "25+",
              description: "Regular networking events and alumni interactions"
            }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-900/50 rounded-xl border border-green-400/20">
              <div className="text-3xl font-bold text-green-400 mb-2">{stat.count}</div>
              <h4 className="text-xl font-semibold text-white mb-2">{stat.title}</h4>
              <p className="text-gray-300 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-2xl p-8 border border-green-400/40">
            <h3 className="text-2xl font-bold text-white mb-4">Want to see more?</h3>
            <p className="text-gray-300 mb-6">
              Follow us on social media for live updates and behind-the-scenes content from our events.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300">
                Instagram Gallery
              </button>
              <button className="px-6 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-black transition-all duration-300">
                LinkedIn Updates
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-green-400 text-black rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;