import React from "react";

const MainServiceComponent = ({ item, index }) => {

    return (
        <div key={index} className="flex flex-wrap my-5 px-6 cursor-pointer hover:-translate-y-4 transition-all ease-in-out duration-700">
            <div className="relative max-w-96 p-6 rounded-lg shadow-lg bg-blue-200">
                <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-lg rounded-lg "></div>
                <div className="relative z-10 text-black">
                    <h2 className="text-3xl font-medium">{item.title}</h2>
                    <p>{item.para}</p>
                </div>
            </div>
        </div>
    );
};

export default MainServiceComponent;
