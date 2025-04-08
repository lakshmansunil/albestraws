import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, Cpu, Cloud, Network, 
  Settings, BarChart2, CalendarCheck, ClipboardList, Database,
  Cable, GitBranch, ShieldCheck, Activity
} from 'lucide-react';

const DataCenter = () => {
  const services = [
    {
      title: "Infrastructure Design & Deployment",
      description: "We help build your IT foundation with robust infrastructure planning and seamless deployment. Whether setting up new systems or upgrading existing ones, we ensure your architecture is scalable and reliable.",
      icon: <Server className="text-sky-600 w-8 h-8" />,
      pointsTitle: "Key Capabilities:",
      points: [
        "Server & storage configuration",
        "Rack and cabling layout",
        "Environment setup (power, cooling, security)"
      ],
      iconComponent: <Cable className="w-5 h-5 text-sky-500 mr-2" />
    },
    {
      title: "Data Center Services",
      description: "Optimize your data center with our end-to-end support — from setup to modernization. We work closely with you to ensure availability, efficiency, and compliance.",
      icon: <Database className="text-sky-600 w-8 h-8" />,
      pointsTitle: "What We Offer:",
      points: [
        "On-premise & co-location setup",
        "Migration & transformation support",
        "Monitoring and capacity planning"
      ],
      iconComponent: <Activity className="w-5 h-5 text-sky-500 mr-2" />
    },
    {
      title: "Cloud Integration & Management",
      description: "Accelerate your cloud journey with expert guidance and operational excellence. We help you plan, migrate, and manage cloud environments for agility and performance.",
      icon: <Cloud className="text-sky-600 w-8 h-8" />,
      pointsTitle: "Specializations:",
      points: [
        "Public, private, and hybrid cloud solutions",
        "Workload migration & configuration",
        "Ongoing cloud monitoring and cost control"
      ],
      iconComponent: <GitBranch className="w-5 h-5 text-sky-500 mr-2" />
    },
    {
      title: "Network Infrastructure & Security",
      description: "A secure, high-performance network is the backbone of your operations. We design, implement, and safeguard your network to ensure secure and uninterrupted connectivity.",
      icon: <Network className="text-sky-600 w-8 h-8" />,
      pointsTitle: "Highlights:",
      points: [
        "Network design (LAN, WAN, VPN)",
        "Firewall & access control systems",
        "Proactive threat detection"
      ],
      iconComponent: <ShieldCheck className="w-5 h-5 text-sky-500 mr-2" />
    },
    {
      title: "Managed IT Operations",
      description: "Focus on your business while we manage your technology. Our managed services ensure systems are always up-to-date, secure, and performing at their best.",
      icon: <Settings className="text-sky-600 w-8 h-8" />,
      pointsTitle: "Our Coverage Includes:",
      points: [
        "24/7 system monitoring & support",
        "Patch and update management",
        "IT health checks & reporting"
      ],
      iconComponent: <Cpu className="w-5 h-5 text-sky-500 mr-2" />
    },
    {
      title: "Strategic IT Consulting",
      description: "Make informed technology decisions with confidence. We offer expert consulting to align your IT investments with long-term business goals.",
      icon: <ClipboardList className="text-sky-600 w-8 h-8" />,
      pointsTitle: "Consulting Focus Areas:",
      points: [
        "Infrastructure planning & audits",
        "Disaster recovery strategies",
        "Vendor & asset management"
      ],
      iconComponent: <BarChart2 className="w-5 h-5 text-sky-500 mr-2" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen"
    >
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Data Center Solutions
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-sky-200">
              We deliver tailored IT infrastructure and service solutions to help organizations operate securely, efficiently, and at scale.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:border-sky-300 transition-all duration-300 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-xl bg-sky-50 group-hover:bg-sky-100 transition-colors duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <h2 className="ml-4 text-xl font-bold text-gray-800 mt-1">{service.title}</h2>
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                    {service.iconComponent}
                    {service.pointsTitle}
                  </h3>
                  
                  <ul className="space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative bg-sky-700 py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-white mb-6"
          >
            Ready to Transform Your Infrastructure?
          </motion.h2>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-sky-100 max-w-3xl mx-auto mb-8"
          >
            Our experts are ready to discuss your data center needs and provide customized solutions.
          </motion.p>
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-white text-sky-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 inline-flex items-center transform hover:-translate-y-1">
              <CalendarCheck className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DataCenter;