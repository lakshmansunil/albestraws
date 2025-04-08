// Importing dependencies
import { motion } from "framer-motion";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css"; // AOS CSS import for animation
import logo from '../assets/images/logo.png';

// Hero Section Component
export default function HeroSection() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, delay: 20 });
  }, []);

  return (
    <div className="relative min-h-[700px] w-full flex items-center bg-black overflow-hidden px-8 md:px-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#060b22] to-[#020617] opacity-95"></div>

      {/* Floating Animated Blobs */}
      <motion.div
        className="absolute top-12 left-16 w-56 h-56 bg-[#1a237e] rounded-full opacity-30 blur-3xl"
        animate={{ scale: [1, 1.5, 1], x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-16 right-10 w-72 h-72 bg-[#0d47a1] rounded-full opacity-30 blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gray-300 rounded-full opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: Math.random() * 4 + 2, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* Left-Aligned Content and Image in the Same Line */}
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Main Heading and Text */}
        <div className="text-left max-w-2xl">
          <h1
            className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-6 tracking-wide"
            data-aos="fade-right"
          >
            Empowering Businesses with
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Right Talent
            </span>
          </h1>

          

          {/* CTA Button */}
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-[#0d47a1] to-[#1a237e] hover:from-[#0b376b] hover:to-[#101c51] text-white text-lg font-medium px-8 py-4 rounded-full shadow-2xl transition-transform duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-aos="zoom-in"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Logo (In the Same Line) */}
        <motion.img
          src={logo}
          alt="Company Logo"
          className="w-72 h-72 md:w-72 md:h-72 object-contain absolute right-[8%]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}