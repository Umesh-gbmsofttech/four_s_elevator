import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[url('https://aaronelevators.in/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-24-at-10.10.18-723x1024.jpeg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Best Elevators in Pune
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl max-w-2xl mx-auto mb-8"
        >
          Experience accessibility and convenience in vertical transportation with Four S Elevators.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold"
        >
          Explore Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;