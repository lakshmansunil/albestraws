import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Users, 
  Briefcase, 
  ShieldCheck, 
  ClipboardList,
  UserCheck,
  FileText,
  ArrowRight
} from "lucide-react";

// Import video files
import fastStaffingVideo from "../../Resources/Service1/fast-staffing.mp4";
import qualityCandidatesVideo from "../../Resources/Service1/quality-candidates.mp4";
import tailoredSolutionsVideo from "../../Resources/Service1/tailored-solutions.mp4";

const services = [
  {
    title: "Staffing Solutions",
    icon: <Users size={50} className="text-blue-600" />,
    description: "Temporary, contract, and permanent placements"
  },
  {
    title: "Executive Search",
    icon: <Briefcase size={50} className="text-green-600" />,
    description: "Finding top leadership talent"
  },
  {
    title: "HR Outsourcing",
    icon: <ShieldCheck size={50} className="text-red-600" />,
    description: "Payroll, compliance, and workforce management"
  },
  {
    title: "Industry-Specific Hiring",
    icon: <ClipboardList size={50} className="text-purple-600" />,
    description: "Expertise in healthcare, IT, construction, and more"
  }
];

const whyChooseUs = [
  {
    title: "Fast & Reliable Staffing",
    description: "Quick turnaround to meet your business needs",
    video: fastStaffingVideo
  },
  {
    title: "Quality Candidates",
    description: "Rigorous screening for top talent",
    video: qualityCandidatesVideo
  },
  {
    title: "Tailored Solutions",
    description: "Customized recruitment strategies for your business",
    video: tailoredSolutionsVideo
  }
];

const Service1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-back",
      offset: 120,
    });
  }, []);

  return (
    <div className="py-16 bg-gray-50">
      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
          Empowering Businesses with the <span className="text-blue-600">Right Talent</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We specialize in providing top-tier human resource solutions to businesses across various industries.
        </p>
      </motion.div>

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h3>
          <p className="text-lg text-gray-600">
            Whether you need temporary staff, permanent hires, or outsourced HR services, we ensure you get the right people at the right time.
          </p>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white p-8 rounded-2xl shadow-lg flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-5 flex justify-center" aria-hidden="true">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
            <p className="text-gray-600 text-base text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section with Videos */}
      <div className="mt-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Why <span className="text-blue-600">Choose Us?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                damping: 10,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative overflow-hidden rounded-xl shadow-lg bg-white group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-white flex items-center justify-center p-4">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto max-h-full object-contain"
                  onError={(e) => console.log(`Video error: ${e.target.error}`)}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dual CTA Section */}
      <div className="mt-20 grid md:grid-cols-2 gap-8 px-6 md:px-12">
        {/* For Job Seekers */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-600 p-8 rounded-xl shadow-lg text-white"
        >
          <div className="flex items-center mb-4">
            <FileText size={40} className="mr-4" />
            <h3 className="text-2xl font-bold">For Job Seekers</h3>
          </div>
          <p className="mb-6">Looking for your next career move? Submit your resume today and explore exciting opportunities with top companies.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
            Submit Resume <ArrowRight className="ml-2" />
          </button>
        </motion.div>

        {/* For Employers */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
        >
          <div className="flex items-center mb-4">
            <UserCheck size={40} className="mr-4 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-800">For Employers</h3>
          </div>
          <p className="mb-6 text-gray-600">Need skilled professionals? We make hiring simple, efficient, and hassle-free.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
            Discuss Staffing Needs <ArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div
        className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 text-center shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">📞 Contact Us Today!</h3>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600">
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            <span>[Your Location]</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📧</span>
            <span>[Your Email]</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">☎</span>
            <span>[Your Phone]</span>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default Service1;