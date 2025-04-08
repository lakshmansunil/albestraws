import React from "react";
import image1 from '../../assets/images/training/python.webp';
import image2 from '../../assets/images/training/datascience.webp'
import image3 from '../../assets/images/training/MERN.webp'
import TrainingComponent from "./TrainingComponents";
const cardItems = [
    {
        title: "Python",
        description: "Python is a versatile and powerful programming language that's essential for modern development. Our Python course takes you from the basics to advanced concepts, giving you the tools to build web applications, automate tasks, and much more.",
        enrollLink: "https://forms.fillout.com/t/pgBUFVreh2us",
        image: image1
    },
    {
        title: "Data Science",
        description: "Data Science is transforming industries and driving innovation. Our comprehensive course covers everything from data manipulation and visualization to machine learning and predictive analytics. Learn from industry experts and gain the skills to tackle real-world challenges.",
        enrollLink: "https://forms.fillout.com/t/pgBUFVreh2us",
        image: image2
    },
    {
        title: "MERN Stack",
        description: "Become a full-stack developer with our MERN stack course. Learn how to create robust, scalable web applications using MongoDB, Express.js, React, and Node.js. This course is perfect for beginners and experienced developers looking to expand their skill set.",
        enrollLink: "https://forms.fillout.com/t/pgBUFVreh2us",
        image: image3
    }
]

const Training = () => {
    return (
        <div>
            <div className="max-w-[1500px] m-auto my-4 p-2">
                <div className="text-center max-w-280 m-auto">
                    <h1 className="text-4xl my-4">Unlock Your Potential with our <span className="font-bold"><nobr>Training Programs</nobr></span> </h1>
                    <p className="my-2 italic">We're here to help you take your skills to the next level and open up exciting new career opportunities.
                        Our expertly designed training programs in Data Science, Python, and the MERN stack are crafted to provide you with the practical knowledge
                    </p>
                </div>
                <div className="my-7 p-7 flex flex-wrap justify-around gap-6">
                    {cardItems.map((item, index) => (
                        <TrainingComponent key={index} cardItem={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Training;