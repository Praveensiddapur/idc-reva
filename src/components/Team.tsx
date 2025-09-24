import React from 'react';
import { Github, Linkedin, Mail, Star } from 'lucide-react';

const Team = () => {
  const leaders = [
    {
      name: "Dr. Ashwin Kumar U.M",
      role: "Director - School of CSE",
      image: "/hodd.jpeg",
      bio: "",
      skills: [],
      social: {
        github: "#",
        linkedin: "#",
        email: "arjun@revaidc.com"
      }
    },
     {
      name: "Prof. Satish G.C",
      role: "Faculty  Co-Ordinatorr",
      image: "/saaaatishhh.jpeg",
      bio: "",
      skills: [],
      social: {
        github: "#",
        linkedin: "#",
        email: "arjun@revaidc.com"
      }
    },
    {
      name: "Prof. Kiran M",
      role: "Faculty  Co-Ordinator",
      image: "/kiraaaan.jpeg",
      bio: "",
      skills:[] ,
      social: {
        github: "#",
        linkedin: "#",
        email: "priya@revaidc.com"
      }
    },
    {
      name: "Ananda Shankar",
      role: "Faculty Co-Ordinator",
      image: "/Ananda.jpeg",
      bio: "",
      skills:[] ,
      social: {
        github: "#",
        linkedin: "#",
        email: "rahul@revaidc.com"
      }
    }
  ];

  const coreTeam = [
    {
      name: "Mohamed Saad",
      role: "President",
      image: "/president.jpeg",
      bio: "Leading the vision and strategy for REVA IDC  along with gaining experience in data science",
      skills: ["Leadership", "Data Science", "Machine Learning"],
      social: {
        github: "https://github.com/imohammedsaad",
        linkedin: "https://www.linkedin.com/in/imohammedsaad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        email: "saadmudhol@gmail.com"
      }
    },
    {
      name: "Joyprakash Kalita",
      role: "Vice President",
      image: "/joyyyy.jpeg",
      bio: "Tech-geek with fluency in DevOps, ML, Deep Learning. Worked extensively on LLMs, NLP, and Foundational Models. Interested in Open Source contributions. Co-lead IDC's REVA Chapter along with core team",
      skills: ["Full-Stack Developer", "Data Analyst", "MLOps", "Pen-Testing"],
      social: {
        github: "https://github.com/joyprakashk",
        linkedin: "https://www.linkedin.com/in/joyprakashkalita/",
        email: "joyprakashk28@gmail.com"
      }
    },
    {
      name: "Satyam Gupta",
      role: "Secretary",
      image: "/satyam.jpeg",
      bio: "Passionate about Artificial Intelligence, Data Science, and Hackathons. Experienced in building AI-driven solutions in healthcare, education, and real-time analytics ",
      skills:  ["Python", "R", "Machine Learning", "Deep Learning", "NLP", "Generative AI", "Data Science", "Hackathons", "Leadership"],
      social: {
        github: "https://github.com/Satyamgupta2365",
        linkedin: "https://www.linkedin.com/in/satyam-gupta-41606a28a/",
        email: "issatyamgupta@gmail.com"
      }
    },
    {
      name: "Praveen Siddapur",
      role: "Technical Head",
      image: "/praveen.jpeg",
      bio: "Designing, developing, and optimizing applications that solve real-world problems",
      skills: ["VFx", "Full-Stack Developer", "DataBase","DSA"],
      social: {
        github: "https://github.com/Praveensiddapur",
        linkedin: "#",
        email: "praveenashoksiddapur@gmail.com"
      }
    },
    {
      name: "Om Shukla",
      role: "Event co-ordinator",
      image: "/ommm.jpeg",
      bio: "Driving growth through strategic marketing initiatives.",
      skills: ["Digital Marketing", "Branding", "Hackathons"],
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/om-shukla-5a7077338?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BevAZZBfITbeoB9YBvWruNw%3D%3D",
        email: "omprakashshukla387@gmail.com"
      }
    },
    {
      name: "Mohammed Touhid",
      role: "Treasurer",
      image: "/IMG_8494.JPG",
      bio: "Managing financial operations with precision and integrity.",
      skills: ["Financial Analysis", "Budgeting", "Accounting"],
      social: {
        github: "#",
        linkedin: "#",
        email: "meera@revaidc.com"
      }
    },
     {
      name: "Somesh Talligeri",
      role: "Core Member",
      image: "/somesh.jpeg",
      bio: "Managing team operations with precision and integrity.",
      skills: [ "Budgeting", "Accounting"],
      social: {
        github: "#",
        linkedin: "#",
        email: "meera@revaidc.com"
      }
    },
     {
      name: "Faisal Attar",
      role: "Core Memeber",
      image: "/faisal.jpeg",
      bio: "Event manager",
      skills: [ "Budgeting", "Accounting"],
      social: {
        github: "#",
        linkedin: "#",
        email: "meera@revaidc.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-green-400">Leaders</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our passionate leadership team drives innovation and fosters a collaborative learning environment.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-400/20 group-hover:border-green-400/40 transition-all duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-black" />
                  </div>
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-green-400 font-medium mb-3">{leader.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{leader.bio}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {leader.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  <a href={leader.social.github} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={leader.social.linkedin} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${leader.social.email}`} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Team */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Core <span className="text-green-400">Team</span>
          </h3>
          <p className="text-gray-300">Dedicated individuals who make everything possible</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreTeam.map((member, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-400/20 group-hover:border-green-400/40 transition-all duration-300"
                  />
                </div>
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-green-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  <a href={member.social.github} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={member.social.linkedin} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-400 hover:text-black transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-full border border-green-400/40">
            <span className="text-white font-medium">Want to join our team? </span>
            <button className="ml-2 text-green-400 hover:text-green-300 font-semibold underline ">
               <a href="https://forms.gle/N3ZwvurapKLVFy2u6" target="_blank" rel="noopener noreferrer">
              Get in touch
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
