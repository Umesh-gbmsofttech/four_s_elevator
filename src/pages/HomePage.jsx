import React from 'react';
import Hero from './Hero';
import { motion } from 'framer-motion';

const HomePage = () => (
  <main className="home-page">
    <Hero />
    <section className="py-20 px-6 text-center bg-white">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Pune's Trusted Lift Partner</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          From residential villas to commercial hubs, we provide the most advanced vertical 
          transportation solutions with a focus on safety and style.
        </p>
      </motion.div>
    </section>
  </main>
);

export default HomePage;