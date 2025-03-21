import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Services = () => (
  <div>
    <Hero
      title="Our Services"
      subtitle="Discover how we can support your needs with top-tier solutions."
    />
    <section className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Consulting</h3>
          <p>Expert advice to help your business thrive.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Development</h3>
          <p>Custom software solutions tailored to your needs.</p>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Services;