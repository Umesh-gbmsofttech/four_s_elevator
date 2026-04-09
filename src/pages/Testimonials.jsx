import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Abraham Paulson",
    role: "Home Owner",
    content: "Recently, we installed a Four S elevator in our home, which has been a great decision. Safety and affordability were our priorities, and they delivered both.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    name: "Nature Amaze",
    role: "Business Owner",
    content: "I find the stylish design of the Four S elevator to be one of its standout features. It adds a modern touch to our building architecture. Highly recommend it!",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    name: "Adithyan S",
    role: "Property Manager",
    content: "The lift works smoothly without any issues. Their service after installation is also great—they always pick up calls and help right away. Very satisfied.",
    rating: 5,
    verified: true
  },
  {
    id: 4,
    name: "Hafsath Hamsa",
    role: "Architect",
    content: "Four S elevators add elegance and charm to any building. It provides a sophisticated appearance at an affordable price compared to other brands.",
    rating: 5,
    verified: true
  },
  {
    id: 5,
    name: "Nidhin J",
    role: "Contractor",
    content: "Last month, I visited a mall where we had the opportunity to use a Four S elevator. Its design and structure were stunning, leaving a lasting impression.",
    rating: 4,
    verified: true
  },
  {
    id: 6,
    name: "Sruthi Jayaram",
    role: "Residential Client",
    content: "Trusting a Government approved elevator company was crucial for our project, and Four S Elevators delivered flawlessly. Seamless experience.",
    rating: 5,
    verified: true
  }
];

const Testimonials = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
          >
            <Star size={14} fill="currentColor" />
            315+ Google Reviews
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900"
          >
            TESTIMONIALS
          </motion.h1>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg">
            Hear from our satisfied clients across Pune who have experienced the Four S difference in vertical transportation.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < item.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-200"} 
                    />
                  ))}
                </div>
                <Quote className="text-gray-100 group-hover:text-yellow-100 transition-colors" size={40} />
              </div>

              <p className="text-gray-700 leading-relaxed mb-8 italic">
                "{item.content}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-black text-black text-xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 leading-none mb-1">{item.name}</h4>
                    <span className="text-xs text-gray-500 font-medium">{item.role}</span>
                  </div>
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                    <CheckCircle size={10} />
                    VERIFIED
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Box */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 bg-gray-900 rounded-[3rem] p-12 text-center text-white"
        >
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Be Our Next Satisfied Client</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join hundreds of building owners who trust Four S Elevators for safety and style.</p>
          <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-yellow-400 transition-colors">
            Leave a Review
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;