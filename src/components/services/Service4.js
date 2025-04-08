import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Cloud,
  Cpu,
  Bug,
  ShieldCheck,
  Users,
  HeartPulse,
  ShoppingCart,
  Landmark,
  BookOpen,
  Factory,
  Home,
  Truck,
} from "lucide-react";

// Import local .mp4 files (adjust paths as needed)
import experiencedTeamVideo from "../../Resources/Service4/experience.mp4";
import agileMethodologyVideo from "../../Resources/Service4/agile.mp4";
import scalableSolutionsVideo from "../../Resources/Service4/scalable.mp4";
import userCentricDesignVideo from "../../Resources/Service4/user.mp4";
import costEffectiveVideo from "../../Resources/Service4/cost.mp4";

const services = [
  {
    title: "Custom Software Development",
    icon: <Code size={50} className="text-blue-600" />,
    description: "We build fully customized software solutions to meet the unique requirements of your business. From CRM systems to inventory management, our solutions are crafted to improve your business operations."
  },
  {
    title: "Web Application Development",
    icon: <Cpu size={50} className="text-green-600" />,
    description: "Our team develops robust and scalable web applications, using the latest technologies to ensure high performance, security, and a great user experience. Whether it's a complex web portal or a simple content management system, we deliver the best results."
  },
  {
    title: "Mobile App Development",
    icon: <Users size={50} className="text-purple-600" />,
    description: "Reach your customers on the go with mobile apps that work seamlessly across iOS and Android platforms. Our mobile app solutions are designed for speed, usability, and functionality."
  },
  {
    title: "Enterprise Solutions",
    icon: <ShieldCheck size={50} className="text-red-600" />,
    description: "From ERP systems to business intelligence solutions, we help enterprises streamline their operations, manage resources, and gain insights into their business performance. Our solutions are scalable and can grow with your business."
  },
  {
    title: "Cloud Solutions",
    icon: <Cloud size={50} className="text-indigo-600" />,
    description: "We help businesses leverage the power of the cloud with scalable, secure, and cost-effective cloud solutions. From cloud migration to developing cloud-based applications, we provide seamless integration with your existing systems."
  },
  {
    title: "Software Testing & QA",
    icon: <Bug size={50} className="text-yellow-600" />,
    description: "Our dedicated quality assurance team ensures that your software is bug-free, secure, and performs as expected. We conduct manual and automated testing for all types of software applications."
  }
];

const whyChooseUs = [
  {
    title: "Experienced Development Team",
    description: "Our team of certified developers, designers, and engineers has years of experience in delivering custom software solutions across different industries. We're committed to providing you with the best software to meet your needs.",
    color: "bg-blue-100",
    video: experiencedTeamVideo, 
  },
  {
    title: "Agile Methodology",
    description: "We follow agile development principles to ensure flexibility and timely delivery. With frequent updates and continuous collaboration, we guarantee that your project will stay on track and within budget.",
    color: "bg-green-100",
    video: agileMethodologyVideo,
  },
  {
    title: "Scalable Solutions",
    description: "We build software that grows with you. Our solutions are designed to scale and adapt as your business evolves, ensuring that you are always ahead of the curve.",
    color: "bg-indigo-100",
    video: scalableSolutionsVideo,
  },
  {
    title: "Focus on User Experience (UX)",
    description: "We prioritize user experience in every project. Our goal is to create intuitive, user-friendly applications that drive engagement and improve customer satisfaction.",
    color: "bg-yellow-100",
    video: userCentricDesignVideo,
  },
  {
    title: "Cost-Effective & Timely Delivery",
    description: "We understand the importance of cost-efficiency and timely delivery. Our solutions are built to meet your budget, and we work hard to deliver projects on time, without compromising quality.",
    color: "bg-red-100",
    video: costEffectiveVideo,
  }
];

const industries = [
  { title: "Healthcare", icon: <HeartPulse size={40} className="text-pink-600" /> },
  { title: "Retail & E-commerce", icon: <ShoppingCart size={40} className="text-blue-600" /> },
  { title: "Finance & Banking", icon: <Landmark size={40} className="text-green-600" /> },
  { title: "Education", icon: <BookOpen size={40} className="text-purple-600" /> },
  { title: "Manufacturing", icon: <Factory size={40} className="text-orange-600" /> },
  { title: "Real Estate", icon: <Home size={40} className="text-red-600" /> },
  { title: "Logistics & Supply Chain", icon: <Truck size={40} className="text-indigo-600" /> },
];

const processSteps = [
  {
    title: "Consultation & Requirement Analysis",
    description: "We begin by understanding your business goals and objectives to create a roadmap for success. Through consultations, we define your software requirements and set clear project milestones."
  },
  {
    title: "Design & Prototyping",
    description: "Our design team creates detailed mockups and prototypes to visualize the end product. This phase ensures we capture your vision and expectations."
  },
  {
    title: "Development & Coding",
    description: "Our skilled developers use the latest technologies to build the software. We follow best practices and agile methods to ensure quality, scalability, and security."
  },
  {
    title: "Quality Assurance & Testing",
    description: "We rigorously test the software to ensure it meets all specifications, is bug-free, and performs flawlessly under real-world conditions."
  },
  {
    title: "Deployment & Maintenance",
    description: "Once the software is ready, we assist with deployment. After launch, we provide continuous support and maintenance to ensure smooth operation and scalability."
  }
];

const testimonials = [
  {
    quote: "The team helped us streamline our operations with a custom ERP solution. The project was completed on time, and we've seen a significant improvement in efficiency!",
    author: "John D., CEO of TechCorp"
  },
  {
    quote: "Our mobile app was developed with great attention to detail, and our users love the intuitive interface. We're already seeing a surge in downloads!",
    author: "Emily R., Marketing Director of FoodiesApp"
  }
];

const Service4 = () => {
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
      <style>
        {`
          .blue-bullets li::marker {
            color: #2563eb; /* Matches Tailwind's blue-600 */
          }
        `}
      </style>

      {/* Main Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight mb-4">
          Custom <span className="text-blue-600">Software Development</span> Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform Your Ideas into Powerful Software Solutions
        </p>
      </motion.div>

      {/* Introduction Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md"
        >
          <p className="text-lg text-gray-600 mb-6">
            At [Your Company Name], we specialize in creating custom software applications tailored to your business needs. Our end-to-end development process ensures that you get innovative, scalable, and efficient solutions that drive growth and improve operations. Whether you need a web application, mobile app, or enterprise solution, we are here to help you build it.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Expertise</h3>
          <p className="text-lg text-gray-600">
            We offer a wide range of software development services designed to bring your vision to life:
          </p>
        </motion.div>
      </div>

      {/* Services Section */}
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
            <p className="text-gray-600 text-base">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  onError={() => console.log(`Failed to load video: ${item.video}`)}
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

      {/* Our Process Section */}
      <div className="mt-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Our <span className="text-blue-600">Process</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
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
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="mt-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Industries We <span className="text-blue-600">Serve</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                  },
                },
              }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-3 hover:shadow-lg transition-all">
                {industry.icon}
              </div>
              <p className="text-center font-medium text-gray-700">{industry.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          What Our <span className="text-blue-600">Clients Say</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800">{testimonial.author.split(",")[0]}</p>
                  <p className="text-gray-500 text-sm">{testimonial.author.split(",")[1]}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <motion.div
        className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 text-center shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Get In Touch</h3>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Ready to bring your software vision to life? Contact us for a free consultation and get started on your custom software solution today!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Contact Us
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Request a Quote
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Service4;