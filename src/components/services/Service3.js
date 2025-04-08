import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Briefcase, 
  ShieldCheck, 
  Users, 
  Calculator, 
  Video, 
  MessageCircle,
  HardHat,
  Cpu,
  HeartPulse,
  Truck,
  Phone,
  Clock,
  DollarSign,
  Download,
  Mail,
  Share2,
  Check
} from "lucide-react";

// Import video files
import complianceVideo from "../../Resources/Service3/compliance.mp4";
import costSavingsVideo from "../../Resources/Service3/cost-savings.mp4";
import securityVideo from "../../Resources/Service3/security.mp4";
import scalableVideo from "../../Resources/Service3/scalable.mp4";

const services = [
  {
    title: "Payroll Processing",
    icon: <Briefcase size={50} className="text-blue-600" />,
    description: "Hassle-free salary disbursement with accurate, on-time payments. We handle secure transaction management so you can focus on your business."
  },
  {
    title: "Tax & Compliance Management",
    icon: <ShieldCheck size={50} className="text-yellow-600" />,
    description: "Statutory deductions, filings & reports with full legal compliance. Automated tax calculations to ensure you meet all requirements."
  },
  {
    title: "Employee Benefits Administration",
    icon: <Users size={50} className="text-red-600" />,
    description: "Health, insurance & retirement plans for contract workers. Easy enrollment & management to keep your team satisfied."
  },
  {
    title: "Timesheet & Attendance Tracking",
    icon: <Clock size={50} className="text-green-600" />,
    description: "Automated monitoring & reporting of work hours. Streamlined payroll processing with accurate time tracking."
  },
  {
    title: "Multi-Industry Payroll Support",
    icon: <Users size={50} className="text-purple-600" />,
    description: "Ideal for contract staff, freelancers & temporary workers across all industries. Custom solutions for your workforce needs."
  }
];

const industries = [
  { 
    title: "Construction & Engineering", 
    icon: <HardHat size={40} className="text-orange-600" />,
    description: "Payroll for project-based workers, site staff & subcontractors"
  },
  { 
    title: "IT & Tech", 
    icon: <Cpu size={40} className="text-blue-600" />,
    description: "Payroll for remote developers, consultants & offshore teams"
  },
  { 
    title: "Healthcare", 
    icon: <HeartPulse size={40} className="text-pink-600" />,
    description: "Payroll for nurses, locum doctors & temporary healthcare workers"
  },
  { 
    title: "Manufacturing & Logistics", 
    icon: <Truck size={40} className="text-indigo-600" />,
    description: "Payroll for seasonal workers & shift-based employees"
  },
  { 
    title: "BPO & Call Centers", 
    icon: <Phone size={40} className="text-green-600" />,
    description: "Payroll for short-term hires & part-time employees"
  }
];

const whyChooseUs = [
  {
    title: "Compliance Guaranteed",
    description: "Stay legally compliant with tax & labor laws",
    color: "bg-blue-100",
    video: complianceVideo
  },
  {
    title: "Cost & Time Savings",
    description: "Reduce HR workload & operational expenses",
    color: "bg-green-100",
    video: costSavingsVideo
  },
  {
    title: "Secure & Confidential",
    description: "Data protection with advanced security measures",
    color: "bg-red-100",
    video: securityVideo
  },
  {
    title: "Scalable Solutions",
    description: "Custom payroll services for businesses of all sizes",
    color: "bg-purple-100",
    video: scalableVideo
  }
];

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$99/month",
    features: ["Payroll processing", "Tax compliance", "Up to 50 employees"],
    bestFor: "Startups",
    icon: <DollarSign size={30} className="text-blue-600" />
  },
  {
    title: "Standard Plan",
    price: "$299/month",
    features: ["Includes Basic features", "Employee benefits", "Attendance tracking", "Up to 200 employees"],
    bestFor: "Growing businesses",
    icon: <Briefcase size={30} className="text-green-600" />
  },
  {
    title: "Enterprise Plan",
    price: "Custom Pricing",
    features: ["All Standard features", "Dedicated support", "Custom reporting", "Unlimited employees"],
    bestFor: "Large enterprises",
    icon: <Users size={30} className="text-purple-600" />
  }
];

const testimonials = [
  {
    quote: "Their payroll system saved us time and eliminated compliance headaches. Highly recommended!",
    author: "James M., CTO of TechSolutions",
    rating: 5
  },
  {
    quote: "Switching to their payroll service was the best decision! Payroll is now seamless, and compliance worries are gone.",
    author: "Sarah T., HR Manager",
    rating: 5
  },
  {
    quote: "Reliable, efficient, and always on time. Our contract workers are happy, and so are we!",
    author: "David R., Operations Director",
    rating: 5
  }
];

const caseStudy = {
  title: "Tech Startup Streamlines Payroll & Compliance",
  client: "A fast-growing IT startup",
  challenge: "Managing payroll for a growing team of 50+ contract developers across multiple locations",
  solution: "We automated payroll processing, ensured tax compliance, and streamlined benefits administration",
  results: [
    "30% reduction in payroll processing time",
    "Zero compliance issues",
    "Increased contractor satisfaction"
  ]
};

const Service3 = () => {
  const [selectedPlan, setSelectedPlan] = useState(1); // Default to Standard plan

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
            color: #2563eb;
          }
          .star-rating span {
            color: #fbbf24;
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
          Seamless & Compliant <span className="text-blue-600">Contract Payroll Services</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Managing payroll for contract workers can be challenging. We provide end-to-end contract payroll solutions, ensuring your workforce gets paid accurately, on time, and in full compliance with labor laws.
        </p>
      </motion.div>

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
            <p className="text-gray-600 text-base text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Industries Section */}
      <div className="mt-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Industry-Specific <span className="text-blue-600">Payroll Solutions</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
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
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
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

      {/* Pricing Plans Section */}
      <div className="mt-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Our <span className="text-blue-600">Pricing Plans</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
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
              className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                selectedPlan === index ? "border-2 border-blue-500 transform scale-105" : ""
              }`}
              onClick={() => setSelectedPlan(index)}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{plan.title}</h3>
              </div>
              <p className="text-3xl font-bold text-center mb-4">{plan.price}</p>
              <p className="text-gray-500 text-center mb-6">Best for {plan.bestFor}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold ${
                  selectedPlan === index
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                } transition-colors`}
              >
                {selectedPlan === index ? "Selected" : "Select Plan"}
              </button>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-600">
          <span className="text-blue-600">Custom solutions available</span> - Contact us for a tailored plan!
        </p>
      </div>

      {/* Case Study Section */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl mx-6 md:mx-12 p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Client Success Story</h3>
              <h4 className="text-xl text-blue-100 mb-2">{caseStudy.title}</h4>

              <div className="mb-4">
                <p className="text-blue-100 font-medium mb-1">Client:</p>
                <p className="text-white">{caseStudy.client}</p>
              </div>

              <div className="mb-4">
                <p className="text-blue-100 font-medium mb-1">Challenge:</p>
                <p className="text-white">{caseStudy.challenge}</p>
              </div>

              <div className="mb-4">
                <p className="text-blue-100 font-medium mb-1">Solution:</p>
                <p className="text-white">{caseStudy.solution}</p>
              </div>

              <div className="mb-4">
                <p className="text-blue-100 font-medium mb-1">Results:</p>
                <ul className="text-white space-y-1">
                  {caseStudy.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-300 mr-2">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Users className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">James M.</p>
                  <p className="text-gray-500">CTO of TechSolutions</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic text-lg mb-4">"{testimonials[0].quote}"</blockquote>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Watch Case Study Video
              </button>
            </div>
          </div>
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Users className="text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author.split(",")[0]}</p>
                  <p className="text-gray-500 text-sm">{testimonial.author.split(",")[1]}</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              {index === 0 && (
                <button className="mt-4 text-blue-600 text-sm font-medium flex items-center">
                  <Video className="mr-2" size={16} />
                  Watch Video Testimonial
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payroll Calculator CTA */}
      <div className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Interactive Payroll Cost Calculator</h3>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Estimate your payroll costs instantly</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Compare plans & optimize your budget</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Get a customized pricing breakdown</span>
              </li>
            </ul>
          </div>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center">
            <Calculator className="mr-2" />
            Calculate Now
          </button>
        </motion.div>
      </div>

      {/* Webinar CTA */}
      <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl mx-6 md:mx-12 p-8 md:p-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Free Upcoming Webinar: Mastering Contract Payroll</h3>
          <p className="text-indigo-100 mb-6">🗓 Join Our Live Webinar on Payroll Best Practices</p>
          <div className="max-w-2xl mx-auto text-left text-white mb-8">
            <p className="mb-4"><span className="font-semibold">Date:</span> [Insert Date] | <span className="font-semibold">Time:</span> [Insert Time]</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">•</span>
                <span>Learn the latest trends in contract payroll management</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">•</span>
                <span>Discover how to automate your payroll for efficiency and accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-300 mr-2">•</span>
                <span>Ask questions in real time to payroll experts</span>
              </li>
            </ul>
          </div>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Sign Up for the Webinar
          </button>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 shadow-xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center">📩 Get Started - Request a Free Payroll Consultation</h3>
          <p className="text-gray-600 mb-8 text-center">👉 Fill out the form below, and our payroll experts will get in touch within 24 hours.</p>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">📝 Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Name" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">📧 Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Email" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">📞 Phone</label>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Contact Number" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">🏢 Company Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Company Name" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">📌 Number of Contract Employees</label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Select range</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-100</option>
                <option>101-500</option>
                <option>500+</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">✉ Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" rows="4" placeholder="Enter Your Inquiry"></textarea>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Free Download CTA */}
      <div className="mt-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mx-6 md:mx-12 p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto"
        >
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">🎁 Free Download: Ultimate Guide to Contract Payroll Management</h3>
            <ul className="text-blue-100 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Learn the best practices for contract payroll compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Discover how to reduce payroll costs & errors</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>Understand the latest labor laws & tax regulations</span>
              </li>
            </ul>
          </div>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center">
            <Download className="mr-2" />
            Download Free Guide
          </button>
        </motion.div>
      </div>

      {/* Live Chat CTA */}
      <div className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 shadow-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={40} className="text-blue-600" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Need Quick Answers? Chat with Us Live!</h3>
          <ul className="text-gray-600 space-y-2 mb-8 max-w-md mx-auto">
            <li className="flex items-center justify-center">
              <span className="text-blue-600 mr-2">•</span>
              <span>Instant support from payroll experts</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-600 mr-2">•</span>
              <span>Get answers to your payroll queries in real time</span>
            </li>
            <li className="flex items-center justify-center">
              <span className="text-blue-600 mr-2">•</span>
              <span>Available 24/7 to assist you</span>
            </li>
          </ul>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Click Here to Chat Now
          </button>
        </motion.div>
      </div>

      {/* Final CTA */}
      <div className="mt-20 bg-gray-800 rounded-xl mx-6 md:mx-12 p-8 md:p-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Get a Free Consultation Today!</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us simplify your payroll so you can focus on growing your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300">
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
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Contact Us
            </button>
            <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Request a Quote
            </button>
          </div>
        </motion.div>
      </div>

      {/* Email Marketing & Social Sharing */}
      <div className="mt-20 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Email Marketing */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Email Marketing Integration</h3>
            <p className="text-gray-600 mb-4">Nurture Leads with Email Campaigns</p>
            <p className="text-gray-600 mb-4">By signing up for our free Payroll Consultation, you'll receive valuable insights, updates, and exclusive offers directly in your inbox.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
              <Mail className="mr-2" size={16} />
              Subscribe to Our Newsletter
            </button>
            <ul className="text-gray-600 mt-4 space-y-2 text-sm">
              <li>• Stay updated with the latest payroll trends, tax regulations, and best practices.</li>
              <li>• Get exclusive content such as payroll checklists, compliance tips, and webinars.</li>
              <li>• Special discounts and promotions on payroll services for new subscribers.</li>
            </ul>
          </motion.div>

          {/* Social Sharing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Social Media Sharing Options</h3>
            <p className="text-gray-600 mb-4">Share This Page</p>
            <p className="text-gray-600 mb-4">Invite others to discover how we can help with their contract payroll needs.</p>
            <div className="flex flex-wrap gap-2">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors flex items-center">
                <Share2 className="mr-2" size={16} />
                Share on Facebook
              </button>
              <button className="bg-sky-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors flex items-center">
                <Share2 className="mr-2" size={16} />
                Share on Twitter
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center">
                <Share2 className="mr-2" size={16} />
                Share on LinkedIn
              </button>
              <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-700 transition-colors flex items-center">
                <Share2 className="mr-2" size={16} />
                Share on Instagram
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service3;