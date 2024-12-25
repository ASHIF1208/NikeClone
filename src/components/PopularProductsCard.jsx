import React from "react";
import star from "../assets/icons/star.svg";
import "../styles/PopularProducts.css";

const PopularProductsCard = ({
    imgURL,
    name,
    price
}) => {
    return <>
    <div className="card-container">
        <div className="image-container">
            <img src={imgURL} alt={name} className="product-image" />
        </div>

        <div className="info-container">
            <div className="rating">
                <img src={star} alt="star" width={24} height={24}/>
                <p className="rating-text">(4.5)</p>
            </div>
            <h3 className="product-name">
                {name}
            </h3>
            <p className="product-price">
                {price}
            </p>
        </div>
    </div>
    </>
}

export default PopularProductsCard