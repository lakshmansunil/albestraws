import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, delay: 50 });
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-4">
              <span className="border-b-2 border-yellow-400">About Us</span>
            </h3>
            <p className="text-gray-400">
              We are a leading provider of innovative solutions, dedicated to
              helping businesses achieve their goals with cutting-edge
              technology and support.
            </p>
            <div className="flex flex-row my-4 gap-6">
              <a
                href="https://www.linkedin.com/company/gloom-dev-pvt-ltd"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 hover:scale-125 transition-transform duration-300 text-xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/GloomDev"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 hover:scale-125 transition-transform duration-300 text-xl"
              >
                <RiTwitterXFill />
              </a>
              <a
                href="https://www.instagram.com/gloom_dev/"
                target="_blank"
                rel="noreferrer"
                className="hover:-translate-y-1 hover:scale-125 transition-transform duration-300 text-xl"
              >
                <BsInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div
            className="w-full md:w-1/3 flex flex-col justify-center items-center text-center"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="border-b-2 border-yellow-400">Quick Links</span>
            </h3>
            <ul className="text-gray-400 flex gap-4 md:block">
              <li>
                <Link to="/" className="hover:text-gray-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-300 transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-gray-300 transition">
                  Expertise
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gray-300 transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/3" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-4">
              <span className="border-b-2 border-yellow-400">Contact Us</span>
            </h3>
            <ul className="text-gray-400">
              <li className="flex gap-3 items-center">
                <IoCallOutline className="text-white text-xl" />
                Phone:{" "}
                <a
                  href="tel:08043757155"
                  className="hover:text-gray-300 underline transition"
                >
                  080 4375 7155
                </a>
              </li>
              <li className="flex gap-3 items-center mt-2">
                <MdOutlineEmail className="text-white text-xl" />
                Email:{" "}
                <a
                  href="mailto:info@gloomdev.in"
                  className="hover:text-gray-300 underline transition"
                >
                  krkraju@albestraws.com
                </a>
              </li>
              <li className="flex gap-3 items-start mt-2">
                <HiOutlineLocationMarker className="text-white text-2xl" />
                <span>
                  Address:{" "}
                  <a
                    href="#"
                    className="hover:text-gray-300 underline transition"
                  >
                    #461, 4th Floor, Sai Sobagu, Teacher's Colony, Outer Ring
                    Road, beside Bluedart Office, Koramangala, Bangalore-560034
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div
          className="mt-10 border-t border-gray-700 pt-4 text-center"
          data-aos="fade-up"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Albestraws. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
