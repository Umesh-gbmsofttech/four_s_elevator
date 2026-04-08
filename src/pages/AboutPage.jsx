import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => (
  <div className="pt-32 pb-20 min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">Our Legacy</span>
          <h1 className="text-6xl font-black mt-2 mb-6 tracking-tight">16+ YEARS OF EXCELLENCE</h1>
          <p className="text-gray-600 leading-loose">
            Four S Elevators started with a mission to redefine mobility in Pune. 
            Today, we are a government-approved manufacturer known for precision engineering 
            and impeccable after-sales service.
          </p>
        </motion.div>
        <div className="rounded-[3rem] overflow-hidden shadow-2xl">
          <img src="https://aaronelevators.in/wp-content/uploads/2023/09/hm.png" alt="About Aaron" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;