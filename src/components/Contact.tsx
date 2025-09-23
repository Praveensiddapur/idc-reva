import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'idc.reva@gmail.com',
      description: 'Send us your queries anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+91 9741640724',
      description: 'Available during office hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'REVA University, Bangalore',
      description: 'Rukmini Knowledge Park, Kattigenahalli'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: 10:00 AM - 2:00 PM'
    }
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/revaidc', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/revaidc', color: 'hover:text-blue-400' },
    { name: 'Twitter', url: 'https://twitter.com/revaidc', color: 'hover:text-blue-300' },
    { name: 'GitHub', url: 'https://github.com/revaidc', color: 'hover:text-gray-300' },
    { name: 'Discord', url: 'https://discord.gg/revaidc', color: 'hover:text-purple-400' },
    { name: 'YouTube', url: 'https://youtube.com/@revaidc', color: 'hover:text-red-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our events or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-green-400/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Thank you!</h4>
                <p className="text-gray-300">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-green-400/20 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="idc.reva@gmail.com"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-green-400/20 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-green-400/20 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="event-inquiry">Event Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="membership">Membership</option>
                    <option value="general">General Question</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-green-400/20 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your inquiry or message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-400 to-green-500 text-black font-semibold py-4 rounded-lg hover:from-green-500 hover:to-green-600 transition-all duration-300 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-900/50 rounded-xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-green-400 font-medium mb-1">{item.info}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-green-400/20">
                <p className="text-gray-300 mb-4">Stay connected with us on social media for the latest updates and event announcements.</p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3 bg-gray-800/50 rounded-lg text-gray-300 font-medium transition-all duration-300 hover:bg-gray-700/50 ${link.color} group`}
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map or Additional Info */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-green-400/20">
              <h4 className="text-white font-semibold mb-3">Find Us on Campus</h4>
              <p className="text-gray-300 text-sm mb-4">
                REVA IDC is located in the main CSE SV Block.
                
              </p>
              <div className="bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg p-4 border border-green-400/30">
                <p className="text-green-400 font-medium text-sm">
                  <strong>Club Room:</strong> G7 lab, Room 304<br />
                  <strong>Regular Hours:</strong> Monday to Friday, 2:00 PM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;