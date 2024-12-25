import React from "react";
import Button from '../components/Button';
import shoe8 from '../assets/images/shoe7.png';
import '../styles/Quality.css';

const Quality = () => {
    return <>
    <section className="quality-section">
      <div className="content-container">
        <h2 className="main-heading">
          <span className="highlight-text">Discover <span className="coral-text">Premium</span></span>
          <br />
          <span className="coral-text">Footwear</span>
        </h2>
        <p className="description-text">
          Explore  Nike's world of top-tier sportswear and athletic footwear. Uncover high-quality products meticulously crafted to elavate both your athletic performace and style. Shop the latest collections and indulge in unbeatable comfort and fashion. Join the Nike community today.
        </p>
        <p className="description-text">
          Immerse yourself in our newest collections,delivering unparalled  comfort and unrivaled style. Become a part of the Nike community today and experience the pinnacle of sportswear excellence.
        </p>

        <div className="button-container">
          <Button label={"View Details"}/>
        </div>
      </div>

      <div className="image-container">
        <img src={shoe8} alt="shoe" width={570} height={522} className="shoe-image"/>
      </div>
    </section>
    </>;
  };
  
  export default Quality;
  