import React, { useState, useEffect } from 'react'
import  {FaTimes, FaSpinner, FaExternalLinkAlt } from 'react-icons/fa'
import Aos from "aos"
import 'aos/dist/aos.css'

const publications = {
  ML: [
    {
      title: "Advanced Image Forensics: Detecting and reconstructing Manipulated Images with Deep Learning.",
      description: `The project employs deep learning techniques, specifically Convolutional Neural Networks (CNNs) and Generative Adversarial Networks (GANs), to detect and reconstruct manipulated images. It uses preprocessing methods like Error Level Analysis (ELA) and wavelet denoising to enhance detection accuracy. The architecture and training of the CNN demonstrate its effectiveness in identifying image tampering and assessing the extent of alterations.`,
      link: "https://www.ijisae.org/index.php/IJISAE/article/view/6214",
      delay: 100
    },
    {
      title: "Advancements in Deep Learning Architectures for Image Recognition and Semantic Segmentation",
      description: `This paper focuses on using Convolutional Neural Networks (CNNs) for image classification, including both pre-trained models and custom architectures. It demonstrates the effectiveness of AlexNet with transfer learning and introduces a custom CNN designed for MNIST digit recognition. The model’s architecture and training process are detailed, offering insights into optimizing performance and improving classification accuracy.`,
      link: "https://thesai.org/Publications/ViewPaper?Volume=15&Issue=8&Code=IJACSA&SerialNo=114",
      delay: 200
    },
    {
      title: "Deep Learning Techniques for Image Recognition and Classification",
      description: `Research explores deep learning approaches for image recognition, focusing on Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Generative Adversarial Networks (GANs), and hybrid models. CNNs excel in static image accuracy, RNNs handle sequential data, GANs are effective for generative tasks, and hybrid models are suited for complex applications. A comparative analysis reveals the potential of hybrid models, indicating future research should enhance their efficacy, stability, robustness, and real-time capabilities.`,
      link: "https://ijritcc.org/index.php/ijritcc/article/view/10869",
      delay: 200
    },
    {
      title: "Image Processing in Augmented Reality (AR) and Virtual Reality (VR)",
      description: `Advanced image processing algorithms are crucial for augmented reality (AR) and virtual reality (VR) applications. Key areas include image registration, feature identification, object recognition, depth estimation, 3D reconstruction, and real-time rendering, with a focus on accuracy and performance. Real-time rendering achieves 95% accuracy and 60 fps speed, supported by GPU advancements and algorithmic optimizations. Future work will explore AI integration, benchmarking, standard frameworks, and domain-specific applications.`,
      link: "https://ijritcc.org/index.php/ijritcc/article/view/10870",
      delay: 200
    },
    {
      title: "Enhancing Mobile Security with an Automated SIM Slot Ejection System and Authentication Mechanism",
      description: `This project develops an Automatic SIM Slot Ejection System for smartphones, featuring a robust authentication mechanism. Traditional ejector tools pose security risks, allowing unauthorized individuals to remove SIM cards from stolen devices, potentially exploiting banking applications and accessing personal accounts through Gmail credentials. Our solution requires authentication for inserting and removing SIM cards, preventing unauthorized power-offs without proper verification. While not guaranteeing complete safety, this system mitigates security risks associated with stolen devices, enhancing mobile security and protecting sensitive information stored within banking applications and linked services.`,
      link: "https://ieeexplore.ieee.org/document/10250725",
      delay: 200
    },
    {
      title: "Deep Learning-Based Classification of Freshwater Fish Diseases Using Recurrent Neural Networks and PyTorch",
      description: `This project uses PyTorch to create a deep learning pipeline for classifying images of freshwater fish diseases. Google Colab is utilized for environment setup and data access, with a dataset organized into disease-specific subdirectories loaded using OpenCV and processed via torchvision for resizing and normalization. A custom dataset class manages data loading and transformation, while an LSTM-based Recurrent Neural Network (RNN) processes sequential image features for classification. Training employs PyTorch's DataLoader for efficient batch processing, optimizing model parameters with stochastic gradient descent and cross-entropy loss. This approach highlights key deep learning practices, including dataset management and model training, with potential for further dataset augmentation and architecture refinement to improve classification performance.`,
      link: "https://www.ijisae.org/index.php/IJISAE/article/view/6840",
      delay: 200
    },
    {
      title: "Change Detection Algorithm for Vegetation Mapping Using Multispectral Image Processing",
      description: `Agriculture plays a vital role in global prosperity and is constantly evolving in different geographic areas. Change detection is the process of identifying differences in agricultural traits across locations, typically using geographic data from sources like Google Earth Engine (GEE), including satellite imagery. This method has its roots in remote sensing, enabling the monitoring and preservation of important agricultural characteristics over time.`,
      link: "https://link.springer.com/chapter/10.1007/978-981-99-1624-5_37",
      delay: 200
    },
    {
      title: "Deep Learning-Based Super-Resolution for Grayscale Images Using Convolutional Neural Networks",
      description: `Super-resolution imaging is vital in areas such as medical diagnostics and satellite imagery. This paper presents a novel Convolutional Neural Network (CNN) approach for grayscale images, utilizing a sequential architecture with convolutional and transposed convolutional layers to upscale low-resolution images while preserving essential details. The model is trained on a dataset of 540x420 pixel grayscale images, downsampled to 270x210 pixels to simulate low resolution, using mean squared error (MSE) as the loss function optimized with the Adam optimizer. Our qualitative and quantitative analyses demonstrate significant improvements in image quality and resolution, with experimental results showing the model's ability to restore fine details and enhance clarity. This study advances deep learning-based image enhancement, offering a practical solution for super-resolution tasks and broadening applications where image quality is crucial.`,
      link: "https://www.ijmtst.com/volume10/issue08/07IJMTST1008078.pdf",
      delay: 200
    }
  ],
  IOT: [
    {
      title: "Integrated Cognitive Detection and Alert System for Mitigating Driver Drowsiness: A Comprehensive Approach towards Enhanced Driver Safety",
      description: `This research paper presents a system that detects driver drowsiness using OpenCV and Python to improve safety on the road. With 22.8% of accidents linked to drowsiness, the system aims to reduce these risks, which can lead to injuries and financial loss. It accurately detects signs of drowsiness and alerts the driver through gentle jerks and a red light projected on their face. Instead of sudden braking, the system slows the vehicle gradually to prevent abrupt movements. It also includes cruise control features to help lower accident rates. Overall, this solution seeks to tackle driver drowsiness and enhance road safety using modern technology.`,
      link: "https://thegrenze.com/index.php?display=page&view=journalabstract&absid=3362&id=8",
      delay: 100
    },
    {
      title: "A Study on Cloud and IoT based Accident Detection & Prevention Systems",
      description: `With the world’s population exceeding 7 billion, traffic accidents are on the rise due to poor driving habits and carelessness. In India, over five lakh traffic accidents occurred in 2015, leading to 1.5 lakh deaths, with predictions suggesting a 50% increase by 2022. Many fatalities are caused by delays in getting emergency assistance to accident victims. This highlights the urgent need for an IoT-based accident detection model to help reduce deaths. This study reviews existing accident detection methods and strategies to find the best solutions for locating accident sites and alerting nearby hospitals. It primarily focuses on developing an IoT-based system for accident detection and prevention.`,
      link: "https://ieeexplore.ieee.org/document/10104676",
      delay: 200
    }
  ]
}

const publicationCategories = [
  {
    name: 'Machine Learning',
    publications: publications.ML
  },
  {
    name: 'Internet of Things',
    publications: publications.IOT
  }
]

export default function Publications() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: false,
      offset: 100,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])

  const [activeCategory, setActiveCategory] = useState(publicationCategories[0].name)
  const [selectedPublication, setSelectedPublication] = useState(null)

  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Publications</h1>
      <p className="text-lg md:text-xl mb-8">
        Explore our research publications in Machine Learning and Internet of Things.
      </p>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 mb-6 p-3 bg-gray-200" data-aos="fade-right">
        {publicationCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex items-center gap-2 px-4 py-2  text-sm md:text-base ${
              activeCategory === category.name ? 'bg-slate-500 text-white rounded-lg' : 'bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Publication Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {publicationCategories
          .find((category) => category.name === activeCategory)
          .publications.map((publication) => (
            <div
              key={publication.title}
              onClick={() => setSelectedPublication(publication)}
              className="bg-slate-50 p-3 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-duration="200"
              data-aos-delay={publication.delay}
            >
              <div className="p-4 flex flex-col justify-between h-full">
                <h3 className="font-semibold text-lg mb-2">{publication.title}</h3>
                <div>
                    <button className="px-3 py-2 bg-blue-500 text-white rounded-full shadow-md mt-2">View Details</button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Modal for Selected Publication */}
      {selectedPublication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white max-h-lvh md:h-auto rounded-lg p-6 max-w-3xl w-full relative overflow-auto">
            <button
              onClick={() => setSelectedPublication(null)}
              className="absolute top-2 right-2 text-zinc-500 hover:text-slate-700"
            >
              <FaTimes size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedPublication.title}</h2>
            <p className="mb-4">{selectedPublication.description}</p>
            <a
              href={selectedPublication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              View Publication <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}