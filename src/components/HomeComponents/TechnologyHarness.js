import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FaChartLine, FaShieldAlt, FaCloudUploadAlt } from "react-icons/fa";

const services = [
  {
    title: "ANALYZE",
    icon: <FaChartLine className="text-blue-500" />,
    points: [
      "Risk & Compliance Evaluation",
      "Gap Analysis",
      "Current State Assessment",
      "Visualization Process",
      "AI-powered Insights",
    ],
    bg: "from-blue-50 to-white",
    shadow: "shadow-blue-300",
  },
  {
    title: "FORTIFY",
    icon: <FaShieldAlt className="text-red-500" />,
    points: [
      "Cyber Sentinels",
      "Disaster-Proof Operations",
      "Protection & Governance",
      "Access Control Granularity",
      "Continuous Monitoring & Auditing",
    ],
    bg: "from-red-50 to-white",
    shadow: "shadow-red-300",
  },
  {
    title: "SCALE",
    icon: <FaCloudUploadAlt className="text-green-500" />,
    points: [
      "Cloud-Based Agility",
      "Data-Driven Optimization",
      "Seamless Integrations",
      "Real-Time Intelligence",
      "Automation Engines",
    ],
    bg: "from-green-50 to-white",
    shadow: "shadow-green-300",
  },
];

const TechnologyHarness = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-8 flex justify-center items-center">
      <div className="max-w-screen-xl w-full">
        <h2 className="text-4xl font-extrabold mb-12 text-left text-gray-900">
          We <span className="text-blue-600">HARNESS</span> the power of technology to
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              className={`relative bg-gradient-to-br ${service.bg} ${service.shadow} rounded-xl w-[320px] h-[380px] p-8 flex flex-col items-center justify-between border border-gray-200 backdrop-blur-md transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="absolute -top-8 flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-full">
                <div className="text-5xl">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mt-12">{service.title}</h3>
              <ul className="mt-4 text-gray-700 space-y-3 text-sm text-center">
                {service.points.map((point, idx) => (
                  <li key={idx} className="p-2 rounded-md shadow-sm hover:bg-gray-100 transition duration-200">
                    {point}
                  </li>
                ))}
              </ul>
             
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyHarness;
