import React from "react";
import star from "../assets/icons/star.svg";
import "../styles/CustomerReviews.css";

const ReviewCard = ({ imgURL, customerName, rating, feedback}) => {
    return <>
        <div className="review-card">
            <img src={imgURL} alt="customer"/>
            <p>{feedback}</p>

            <div className="rating">
                <img src={star} alt="star" width={24} height={24} />
                <p>{rating}</p>
            </div>

            <h3>{customerName}</h3>
            
        </div>
    </>
};

export default ReviewCard;