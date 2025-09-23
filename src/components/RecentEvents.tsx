import React from 'react';
import { Calendar, Users, Trophy, ExternalLink } from 'lucide-react';

const RecentEvents = () => {
  const recentEvents = [
    {
      id: 1,
      title: "Inaugural Of IDC REVA Chapter 2025",
      date: "24-09-2025",
      attendees: 250,
      image: "/firstevent.jpeg",
      description: "Annual coding competition with participants from across India. Featured algorithmic challenges and innovative project showcases.",
      highlights: [
        "250+ participants from 50+ colleges",
        "₹2,00,000 in prize money",
        "Industry mentors and judges",
      ],
      gallery: [
        "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300"
      ]
    },
    // {
    //   id: 2,
    //   title: "Data Science Summit",
    //   date: "2023-10-20",
    //   attendees: 180,
    //   image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Two-day summit featuring leading data scientists sharing insights on AI/ML trends and real-world applications.",
    //   highlights: [
    //     "Industry experts from FAANG companies",
    //     "Hands-on ML workshops",
    //     "Networking with professionals"
    //   ],
    //   gallery: [
    //     "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300",
    //     "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=300",
    //     "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=300"
    //   ]
    // },
    // {
    //   id: 3,
    //   title: "Tech Talk Series",
    //   date: "2023-09-30",
    //   attendees: 320,
    //   image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Monthly tech talks featuring alumni working in top tech companies sharing their journey and insights.",
    //   highlights: [
    //     "Alumni from Google, Microsoft, Amazon",
    //     "Career guidance sessions",
    //     "Q&A with industry professionals"
    //   ],
    //   gallery: [
    //     "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300",
    //     "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=300",
    //     "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=300"
    //   ]
    // }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recent <span className="text-green-400">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at our successfully conducted events that brought together tech enthusiasts and industry experts.
          </p>
        </div>

        <div className="space-y-16">
          {recentEvents.map((event, index) => (
            <div key={event.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Event Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                  
                  {/* Gallery Thumbnails */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {event.gallery.slice(0, 3).map((img, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={img}
                        alt=""
                        className="w-12 h-12 object-cover rounded-lg border-2 border-white/20 hover:border-green-400/40 transition-all duration-300 cursor-pointer"
                      />
                    ))}
                    <div className="w-12 h-12 bg-black/50 rounded-lg border-2 border-white/20 flex items-center justify-center cursor-pointer hover:border-green-400/40 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="lg:w-1/2">
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-green-400">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span className="font-medium">
                        {new Date(event.date).toLocaleDateString('en-IN', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-green-400">
                      <Users className="w-5 h-5 mr-2" />
                      <span className="font-medium">{event.attendees} attendees</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{event.description}</p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                      <Trophy className="w-5 h-5 text-green-400 mr-2" />
                      Event Highlights
                    </h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <button className="flex items-center px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300">
                      View Gallery
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                    <button className="flex items-center px-6 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-xl hover:bg-green-400 hover:text-black transition-all duration-300">
                      Event Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-full border border-green-400/40">
            <Trophy className="w-6 h-6 text-green-400 mr-3" />
            <span className="text-white font-medium">50+ successful events organized since 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;