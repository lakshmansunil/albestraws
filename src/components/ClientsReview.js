import React from 'react';
import quote from '../assets/images/quote.webp'
const reviews = [
  {
    name: 'John Doe',
    review: 'The cloud services provided by Gloom Dev have been outstanding. Our efficiency has improved significantly!',
    rating: 4, 
  },
  {
    name: 'Jane Smith',
    review: 'We’ve seen tremendous growth thanks to the innovative solutions and support from Gloom Dev. Highly recommended!',
    rating: 4,
  },
  {
    name: 'Alice Johnson',
    review: 'Exceptional service and reliable cloud solutions. Gloom Dev truly understands their clients’ needs.',
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 ${index < rating ? 'text-amber-400' : 'text-gray-300'}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.5 14.25l-5.584 2.936 1.066-6.218L.465 6.564l6.243-.907L9.5 0l2.792 5.657 6.243.907-4.517 4.404 1.066 6.218" />
        </svg>
      ))}
    </div>
  );
};

const ClientReviews = () => {
  return (
    <div className='bg-gray-100 '>
        <section className=" py-8 max-w-280 m-auto">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Client Reviews <img src={quote} alt='quote' /></h2>
            <p className="text-lg text-center mb-12">
            At Gloom Dev, we pride ourselves on delivering exceptional cloud services that drive success for our clients.
            Here’s what some of our valued clients have to say about their experience working with us.
            </p>
            <div className="flex flex-wrap justify-center">
            {reviews.map((review, index) => (
                <div key={index} className="max-w-sm mx-4 mb-6 p-6 bg-white rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                <StarRating rating={review.rating} />
                <p className="font-semibold text-gray-900 mt-2">— {review.name}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    </div>
  );
};

export default ClientReviews;
