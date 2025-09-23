import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from 'lucide-react';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: "AI/ML Workshop Series",
      category: "workshop",
      date: "Nov 2025",
      time: "10:00 AM - 4:00 PM",
      location: "REVA University",
      attendees: 120,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive hands-on workshop covering machine learning fundamentals, neural networks, and practical implementations using Python and TensorFlow.",
      status: "upcoming",
      price: "Free",
      tags: ["Machine Learning", "Python", "TensorFlow"]
    },
    {
      id: 2,
      title: "DataHack 2025",
      category: "hackathon",
      date: "2025-11-07",
      time: "9:00 AM - 9:00 PM",
      location: "REVA University, Rangasthala",
      attendees: 200,
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "48-hour hackathon focused on solving real-world data problems. Teams will compete for prizes worth ₹1,00,000.",
      status: "upcoming",
      price: "₹250 per team",
      tags: ["Data Science", "Competition", "Team Event"]
    },
    {
      id: 3,
      title: "Industry Expert Talk",
      category: "seminar",
      date: "2025-011-15",
      time: "2:00 PM - 4:00 PM",
      location: "REVA University, Conference Hall",
      attendees: 300,
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Guest lecture by industry experts from top tech companies sharing insights on current trends in data science and career opportunities.",
      status: "upcoming",
      price: "Free",
      tags: ["Career", "Industry Insights", "Networking"]
    },
    // {
    //   id: 4,
    //   title: "Web Development Bootcamp",
    //   category: "workshop",
    //   date: "2024-11-15",
    //   time: "10:00 AM - 6:00 PM",
    //   location: "REVA University, Computer Lab",
    //   attendees: 80,
    //   image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Intensive bootcamp covering full-stack web development with React, Node.js, and modern deployment practices.",
    //   status: "upcoming",
    //   price: "₹1,00",
    //   tags: ["Web Development", "React", "Full Stack"]
    // },
    // {
    //   id: 5,
    //   title: "Cloud Computing Workshop",
    //   category: "workshop",
    //   date: "2024-11-05",
    //   time: "1:00 PM - 5:00 PM",
    //   location: "REVA University, Digital Lab",
    //   attendees: 100,
    //   image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Hands-on experience with AWS, Azure, and Google Cloud Platform. Learn deployment, scaling, and cloud architecture best practices.",
    //   status: "upcoming",
    //   price: "₹750",
    //   tags: ["Cloud Computing", "AWS", "DevOps"]
    // },
    // {
    //   id: 6,
    //   title: "Mobile App Development",
    //   category: "workshop",
    //   date: "2024-11-20",
    //   time: "9:00 AM - 5:00 PM",
    //   location: "REVA University, Innovation Center",
    //   attendees: 60,
    //   image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   description: "Create your first mobile app using React Native and Flutter. From concept to app store deployment.",
    //   status: "upcoming",
    //   price: "₹1,200",
    //   tags: ["Mobile Development", "React Native", "Flutter"]
    // }
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'hackathon', label: 'Hackathons' },
    { id: 'seminar', label: 'Seminars' }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upcoming <span className="text-green-400">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting workshops, hackathons, and seminars designed to enhance your technical skills and career prospects.
          </p>
        </div>

        {/* Event Categories Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 rounded-full p-2 border border-green-400/20">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-green-400 text-black'
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-400 text-black text-sm font-semibold rounded-full capitalize">
                    {event.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/70 text-green-400 text-sm font-semibold rounded-full">
                    {event.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 text-green-400 mr-3" />
                    <span className="text-sm">{event.attendees} expected attendees</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold py-3 rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 flex items-center justify-center group">
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-black transition-all duration-300">
            View All Events
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;