'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for our review and export it
export type Review = {
  name: string;
  serviceRating: number;
  serverName: string;
  foodQuality: number;
  ambianceRating: number;
  locationFeedback: string;
  overallExperience: number;
  comments: string;
};

// Create a context to store reviews
type ReviewsContextType = {
  reviews: Review[];
  addReview: (newReview: Review) => void; // Function to add a new review
};

// Create a context to store reviews and provide a default value of undefined
const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined);

// Create a provider to store reviews
export const ReviewsProvider = ({ children }: { children: ReactNode }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  // Function to add a new review
  const addReview = (newReview: Review) => {
    setReviews((currentReviews) => [...currentReviews, newReview]); // Add the new review to the reviews array
    console.log("New Review Added:", newReview);
    console.log("All Reviews:", reviews);
  };

  // Provide the reviews and addReview function to the children
  return (
    <ReviewsContext.Provider value={{ reviews, addReview } }>
  {children}
  </ReviewsContext.Provider>
  );
};

// Create a hook to use the reviews context in a component
// if the hook is used outside of a ReviewsProvider, throw an error
export const useReviews = () => {
  const context = useContext(ReviewsContext);
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewsProvider');
  }
  return context;
};
