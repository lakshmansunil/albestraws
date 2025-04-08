import React, { useState } from 'react';

const ServiceCard = ({ index, subtopic }) => {
  const [readMoreState, setReadMoreState] = useState({});

  const toggleReadMore = (index) => {
    setReadMoreState((prevState) => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="flex flex-col md:flex-row max-w-2xl h-auto px-2 mx-auto bg-zinc-100 shadow-lg rounded-lg">
      <div className="w-3/4 m-auto md:w-1/3 bg-cover">
        <img src={subtopic.imageUrl} alt={subtopic.title} className="w-full h-full rounded-lg object-cover" />
      </div>
      <div className="w-full md:w-2/3 p-4">
        <h1 className="text-2xl font-bold text-gray-900">{subtopic.title}</h1>
        <p className="text-gray-700 transition-max-height duration-700 ease-in-out">
          {readMoreState[index] ? subtopic.description : `${subtopic.description.substring(0, 100)}...`}
          <ol className='list-disc p-4'>
          {subtopic.list && readMoreState[index] ? subtopic.list.map((item, index) => (
            <li key={index}>{item}</li>
            )):``}
        </ol>
        </p>
        
        <button
          onClick={() => toggleReadMore(index)}
          className="text-blue-500 hover:text-blue-700 transition-all ease-in-out duration-1000"
        >
          {readMoreState[index] ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
