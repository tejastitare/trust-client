import React from 'react';
import Hero from '../components/Hero';

const About = () => (
  <div>
    <Hero
      title="About Trust"
      subtitle="Learn more about our journey and commitment to excellence."
    />
    <section className="container mx-auto py-12 px-4">
      <p className="text-lg leading-relaxed">
        Trust was founded with a simple goal: to create solutions that people can depend on. Over the years, we've grown into a team of innovators dedicated to making a positive impact through technology, community engagement, and sustainable practices.
      </p>
    </section>
  </div>
);

export default About;