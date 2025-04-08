import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCloud, FaRobot, FaLock, FaDatabase } from "react-icons/fa";
import logo from '../src/assets/images/logo.png';

// Service Card Component
const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-12 w-[500px] h-[500px] flex flex-col justify-between items-center text-center border-t-4 border-blue-500 transition-all transform hover:scale-105 hover:shadow-2xl"
      data-aos="fade-up"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-4xl font-bold text-gray-900">{title}</h3>
      <p className="text-lg text-gray-700 px-6">{description}</p>
      <motion.button
        className="mt-6 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold rounded-lg shadow-md hover:scale-110 transition-transform duration-300 hover:shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More →
      </motion.button>
    </motion.div>
  );
};

// Services Data
const services = [
  {
    title: "Cloud Engineering",
    description:
      "Our cloud solutions are tailored for scalability, security, and cost efficiency. We analyze your needs, craft custom strategies, and ensure seamless cloud-native innovation.",
    icon: <FaCloud className="text-blue-600 text-[120px]" />,
  },
  {
    title: "GenAI",
    description:
      "Harness AI-driven insights with our cutting-edge GenAI solutions. We help businesses integrate ethical, adaptable, and intelligent AI for strategic advantage.",
    icon: <FaRobot className="text-purple-600 text-[120px]" />,
  },
  {
    title: "Cyber Security",
    description:
      "Secure your digital assets with our advanced cybersecurity solutions. We provide proactive protection, penetration testing, and real-time threat intelligence.",
    icon: <FaLock className="text-red-600 text-[120px]" />,
  },
  {
    title: "Data Privacy",
    description:
      "Ensure compliance and secure governance with our privacy frameworks. We build transparent systems for trust and efficient data management.",
    icon: <FaDatabase className="text-green-600 text-[120px]" />,
  },
];

// Services Page Component
export default function ServicesPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false, delay: 20 });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
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

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* Text Content */}
          <div className="text-left max-w-2xl">
            <h1
              className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-6 tracking-wide"
              data-aos="fade-right"
            >
              Empower Your Business with{" "}
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Next-Gen Innovation
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-gray-400 mb-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Experience AI-driven automation, precision analytics, and seamless integration. Stay ahead of the competition.
            </p>

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

          {/* Floating Logo */}
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

      {/* Services Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Explore Our Cutting-Edge Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
