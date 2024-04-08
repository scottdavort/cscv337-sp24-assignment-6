'use client';
import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useReviews } from '../components/reviewsContext'; // Import useReviews hook

// Review form component for our form app 
export default function ReviewForm() {
  const { addReview } = useReviews();
  const router = useRouter();

  // Define the Review type and set the default state
  const [review, setReview] = useState<Review>({
    // default state
    name: '',
    serviceRating: 0,
    serverName: '',
    foodQuality: 0,
    ambianceRating: 0,
    locationFeedback: '',
    overallExperience: 0,
    comments: '',
  });


  const isFormFilled = true;

  // Constants for validation
  const textInputPattern = "^[a-zA-Z0-9 .,!?']*$";
  const maxLength = 250;


  // check if all fields are filled
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isNumericField = ['overallExperience', 'serviceRating', 'foodQuality', 'ambianceRating'].includes(name);

    if (!isNumericField && (!new RegExp(textInputPattern).test(value) || value.length > maxLength)) {

      return;
    }

    setReview(prevReview => ({
      ...prevReview,
      [name]: isNumericField ? parseInt(value, 10) : value,
    }));
  };


  console.log(isFormFilled)


  // submit the form and reset the form fields, push to the home page

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview(review);
    // Reset form fields after submission
    setReview({
      name: '',
      serviceRating: 0,
      serverName: '',
      foodQuality: 0,
      ambianceRating: 0,
      locationFeedback: '',
      overallExperience: 0,
      comments: '',
    });
    router.push('/'); // Navigates back to the home page, adjust if necessary
  };



  return (

    <form onSubmit={handleSubmit} className="bg-gray-900 text-white p-6 rounded-lg space-y-4" suppressHydrationWarning={true}>
      {/* Form fields here */}
      <div>
        

        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={review.name}
          onChange={handleChange}
          maxLength={maxLength}
          pattern={textInputPattern}
          className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white"
          required
        />
      </div>

      {/* Form Field for overallExperience */}
      <div>
        <p>{review.name}</p>
        <label htmlFor="overallExperience" className="block text-sm font-medium text-gray-300">Overall Experience (1-5):</label>
        <select
          name="overallExperience"
          id="overallExperience"
          value={review.overallExperience.toString()}
          onChange={handleChange}
          className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white"
          required
        >
          <option value="0" disabled>Select a rating</option>
          {[1, 2, 3, 4, 5].map(rating => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
      </div>

   
      {/* Form Field for Server's Name */}
      <div>
        <label htmlFor="serverName" className="block text-sm font-medium text-gray-300">Servers Name:</label>
        <input
          type="text"
          name="serverName"
          id="serverName"
          value={review.serverName}
          onChange={handleChange}
          maxLength={maxLength}
          pattern={textInputPattern}
          className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white"
          required
        />
      </div>

      {/* Form Field for Food Quality Rating */}
      <div>
        <label htmlFor="foodQuality" className="block text-sm font-medium text-gray-300">Food Quality (1-5):</label>
        <select
          name="foodQuality"
          id="foodQuality"
          value={review.foodQuality.toString()}
          onChange={handleChange}
          className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white"
          required
        >
          <option value="0" disabled>Select a rating</option>
          {[1, 2, 3, 4, 5].map(rating => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
      </div>

      {/* Form Field for Ambiance Rating */}
      <div>
        <label htmlFor="ambianceRating" className="block text-sm font-medium text-gray-300">Ambiance Rating (1-5):</label>
        <select
          name="ambianceRating"
          id="ambianceRating"
          value={review.ambianceRating.toString()}
          onChange={handleChange}
          className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white"
          required
        >
          <option value="0" disabled>Select a rating</option>
          {[1, 2, 3, 4, 5].map(rating => (
            <option key={rating} value={rating}>{rating}</option>
          ))}
        </select>
      </div>

      {/* Textarea for Location Feedback */}
      <div>
        <label htmlFor="locationFeedback" className="block text-sm font-medium text-gray-300">Location Feedback:</label>
        <textarea
          name="locationFeedback"
          id="locationFeedback"
          value={review.locationFeedback}
          onChange={handleChange}
          maxLength={maxLength}

          className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white"
          required
        />
      </div>

      {/* Textarea for Additional Comments */}
      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-gray-300">Additional Comments:</label>
        <textarea
          name="comments"
          id="comments"
          value={review.comments}
          onChange={handleChange}
          maxLength={maxLength}

          className="mt-1 block w-full p-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm text-white"
          required
        />
      </div>


      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={!isFormFilled} // Disable the button based on isFormFilled
          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md ${isFormFilled ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500'
            } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          Submit Review
        </button>
      </div>
    </form>
  );
}
