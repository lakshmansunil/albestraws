import React, { useState, useEffect, useRef } from 'react';
import MyComponent from '../TypedText';
import 'tailwindcss/tailwind.css';
import '../../index.css';

import videoSrc from '../../assets/videos/3141210-hd_1280_720_25fps.mp4';
import { Link } from 'react-router-dom';

const carouselMatter = [
  {
    h2: ["#EmpowerInnovation"],
    matter: "Transform your home with our cutting-edge IoT solutions. Experience the future of smart living today!",
    knowmore: "services/iot-and-robotics"
  },
  {
    h2: ["#UnlockDataPower"],
    matter: "Unlock the power of data with our expert data science services. Transform insights into impactful actions!",
    knowmore: "services/data-science"
  },
  {
    h2: ["#RevolutionizeBusiness"],
    matter: "Revolutionize your business with our machine learning expertise. Turn data into intelligent decisions!",
    knowmore: "services/machine-learning"
  },
  {
    h2: ["#HarnessAI"],
    matter: "Empower your future with our AI solutions. Harness artificial intelligence to drive innovation and growth!",
    knowmore: "services/artificial-intelligence"
  }
];

const MainCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const autoplay = setInterval(() => {
      goToNextSlide();
    }, 4300);

    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselMatter.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselMatter.length) % carouselMatter.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      goToPrevSlide();
    }
  };

  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    touchEndX.current = e.clientX;
    if (touchStartX.current - touchEndX.current > 50) {
      goToNextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      goToPrevSlide();
    }
  };

  return (
    <div className="relative w-full max-h-5xl mx-auto overflow-hidden  ">

      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src={videoSrc}
        />
      </div>

      <div
        ref={carouselRef}
        className="relative z-0 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="relative flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carouselMatter.map((item, index) => (
            <div key={index} className="relative min-w-full h-128">
              <div className="absolute inset-0 z-0 bg-black bg-opacity-20 flex items-center justify-start md:px-24 text-white">
                <div className="carousel-item-matter max-w-128 z-10 px-6">
                  <h2 className="text-3xl font-bold sliding-text py-2">
                    <MyComponent h2title={item.h2} />
                  </h2>
                  <p className='py-2'>{item.matter}</p>
                  <Link to={item.knowmore}>
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ease-in-out duration-150">
                      Know more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute md:h-full top-3/4 sm:top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 opacity-30 text-black font-bold p-2 rounded-sm z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='black'><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" /></svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute md:h-full top-3/4 sm:top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 opacity-30 text-black font-bold p-2 rounded-sm z-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='black'><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" /><path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z" /></svg>
      </button>
    </div>
  );
};

export default MainCarousel;
