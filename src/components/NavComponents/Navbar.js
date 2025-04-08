import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        (!servicesButtonRef.current || 
        !servicesButtonRef.current.contains(event.target))
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) setIsServicesOpen(false);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  const handleServiceLinkClick = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { 
        duration: 0.15,
        ease: "easeIn",
        when: "afterChildren"
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
  };

  return (
    <nav className="text-white px-3 bg-transparent relative z-50">
      <div className="container mx-auto lg:flex justify-between items-center">
        {/* Logo & Mobile Menu Button */}
        <div className="logo-button flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="logo" className="h-20" />
          </Link>
          <button 
            className="block lg:hidden text-black focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Menu */}
        <div 
          className={`lg:flex lg:items-center w-full lg:w-auto ${isMenuOpen ? "block" : "hidden"} lg:block`}
        >
          <ul className="text-black flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0">
            <li className="nav-item">
              <Link 
                to="/" 
                className="block py-2 px-4 hover:text-sky-600 rounded transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item relative group" ref={dropdownRef}>
              <button
                ref={servicesButtonRef}
                onClick={toggleServicesDropdown}
                className="flex items-center py-2 px-4 hover:text-sky-600 rounded transition-colors"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`ml-2 h-4 w-4 text-gray-500 transition-transform duration-200 ${isServicesOpen ? "transform rotate-180 text-sky-600" : "group-hover:text-sky-600"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Animated Dropdown Menu */}
              <motion.ul
                initial="closed"
                animate={isServicesOpen ? "open" : "closed"}
                variants={dropdownVariants}
                className="absolute left-0 mt-2 w-56 bg-white text-black shadow-xl rounded-lg overflow-hidden z-50 border border-gray-100"
              >
                <motion.li variants={itemVariants}>
                  <Link
                    to="/services/service1"
                    className="flex items-center px-4 py-3 hover:bg-sky-50 transition-colors"
                    onClick={handleServiceLinkClick}
                  >
                    <span className="ml-2">Corporate IT Training Solutions</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    to="/services/service2"
                    className="flex items-center px-4 py-3 hover:bg-sky-50 transition-colors"
                    onClick={handleServiceLinkClick}
                  >
                    <span className="ml-2">Software Development</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    to="/services/service3"
                    className="flex items-center px-4 py-3 hover:bg-sky-50 transition-colors"
                    onClick={handleServiceLinkClick}
                  >
                    <span className="ml-2">Contract Payroll</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    to="/services/service4"
                    className="flex items-center px-4 py-3 hover:bg-sky-50 transition-colors"
                    onClick={handleServiceLinkClick}
                  >
                    <span className="ml-2">Hardware Supply</span>
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                    to="/services/service5"
                    className="flex items-center px-4 py-3 hover:bg-sky-50 transition-colors"
                    onClick={handleServiceLinkClick}
                  >
                    <span className="ml-2">HR Services</span>
                  </Link>
                </motion.li>
              </motion.ul>
            </li>

            <li className="nav-item">
              <Link
                to="/data-center"
                className="block py-2 px-4 hover:text-sky-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Data Center
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="block py-2 px-4 hover:text-sky-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/expertise"
                className="block py-2 px-4 hover:text-sky-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Expertise
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/careers"
                className="block py-2 px-4 hover:text-sky-600 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;