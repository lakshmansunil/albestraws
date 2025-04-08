import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../index.css'
import ParticlesComponent from '../ParticlesComponents copy.js';


import patent1 from '../../assets/images/insights/image001.webp'
import award1 from '../../assets/images/insights/image005.webp'
import award2 from '../../assets/images/insights/image009.webp'
import award3 from '../../assets/images/insights/image011.2.webp'
import award4 from '../../assets/images/insights/image015.webp'
import book1 from '../../assets/images/insights/image003.webp'
import { Link } from 'react-router-dom';
import Publications from './publications.js';



const patents = [
  {
    title: "SYSTEM AND METHOD FOR SIM CARD TRAY AUTOMATIC EJECTION AND RETRACTION BY USER AUTHENTICATION",
    date: "December 12, 2023",
    description: `The patent titled "SYSTEM AND METHOD FOR SIM CARD TRAY AUTOMATIC EJECTION AND RETRACTION BY USER AUTHENTICATION," issued on December 12, 2023, outlines a novel approach to enhancing mobile device security. By integrating user authentication mechanisms, this system automates the ejection and retraction of SIM card trays. This innovation aims to prevent unauthorized access and enhances user control over mobile device functionalities related to SIM card management.`,
    imageUrl: patent1
  }
];

const awards = [
  {
    title: "1st Prize at JNTUK Kakinada Innovation Fair",
    description: "Our innovative idea for enhancing mobile security has won the 1st prize at the JNTUK Kakinada Innovation Fair! Our automated SIM slot ejection system and authentication mechanism ensures that your mobile device is secure and protected at all times.",
    imageUrl: award1
  },
  {
    title: "3rd Prize at National Level Innovation Fest",
    description: "Honored to have secured 3rd prize and Cash Award at the National Level Innovation Fest organized by BVMAP and hosted at KL University Vijayawada.",
    imageUrl: award2
  },
  {
    title: "Honored with IDEATIONFEST 5.0 Certification and Patent Award!",
    description: "We are excited to highlight our recent achievement at IDEATIONFEST 5.0 with PRAGADA ESWAR. With invaluable guidance from Venkata Subbaiah (mentor & coordinator), D Veeraiah (HOD of CSE), and K Apparao (Principal of LBRCE), and special thanks to Siva Ramakrishna, Narendra Babu, and Satynarayana from the Incubation Cell, we not only reached our goals but also received a refund. Additionally, we proudly announce our successful patent application for 'Enhancing Mobile Security with an Automated SIM Slot Ejection System and Authentication Mechanism.'",
    imageUrl: award3
  },
  {
    title: "International Best Paper Award 2024",
    description: "Honored to receive the International Best Paper Award 2024 for my work on 'Enhanced Feature Extraction Using Deep Learning for Image Classification' at ICATDS 2024.",
    imageUrl: award4
  }
];

const publications = {
  ML: [
    {
      title: "Advanced Image Forensics: Detecting and reconstructing Manipulated Images with Deep Learning.",
      description: "This project uses deep learning, specifically CNNs and GANs, to detect and reconstruct manipulated images. It combines techniques like Error Level Analysis and wavelet denoising for preprocessing, demonstrating robustness in identifying and analyzing image tampering.",
      link: "https://www.ijisae.org/index.php/IJISAE/article/view/6214"
    },
    {
      title: "Advancements in Deep Learning Architectures for Image Recognition and Semantic Segmentation",
      description: "This project uses deep learning, specifically CNNs and GANs, to detect and reconstruct manipulated images. It combines techniques like Error Level Analysis and wavelet denoising for preprocessing, demonstrating robustness in identifying and analyzing image tampering.",
      link: "https://thesai.org/Publications/ViewPaper?Volume=15&Issue=8&Code=IJACSA&SerialNo=114"
    },
    {
      title: "Deep Learning Techniques for Image Recognition and Classification",
      description: "This research explores CNNs, RNNs, GANs, and hybrid models for image recognition. CNNs excel in static image tasks, RNNs in sequential data, GANs in generative applications, and hybrid models for complex tasks, aiming to enhance stability, efficacy, and real-time capabilities.",
      link: "https://ijritcc.org/index.php/ijritcc/article/view/10869"

    },
    {
      title: "Image Processing in Augmented Reality (AR) and Virtual Reality (VR)",
      description: "This study evaluates image processing algorithms crucial for AR and VR applications. It covers tasks like image registration, object recognition, depth estimation, and real-time rendering, emphasizing accuracy, computational efficiency, and real-time performance (up to 60 fps).",
      link: "https://ijritcc.org/index.php/ijritcc/article/view/10870"
    },
    {
      title: "Enhancing Mobile Security with an Automated SIM Slot Ejection System and Authentication Mechanism",
      description: "This work focuses on mobile security innovations, specifically an automated SIM slot ejection system and authentication mechanism, presented at the ICAISS conference.",
      link: "https://ieeexplore.ieee.org/document/10250725"
    },
    {
      title: "Deep Learning-Based Classification of Freshwater Fish Diseases Using Recurrent Neural Networks and PyTorch",
      description: "This work focuses on mobile security innovations, specifically an automated SIM slot ejection system and authentication mechanism, presented at the ICAISS conference.",
      link: "https://www.ijisae.org/index.php/IJISAE/article/view/6840"
    },
    {
      title: "Change Detection Algorithm for Vegetation Mapping Using Multispectral Image Processing",
      description: "This work focuses on mobile security innovations, specifically an automated SIM slot ejection system and authentication mechanism, presented at the ICAISS conference.",
      link: "https://link.springer.com/chapter/10.1007/978-981-99-1624-5_37"
    },
    {
      title: "Deep Learning -Based Super-Resolution for Grayscale Images Using Convolutional Neural Networks",
      description: "",
      Link: "https://www.ijmtst.com/volume10/issue08/07IJMTST1008078.pdf"
    }
  ],
  IOT: [

    {
      title: "Integrated Cognitive Detection and Alert System for Mitigating Driver Drowsiness: A Comprehensive Approach towards Enhanced Driver Safety",
      description: "Introduces Optimized Spatial-Temporal Video Vision Transformers for video recognition tasks, enhancing performance in recognizing spatial-temporal features in videos.",
      link: "https://thegrenze.com/index.php?display=page&view=journalabstract&absid=3362&id=8"
    },
    {
      title: "A Study on Cloud and IoT based Accident Detection & Prevention Systems",
      description: "Introduces Optimized Spatial-Temporal Video Vision Transformers for video recognition tasks, enhancing performance in recognizing spatial-temporal features in videos.",
      link: "https://ieeexplore.ieee.org/document/10104676"
    }
  ]
}
const books = [
  {
    title: "Advancements in Artificial Intelligence in Computer Vision Applications",
    author: "Mr. Arjun Uddagiri",
    description: "This book delves into the various deep learning methodologies and their applications in the field of computer vision, providing both theoretical and practical insights.",
    imageUrl: book1
  }
];

const InsightsPage = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="min-h-screen p-4 m-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">GLOOM DEV Insights</h1>
        <p className="text-xl text-gray-600">Discover our achievements in innovation and excellence.</p>
      </header>
      <div className=' bg-gray-100'>
        <section className="tsparticles relative mb-8 p-5 sm:md:p-10 bg-gray-200 shadow-md rounded-md overflow-hidden" id='patenet-section'>
          <ParticlesComponent enable={false} className="relative" />
          <h2 className="text-6xl font-bold text-gray-900 mb-4">Patents</h2>
          <div className="p-3 bg-gradient-to-rrounded-lg flex flex-wrap justify-between ">
            <img src={patents[0].imageUrl} alt='patent-img' className='w-auto max-h-98 realtive rounded-lg shadow-2xl hover:scale-105 transition-all ease-in-out duration-500 slide-up' />
            <div className=' p-3 rounded-md text-black max-w-128 m-auto mt-5 slide-left'>
              <h3 className='text-2xl font-bold text-center'>{patents[0].title}</h3>
              <p className='font-bold'>{patents[0].date}</p>
              <p>{patents[0].description}</p>
            </div>
          </div>
        </section>

        <section className=" mb-8 p-5 sm:p-10  m-auto bg-gradient-to-r from-[#051937] to-[#222222] rounded-md">
        <div className='container mx-auto'>
           <h2 className="text-6xl font-bold text-gray-100 mb-4">Awards</h2>
          <p className=' text-gray-100 mb-10 max-w-128'>Our journey has been marked by numerous accolades and recognition for our innovative ideas and solutions. These awards not only validate our hard work and dedication but also inspire us to push the boundaries of innovation further.</p>
        </div>
         <div className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className=" combined-btn realtive bg-gray-900 text-white rounded-lg shadow-gray-600 shadow-md overflow-hidden transition-all ease-in-out duration-700" id='combined-btn' data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="300" data-aos-delay={awards.length - 1 === index ? 0 : index * 300}>
                <img src={award.imageUrl} alt={award.title} className={`w-full rounded-lg h-48 ${award.imageUrl === award4 ? "object-contain pt-3 rounded-xl" : "object-cover"} hover:scale-125 transition-all ease-in-out duration-1000`} />
                <div className="realtive p-6 ">
                  <h3 className="text-2xl font-bold mb-2">{award.title}</h3>
                  <p className=" ">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='container mx-auto'>
        <Publications/>
        <section className=' p-5 sm::p-10'>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div key={index} className="bg-white  hover:bg-sky-100 rounded-lg shadow-lg overflow-hidden hover:-translate-y-2 transition-all ease-in-out duration-200 cursor-pointer ">
                <img src={book.imageUrl} alt={book.title} className="w-full rounded-xl h-48 object-contain hover:scale-110 transition-all ease-in-out duration-700" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
                  <a href='https://www.linkedin.com/in/arjun-uddagiri-8585891b3/' target='_blank'>
                    <p className="text-gray-600 hover:text-black mb-2 font-bold underline">{book.author}</p>
                  </a>
                  <p className="text-gray-600">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
        
    </div>
  );
};

export default InsightsPage;
