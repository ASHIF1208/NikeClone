import React from "react";
import '../styles/Services.css';

const ServiceCard = ( {
    imgURL,
    label,
    subtext
}) => {
    return <>
    <div className="service-card">
        <div className="service-card-icon">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
    </div>
    <h3>
        {label}
    </h3>
    <p>
        {subtext}
    </p>
    </>
}

export default ServiceCard