import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo.png"; // Adjust as needed
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { FaLightbulb, FaUsers, FaBalanceScale, FaRocket, FaHandshake } from "react-icons/fa";

const values = [
  {
    title: "Burning Bright",
    icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
    description: "Passion fuels everything we do. We celebrate curiosity, creativity, and innovation to empower our people.",
  },
  {
    title: "Building a Better Tomorrow, Together",
    icon: <FaUsers className="text-blue-500 text-4xl" />,
    description: "We foster an inclusive culture where everyone is valued and respected, ensuring a brighter future for all.",
  },
  {
    title: "Integrity: Our Guiding Light",
    icon: <FaBalanceScale className="text-green-500 text-4xl" />,
    description: "We operate with honesty, transparency, and fairness in everything we do, building trust every step of the way.",
  },
  {
    title: "Diversity: Our Superpower",
    icon: <FaRocket className="text-purple-500 text-4xl" />,
    description: "Different perspectives drive our creativity, innovation, and meaningful connections.",
  },
  {
    title: "Join the St. Fox Tribe",
    icon: <FaHandshake className="text-orange-500 text-4xl" />,
    description: "If you thrive in a passionate, diverse, and values-driven environment, we’d love to have you onboard.",
  },
];

// Hero Section Component
function HeroSection() {
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

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-6 tracking-wide" data-aos="fade-right">
            Crave a Career That <br />
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Sparks Your Soul?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8" data-aos="fade-right" data-aos-delay="300">
            Passion ignites. Growth propels. Join us on the journey of lifelong learning and endless possibilities.
          </p>

          {/* CTA Button */}
          <motion.div className="flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            <motion.button
              className="bg-gradient-to-r from-[#0d47a1] to-[#1a237e] hover:from-[#0b376b] hover:to-[#101c51] text-white text-lg font-medium px-8 py-4 rounded-full shadow-2xl transition-transform duration-300 transform hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-aos="zoom-in"
            >
              Explore Careers
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
  );
}

// Careers Page Component
export default function CareersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection />

      {/* Values Section */}
      <div className="container mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">What We Stand For</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-2xl transition duration-300 text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{value.title}</h3>
                <CardContent>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
