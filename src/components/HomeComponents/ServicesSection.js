import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Headset,
  FileText,
  DollarSign,
  Briefcase,
  Monitor,
} from "lucide-react";

const services = [
  {
    title: "Development",
    icon: <Code size={50} className="text-blue-600" />,
    points: [
      "Custom software tailored to business needs.",
      "Web and mobile application development.",
      "Integration with modern frameworks and APIs.",
      "Scalable and high-performance architecture.",
    ],
  },
  {
    title: "Support",
    icon: <Headset size={50} className="text-green-600" />,
    points: [
      "Technical guidance and project assistance.",
      "Expert mentorship for development teams.",
      "Code reviews and debugging support.",
      "Assistance in meeting project deadlines.",
    ],
  },
  {
    title: "Contract Services",
    icon: <FileText size={50} className="text-yellow-600" />,
    points: [
      "Flexible short-term and long-term contracts.",
      "Experienced IT professionals for hire.",
      "Compliance with legal and industry standards.",
      "Seamless integration with existing teams.",
    ],
  },
  {
    title: "Payroll Management",
    icon: <DollarSign size={50} className="text-red-600" />,
    points: [
      "Automated payroll processing with accuracy.",
      "Compliance with tax regulations and reporting.",
      "Integration with HR and accounting systems.",
      "Timely salary disbursement and record keeping.",
    ],
  },
  {
    title: "Freelancing Services",
    icon: <Briefcase size={50} className="text-purple-600" />,
    points: [
      "Skilled freelance developers for projects.",
      "Cost-effective solutions for startups and SMEs.",
      "Expertise across multiple domains and technologies.",
      "Flexible and scalable workforce solutions.",
    ],
  },
  {
    title: "Hardware Supply",
    icon: <Monitor size={50} className="text-gray-600" />,
    points: [
      "Supply of IT hardware for enterprises.",
      "Support for procurement and installation.",
      "Bulk order discounts and warranty services.",
      "Hardware repair and upgrade solutions.",
    ],
  },
];

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // Ensures animations happen only once
  }, []);

  return (
    <div className="py-16 bg-gray-50" data-aos="fade-up">
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight"
        data-aos="fade-up"
      >
        Explore Our <span className="text-blue-600">Expert Services</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }} // Ensures animation triggers only once when in view
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <div className="mb-4" data-aos="zoom-in">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <ul className="text-gray-600 space-y-2">
              {service.points.map((point, i) => (
                <li key={i} className="text-lg " data-aos="fade-up">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
