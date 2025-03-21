import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const Home = () => (
  <div>
    <Hero
      title="Welcome to Trust"
      subtitle="Building a future you can rely on with integrity and innovation."
    />
    <section className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p>To provide reliable solutions that empower communities and businesses.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p>A world where trust drives progress and sustainability.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p>Integrity, innovation, and excellence in everything we do.</p>
        </div>
      </motion.div>
    </section>
  </div>
);

export default Home;