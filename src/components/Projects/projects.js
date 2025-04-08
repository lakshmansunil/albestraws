import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ImageDemorpher from '../../assets/images/products/Image-Demorpher.webp'
import MobileSecurity from '../../assets/images/products/Enhancing-Mobile-Security.webp'
import BlockBasedCoding from '../../assets/images/products/Block-Based-Coding.webp'
import SmartWeighing from '../../assets/images/products/IoT-Based-Smart-Weighing-System.webp'
import PocketPlus from '../../assets/images/products/Pocket-Plus-ID.webp'

const ProjectCard = ({ title, description, image, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-72 rounded-lg shadow-lg overflow-hidden cursor-pointer duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ height: '200px' }}
        animate={{ height: isHovered ? '100px' : '200px' }}
        transition={{ duration: 0.3 }}
        className=" relative overflow-hidden"
      >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <p className="text-white text-lg font-bold">View Details</p>
        </motion.div>
      </motion.div>
      <div className="p-6">
        <motion.h3
          className="text-xl font-bold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchedProjects = [
      {
        title: "Image Demorpher",
        description: "An image demorpher is a tool or algorithm that reverses the process of morphing by reconstructing the original images from a morphed or blended version. It works by identifying key transformation patterns and reverting them to retrieve the input images.",
        image: ImageDemorpher
      },
      {
        title: "Enhancing Mobile Security with an Automated SIM Slot Ejection System and Authentication Mechanism",
        description: "Enhancing mobile security with an automated SIM slot ejection system involves integrating a mechanism that ejects the SIM card when unauthorized access is detected. Coupled with an authentication system, this approach ensures secure SIM usage and prevents tampering or theft of mobile data.",
        image: MobileSecurity
      },
      {
        title: "IoT Based Smart Weighing System",
        description: "An IoT-based smart weighing system integrates sensors with internet connectivity to provide real-time weight measurements. It enables remote monitoring, data analysis, and automation for enhanced efficiency in industries.",
        image:SmartWeighing
      },
      {
        title: "Block-Based Coding for MA35H0 ARM Cortex-A35 Platform",
        description: "We are developing a block-based coding software for the MA35H0 ARM Cortex-A35 platform, designed to simplify programming for our PCB. The software features an intuitive drag-and-drop interface and supports C, C++, and Python, making it versatile for both educational and commercial applications",
        image:BlockBasedCoding
      },
      {
        title: "Pocket Plus ID",
        description: "Pocket Plus ID is a compact, digital identification solution that securely stores personal IDs, payment methods, and credentials on a mobile device. It enhances convenience and security by allowing easy access to essential information through encryption and biometric authentication.",
        image: PocketPlus
      }
    ];
    setProjects(fetchedProjects);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Our Innovative Projects
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-600 mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At our startup, we're passionate about pushing the boundaries of technology. 
          Our team has successfully completed a diverse range of projects, 
          from machine learning applications to IoT solutions and mobile security enhancements. 
          Each project represents our commitment to innovation and our ability to tackle complex challenges.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} onClick={() => setSelectedProject(project)}>
              <ProjectCard {...project} index={index} />
            </div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover mb-4 rounded" />
              <p className="text-gray-600">{selectedProject.description}</p>
              <button
                className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition-colors duration-300"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;