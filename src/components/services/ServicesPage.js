import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users, Hammer, FileText, Code, BookOpen } from "lucide-react";

const services = [
  {
    title: "HR Services",
    icon: <Users size={50} className="text-blue-600" />,
    description: "Expert solutions for staffing, executive hiring, and HR compliance.",
    link: "/services/service5", 
  },
  {
    title: "Hardware Supplies",
    icon: <Hammer size={50} className="text-yellow-600" />,
    description: "Quality tools, fasteners, and safety gear for your projects.",
    link: "/services/service4", 
  },
  {
    title: "Contract Payroll",
    icon: <FileText size={50} className="text-green-600" />,
    description: "Streamlined payroll management for contractors and temporary staff.",
    link: "/services/service3",
  },
  {
    title: "Software Development",
    icon: <Code size={50} className="text-indigo-600" />,
    description: "Custom software solutions to optimize your business operations.",
    link: "/services/service2", 
  },
  {
    title: "Corporate IT Training Solutions",
    icon: <BookOpen size={50} className="text-purple-600" />,
    description: "Tailored IT training to upskill your team for the digital era.",
    link: "/services/service1", 
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-16 bg-gray-50" data-aos="fade-up">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight"
      >
        Our <span className="text-blue-600">Services</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              to={service.link}
              className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;