import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Divyakratnti Sushikshit Berojgar Seva Shakari Sanshtha</Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-300 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-300 transition">About</Link>
          <Link to="/services" className="hover:text-blue-300 transition">Services</Link>
          <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden mt-2 space-y-2"
        >
          <Link to="/" className="block hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="block hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="block hover:text-blue-300 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;