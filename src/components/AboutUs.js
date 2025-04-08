import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 bg-white text-gray-800 px-6 md:px-12" data-aos="fade-up">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-6 text-blue-600 tracking-tight"
      >
        Who We Are
      </motion.h2>

      <p className="text-lg text-center max-w-4xl mx-auto mb-8" data-aos="fade-up">
        We specialize in providing top-tier human resource solutions to businesses across various industries.
        Whether you need temporary staff, permanent hires, or outsourced HR services, we ensure you get the
        right people at the right time. Our mission is to empower businesses with the best talent available.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          className="bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To connect businesses with top talent efficiently, ensuring long-term success and mutual growth.
          </p>
        </motion.div>

        <motion.div
          className="bg-green-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-semibold text-green-600 mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To be a global leader in HR solutions, fostering strong business relationships and career success.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
