import { motion } from 'framer-motion'
import { Cpu, Database, Brain, Zap } from 'lucide-react'

const mainserviceItems = [
  {
    title: "IOT and Robotics",
    icon: <Cpu className="w-10 h-10" />,
    gradient: "from-[#FF6500] to-[#FCCD2A]",
    para: "Boosting Efficiency with Intelligent Solutions. Explore our IoT and Robotics services aimed at optimizing operations and enhancing quality. We specialize in optimizing energy consumption, providing connected transport for real-time cargo monitoring, offering usage-based service pricing for efficient asset management, and ensuring manufacturing excellence through product quality management."
  },
  {
    title: "Data Science",
    icon: <Database className="w-10 h-10" />,
    gradient: "from-[#FF6500] to-[#FCCD2A]",
    para: "Our Data Science services offer customized solutions in Supply Chain Analytics, Marketing Analytics, and Customer Analytics. We assist in converting data into actionable insights, improving operations and enhancing decision-making processes."
  },
  {
    title: "Machine Learning",
    icon: <Brain className="w-10 h-10" />,
    gradient: "from-[#FF6500] to-[#FCCD2A]",
    para: "Discover our Machine Learning services, featuring Model Development, Data Engineering, and Data Analysis. We create robust models, design efficient data pipelines, and derive meaningful insights, empowering you to make data-driven decisions and innovate successfully."
  },
  {
    title: "Artificial Intelligence",
    icon: <Zap className="w-10 h-10" />,
    gradient: "from-[#FF6500] to-[#FCCD2A]",
    para: "Explore our AI services that transform industries and everyday life. Our expertise in Natural Language Processing, Computer Vision, and Image Analysis opens up new possibilities and fosters innovation, making technology more intelligent and responsive."
  }
]

export default function ServiceSection() {
  return (
    <div className="bg-white services py-16 px-8 min-h-screen bg-gradient-to-br">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="max-w-3xl mx-auto text-lg text-center mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We are dedicated to providing comprehensive technology solutions that cater to the evolving needs of modern businesses. 
          Our team of experts specializes in developing advanced data science models, implementing IoT systems, and creating 
          innovative AI and ML applications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {mainserviceItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-gradient-to-b ${item.gradient}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 left-[-40%] w-full h-[120%] bg-gradient-to-r from-transparent to-white/20 rotate-[35deg] blur-sm pointer-events-none"></div>
              <div className="relative p-8 flex flex-col items-center">
                <div className="w-28 h-24  rounded-b-[100px] shadow-[0_15px_0_rgba(0,0,0,0.1),inset_0_-8px_0_#fff] flex justify-center items-center mb-6">
                  <div className="text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className=" text-center mb-6">{item.para}</p>
                <motion.div 
                  className="flex items-center text-indigo-200 font-medium"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}