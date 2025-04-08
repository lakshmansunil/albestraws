import React from "react"
import '../../index.css';

const TrainingComponent=({cardItem})=>{
    return(
        <>
            <div className="training-card p-2 flex flex-col gap-2 justify-between max-w-80 lg:max-w-96 bg-[#ffe8ac] hover:-translate-y-3 transition-all ease-in-out duration-700 cursor-pointer">
                <div className="m-3 p-4 rounded-md flex justify-center items-center align-middle bg-[#fffdf9]">
                    <img src={cardItem.image} alt={cardItem.title+"_img"} className=" max-h-36  rounded-lg blend-multiply" />
                </div>
                <div className="w-1/2 border-t-2 border-black"></div>
                <div className="p-3 rounded-md">
                    <div className="">
                        <h2 className="text-2xl font-semibold">{cardItem.title}</h2>
                        <p>{cardItem.description} </p>
                    </div>
                </div>
                <div className="flex justify-end"> <div className="w-1/2 border-t-2  border-black"></div></div>
                <div className="my-3">
                    <a href={cardItem.enrollLink} target="_blank" rel="noreferrer"> 
                        <button className=" training-component-button p-3 rounded-md bg-[#ffc67c] transition-all ease-in-out duration-700 hover:px-10 hover:bg-yellow-400">
                            Enroll Now <span className="font-bold">+</span>
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}
export default TrainingComponent