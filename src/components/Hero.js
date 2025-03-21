import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ title, subtitle }) => (
  <section className="bg-blue-800 text-white py-20">
    <div className="container mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export default Hero;