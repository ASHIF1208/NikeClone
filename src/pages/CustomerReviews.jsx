import React from "react";
import { reviews} from "../constants";
import ReviewCard from "../components/ReviewCard";
import "../styles/CustomerReviews.css";

const CustomerReviews = () => {
    return <>
      <section className="section">
        <h3>What Our&nbsp; <span>Customers&nbsp;</span>Say?</h3>
        <p>Hear genuine stories from our satisfied cutomers about their exceptional experiences with us.</p>
        <div className="container">
          {reviews.map(( review, index) => (
            <ReviewCard
              key={index} 
              imgURL={review.imgURL} 
              customerName={review.customerName} 
              rating={review.rating} 
              feedback={review.feedback}
            />
          ))}
        </div>
      </section>
    </>;
  };
  
  export default CustomerReviews;
  