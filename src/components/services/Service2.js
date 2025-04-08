import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Hammer, 
  Bolt, 
  HardHat, 
  PaintRoller,
  Warehouse
} from "lucide-react";

// Import video files
import wideSelectionVideo from "../../Resources/Service2/wide-selection.mp4";
import competitivePricingVideo from "../../Resources/Service2/competitive-pricing.mp4";
import fastDeliveryVideo from "../../Resources/Service2/fast-delivery.mp4";
import expertSupportVideo from "../../Resources/Service2/expert-support.mp4";

const services = [
  {
    title: "Hand & Power Tools",
    icon: <Hammer size={50} className="text-blue-600" />,
    description: "Drills, saws, wrenches, screwdrivers, and more"
  },
  {
    title: "Fasteners & Fittings",
    icon: <Bolt size={50} className="text-yellow-600" />,
    description: "Screws, bolts, nuts, and anchors"
  },
  {
    title: "Building Materials",
    icon: <Warehouse size={50} className="text-red-600" />,
    description: "Cement, steel, plumbing & electrical supplies"
  },
  {
    title: "Safety Gear",
    icon: <HardHat size={50} className="text-green-600" />,
    description: "Helmets, gloves, boots, and protective equipment"
  },
  {
    title: "Paint & Accessories",
    icon: <PaintRoller size={50} className="text-purple-600" />,
    description: "Brushes, rollers, and industrial coatings"
  }
];

const whyChooseUs = [
  {
    title: "Wide Selection",
    description: "Top brands and quality products",
    color: "bg-blue-100",
    video: wideSelectionVideo
  },
  {
    title: "Competitive Pricing",
    description: "Affordable rates for bulk and retail buyers",
    color: "bg-green-100",
    video: competitivePricingVideo
  },
  {
    title: "Fast & Reliable Delivery",
    description: "Get your supplies when you need them",
    color: "bg-red-100",
    video: fastDeliveryVideo
  },
  {
    title: "Expert Support",
    description: "Our team helps you find the right tools and materials",
    color: "bg-purple-100",
    video: expertSupportVideo
  }
];

const Service2 = () => {
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
          Your Trusted <span className="text-blue-600">Hardware Supply Partner</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are a leading supplier of high-quality hardware products for construction, industrial, and DIY projects.
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
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About Us</h3>
          <p className="text-lg text-gray-600">
            From hand tools to power equipment, fasteners to building materials, we provide everything you need to get the job done right.
          </p>
        </motion.div>
      </div>

      {/* Products Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Final CTA */}
      <motion.div
        className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 text-center shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Looking for the best hardware supplies for your project? Contact us today!
        </p>
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
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default Service2;