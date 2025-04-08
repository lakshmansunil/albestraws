import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";

import team from "../../assets/animations/team.json";
import vision from "../../assets/animations/vision.json";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <>
      {/* About Us Section */}
      <div className="relative min-h-[700px] w-full flex items-center justify-center bg-white">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#e0e0e0] to-[#cfd8dc] opacity-90"></div>

        {/* Content Wrapper */}
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-6">
          {/* Team Animation */}
          <div className="flex justify-center w-full md:w-1/2">
            <Lottie animationData={team} loop={true} className="h-64 md:h-80" />
          </div>

          {/* About Us Text */}
          <div className="flex flex-col w-full md:w-1/2 p-4 md:p-6">
            <h2
              className="text-4xl font-bold text-gray-900 mb-6"
              data-aos="fade-right"
            >
              About Us
            </h2>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              data-aos="fade-up"
            >
              At Albestraws Software Solutions, we understand how critical
              talent is to every organization, as well as how the world of work
              and the workplace is changing. We offer the most effective means
              to help you acquire, manage, and optimize the right talent
              on-demand – when, where, and how you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative min-h-[700px] w-full flex items-center justify-center bg-black">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#1a237e] to-[#0d0d2b] opacity-90"></div>
    
        {/* Content Wrapper */}
        <div className="relative flex flex-col md:flex-row items-center justify-center text-white max-w-6xl mx-auto px-6">
          {/* Mission Animation */}
          <div className="flex justify-center w-full md:w-1/2">
            <Lottie
              animationData={vision}
              loop={true}
              className="h-80 md:h-[500px]"
            />
          </div>

          {/* Mission Text */}
          <div className="flex flex-col w-full md:w-1/2 p-4 md:p-6">
            <h2
              className="text-5xl font-extrabold leading-tight mb-6"
              data-aos="fade-left"
            >
              Our Mission
            </h2>
            <p
              className="text-lg text-gray-300 leading-relaxed"
              data-aos="fade-up"
            >
              At Albestraws Software Solutions, we aim to provide faster, more
              reliable, and cost-effective business solutions for our clients by
              integrating the latest technologies with innovative strategies. We
              empower businesses to scale efficiently while securing their
              digital future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
