'use client';

import { useEffect, useRef } from 'react';
import { animateContact } from '@/utils/animations';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    animateContact(contactRef);
  }, []);

  return (
    <section ref={contactRef} className="w-full py-20 bg-gradient-to-br from-white to-blue-50 relative">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-zinc-800">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="contact-content bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-zinc-800">Contact Information</h3>
            <p className="text-zinc-600 mb-8">We'd love to hear from you. Fill out the form or contact us using the information below.</p>
            
            {[
              { icon: <FaMapMarkerAlt />, title: "Our Location", content: "123 Business Street, New York, NY 10001" },
              { icon: <FaPhone />, title: "Phone Number", content: "+1 (555) 123-4567" },
              { icon: <FaEnvelope />, title: "Email Address", content: "info@yourcompany.com" }
            ].map((item, index) => (
              <div key={index} className="flex items-start mb-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className="mr-4 p-3 bg-blue-100/80 backdrop-blur-sm rounded-lg text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-zinc-800">{item.title}</h4>
                  <p className="text-zinc-600">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="contact-form bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-zinc-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-zinc-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-zinc-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-zinc-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full px-4 py-2 bg-white/50 backdrop-blur-sm border border-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}