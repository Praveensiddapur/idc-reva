import React from 'react';
import { Code2, Trophy, Clock, Users, Star, ArrowRight, Calendar } from 'lucide-react';

const Hackathons = () => {
  const hackathons = [
    {
      id: 1,
      title: "DataHack 2024",
      status: "upcoming",
      date: "2024-03-01",
      duration: "48 hours",
      participants: "200+",
      prize: "₹1,00,000",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Premier data science hackathon focusing on real-world problem solving with AI/ML technologies.",
      themes: ["Data Science", "Machine Learning", "AI Innovation"],
      sponsors: ["Tech Corp", "AI Solutions", "DataViz Inc"],
      difficulty: "Advanced"
    },
    {
      id: 2,
      title: "WebDev Challenge",
      status: "upcoming",
      date: "2024-04-15",
      duration: "24 hours",
      participants: "150+",
      prize: "₹75,000",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Create innovative web applications using modern frameworks and technologies.",
      themes: ["Web Development", "UI/UX", "Full Stack"],
      sponsors: ["WebTech", "Frontend Masters"],
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Mobile Innovation Hack",
      status: "upcoming",
      date: "2024-05-10",
      duration: "36 hours",
      participants: "120+",
      prize: "₹80,000",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Build next-generation mobile applications that solve everyday problems.",
      themes: ["Mobile Apps", "Cross Platform", "Innovation"],
      sponsors: ["MobiTech", "App Studios"],
      difficulty: "Intermediate"
    }
  ];

  const pastHackathons = [
    // {
    //   title: "CodeFest 2023",
    //   date: "Nov 2023",
    //   participants: 250,
    //   winner: "Team Alpha",
    //   prize: "₹2,00,000"
    // },
    // {
    //   title: "AI Challenge 2023",
    //   date: "Sep 2023",
    //   participants: 180,
    //   winner: "Team Neural",
    //   prize: "₹1,50,000"
    // },
    // {
    //   title: "Startup Hack 2023",
    //   date: "Jul 2023",
    //   participants: 200,
    //   winner: "Team Innovate",
    //   prize: "₹1,00,000"
    // }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20';
      case 'Advanced': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <section id="hackathons" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-green-400">Hackathons</span> & Competitions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase your skills, collaborate with like-minded developers, and compete for exciting prizes in our hackathons.
          </p>
        </div>

        {/* Upcoming Hackathons */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Upcoming <span className="text-green-400">Challenges</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hackathons.map((hackathon) => (
              <div key={hackathon.id} className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="px-3 py-1 bg-green-400 text-black text-sm font-semibold rounded-full">
                      Upcoming
                    </span>
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getDifficultyColor(hackathon.difficulty)}`}>
                      {hackathon.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-black/70 px-3 py-1 rounded-full">
                      <span className="text-green-400 font-bold">{hackathon.prize}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                    {hackathon.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {hackathon.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">{new Date(hackathon.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">{hackathon.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm">{hackathon.participants}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Trophy className="w-4 h-4 text-green-400 mr-2" />
                      <span className="text-sm font-semibold">{hackathon.prize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">Themes:</h5>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.themes.map((theme, index) => (
                        <span key={index} className="px-3 py-1 bg-green-400/20 text-green-400 text-xs rounded-full">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">Sponsors:</h5>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.sponsors.map((sponsor, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          {sponsor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold py-3 rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-300 flex items-center justify-center group">
                    Register Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Hackathons */}
        

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-2xl p-8 border border-green-400/40">
            <Code2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Compete?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our upcoming hackathons and showcase your skills. Whether you're a beginner or expert, 
              we have challenges suited for every skill level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold rounded-full hover:from-green-500 hover:to-green-600 transition-all duration-300">
                View All Hackathons
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-black transition-all duration-300">
                <Star className="mr-2 w-5 h-5" />
                Get Notified
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;