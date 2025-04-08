import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Shield,
  Cloud,
  Server,
  ClipboardList,
  BarChart2,
  HeartPulse,
  ShoppingCart,
  Landmark,
  Factory,
  Phone,
  Globe,
  Users,
} from "lucide-react";

// Import local .mp4 files for whyChooseUs (adjust paths as needed)
import expertTrainersVideo from "../../Resources/Service5/expert.mp4";
import customProgramsVideo from "../../Resources/Service5/custom.mp4";
import flexibleDeliveryVideo from "../../Resources/Service5/delivery.mp4";
import measurableResultsVideo from "../../Resources/Service5/measure.mp4";
import certificationVideo from "../../Resources/Service5/certification.mp4";

const trainingServices = [
  {
    title: "Software Development & Programming",
    icon: <Code size={50} className="text-blue-600" />,
    points: [
      "Java, Python, C++, .NET",
      "Mobile App Development (iOS/Android)",
      "Web Development (HTML, CSS, JavaScript, Angular, React)",
      "Cloud Development (AWS, Azure, Google Cloud)",
      "DevOps & Agile Practices",
    ],
  },
  {
    title: "Data Analytics & Business Intelligence",
    icon: <BarChart2 size={50} className="text-green-600" />,
    points: [
      "Data Science with Python and R",
      "Machine Learning & Artificial Intelligence",
      "Big Data Technologies (Hadoop, Spark)",
      "Power BI, Tableau, and Data Visualization",
      "SQL, NoSQL, and Database Management",
    ],
  },
  {
    title: "Cybersecurity Training",
    icon: <Shield size={50} className="text-red-600" />,
    points: [
      "Ethical Hacking & Penetration Testing",
      "Network Security & Firewalls",
      "Cloud Security",
      "Incident Response & Threat Detection",
      "GDPR & Compliance Regulations",
    ],
  },
  {
    title: "Cloud Computing & Virtualization",
    icon: <Cloud size={50} className="text-indigo-600" />,
    points: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure & Google Cloud Platform (GCP)",
      "Cloud Infrastructure & Virtualization",
      "Docker & Kubernetes",
      "Cloud Migration & Management",
    ],
  },
  {
    title: "IT Infrastructure & Networking",
    icon: <Server size={50} className="text-purple-600" />,
    points: [
      "Networking Fundamentals (CCNA, CCNP)",
      "Server Administration (Linux, Windows Server)",
      "Cloud Networking & SDN",
      "Virtual Networks & VPNs",
    ],
  },
  {
    title: "Project Management for IT",
    icon: <ClipboardList size={50} className="text-orange-600" />,
    points: [
      "Agile & Scrum Master Certification",
      "PMP (Project Management Professional)",
      "ITIL® Foundation & Best Practices",
      "Lean Six Sigma",
      "Risk Management & Compliance",
    ],
  },
];

const whyChooseUs = [
  {
    title: "Expert Trainers",
    description: "Our trainers are industry professionals with years of experience in IT, offering practical insights and knowledge that can be immediately applied.",
    color: "bg-blue-100",
    video: expertTrainersVideo,
  },
  {
    title: "Customized Training Programs",
    description: "We design training programs tailored to your organization's specific needs and skill levels. Whether your team needs foundational skills or advanced knowledge, we've got you covered.",
    color: "bg-green-100",
    video: customProgramsVideo,
  },
  {
    title: "Flexible Delivery Modes",
    description: "We offer a variety of delivery options to suit your team's schedule and needs: In-person, virtual instructor-led, self-paced e-learning, or blended learning approaches.",
    color: "bg-indigo-100",
    video: flexibleDeliveryVideo,
  },
  {
    title: "Measurable Results",
    description: "Our training programs are designed with clear learning outcomes and success metrics. We help you measure the impact through pre-and post-assessments, feedback surveys, and performance tracking.",
    color: "bg-yellow-100",
    video: measurableResultsVideo,
  },
  {
    title: "Certification & Recognition",
    description: "Upon completion of our training programs, employees receive industry-recognized certifications and badges, adding value to your organization's workforce and boosting employee morale.",
    color: "bg-red-100",
    video: certificationVideo,
  },
];

const industries = [
  { title: "Technology", icon: <Code size={40} className="text-blue-600" /> },
  { title: "Healthcare", icon: <HeartPulse size={40} className="text-pink-600" /> },
  { title: "Finance", icon: <Landmark size={40} className="text-green-600" /> },
  { title: "Retail", icon: <ShoppingCart size={40} className="text-purple-600" /> },
  { title: "Manufacturing", icon: <Factory size={40} className="text-orange-600" /> },
  { title: "Telecom", icon: <Phone size={40} className="text-red-600" /> },
  { title: "Government", icon: <Globe size={40} className="text-indigo-600" /> },
];

const caseStudy = {
  title: "Transforming an IT Team for a Global Tech Firm",
  challenge: "Their IT department needed advanced cloud computing and cybersecurity skills.",
  solution: "We customized a training program focused on AWS, Azure, and Cybersecurity Best Practices.",
  results: [
    "40% increase in cloud infrastructure efficiency",
    "Improved security incident response time by 30%",
    "Employees successfully passed certifications, improving team confidence and performance",
  ],
  quote:
    "The training provided empowered our team with the critical skills needed for a successful cloud migration project.",
  author: "Laura H., IT Director",
};

const testimonials = [
  {
    quote:
      "We saw an immediate boost in productivity and confidence within our team after completing the cloud computing training. The trainers were fantastic!",
    author: "Mark S., CTO of FinTech Solutions",
  },
  {
    quote:
      "Our network security team improved its skills dramatically, and we are now much more prepared for potential threats.",
    author: "Rita P., Head of IT Security at Global Financial Corp",
  },
];

const processSteps = [
  {
    title: "Consultation & Needs Analysis",
    description: "We begin by understanding your training objectives, team's current skill levels, and the technologies you want to focus on. We customize the program based on your goals."
  },
  {
    title: "Program Design & Development",
    description: "We create a tailored curriculum with a blend of theoretical and practical knowledge, ensuring engaging and hands-on learning experiences."
  },
  {
    title: "Training Delivery",
    description: "Our expert instructors deliver the training through your preferred delivery method, whether in-person or online, ensuring an engaging and interactive learning environment."
  },
  {
    title: "Post-Training Support & Evaluation",
    description: "We provide post-training support, including additional resources, follow-up sessions, and progress tracking to ensure continuous improvement and knowledge retention."
  }
];

const Service5 = () => {
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
          Corporate <span className="text-blue-600">IT Training</span> Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empower your workforce with cutting-edge IT skills to drive your business forward in today's digital world.
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
            In today's fast-paced digital world, keeping your team up-to-date with the latest technologies is essential for success. We offer customized IT corporate training designed to equip your employees with the knowledge and skills they need to drive your business forward. Our expert-led training programs are focused on practical skills and real-world applications, ensuring immediate impact and long-term value.
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Training Services</h3>
          <p className="text-lg text-gray-600">
            We specialize in corporate IT training across a wide range of technologies and tools. Whether you need training for a specific software, programming language, or IT certification, we have you covered.
          </p>
        </motion.div>
      </div>

      {/* Training Services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {trainingServices.map((service, index) => (
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
            <ul className="blue-bullets text-gray-600 space-y-2 mb-6 list-disc text-left">
              {service.points.map((point, i) => (
                <li key={i} className="text-lg">{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="mt-20 px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Why Choose Our <span className="text-blue-600">Training Services?</span>
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
              className="relative overflow-hidden rounded-t-xl shadow-lg bg-white group hover:shadow-xl transition-shadow duration-300"
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

      {/* Our Process */}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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

      {/* Case Study */}
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
              <blockquote className="text-gray-700 italic text-lg mb-4">"{caseStudy.quote}"</blockquote>
              <p className="font-semibold text-gray-800">— {caseStudy.author}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Industries We Serve */}
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

      {/* Testimonials */}
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

      {/* Final CTA */}
      <motion.div
        className="mt-20 bg-white rounded-xl mx-6 md:mx-12 p-8 md:p-12 text-center shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Ready to Upskill Your Team?</h3>
        <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
          Let's design the perfect training program for your workforce.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Contact Our Training Team
          </button>
          <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Request Training Proposal
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Service5;