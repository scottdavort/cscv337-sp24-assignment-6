'use client';
import React from 'react';
import { useReviews } from '../components/reviewsContext'; // Import useReviews hook

const DisplayReviews = () => {
  const { reviews } = useReviews();

  // testing and debugging
  console.log("All Reviews Data inside DisplayReviews.tsx:", reviews);

  return (
    <div className="flex justify-center">
      <article className="w-full max-w-4xl">
        <section className="space-y-4 bg-slate-900 text-left">
          <p className="text-center text-lg font-bold">REVIEW SECTION</p>

          {reviews.map((review, index) => (
            <article key={index} className="p-4 bg-gray-800 text-white rounded-lg shadow space-y-2">
              <h3 className="text-lg font-bold">Reviewer: {review.name}</h3>
              <p>Server Name: {review.serverName}</p>

              <div className="flex items-center">
                <span className="text-yellow-400">Service Rating: </span>
                {[...Array(review.serviceRating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 ml-1">★</span>
                ))}
              </div>

              <div className="flex items-center">
                <span className="text-yellow-400">Food Quality: </span>
                {[...Array(review.foodQuality)].map((_, i) => (
                  <span key={i} className="text-yellow-400 ml-1">★</span>
                ))}
              </div>

              <div className="flex items-center">
                <span className="text-yellow-400">Ambiance Rating: </span>
                {[...Array(review.ambianceRating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 ml-1">★</span>
                ))}
              </div>

              <p>Location Feedback: {review.locationFeedback}</p>

              <div className="flex items-center">
                <span className="text-yellow-400">Overall Experience: </span>
                {[...Array(review.overallExperience)].map((_, i) => (
                  <span key={i} className="text-yellow-400 ml-1">★</span>
                ))}
              </div>

              <p>Comments: {review.comments}</p>
            </article>
          ))}
        </section>
      </article>
    </div>
  );
};

export default DisplayReviews;