import React, { useState } from "react";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg"
import { statistics } from "../constants";
import bigShoe1 from "../assets/images/big-shoe1.png";
import ShoeCard from "../components/shoeCard";
import { shoes } from "../constants/index";
import "../styles/Hero.css";


const Hero = () => {
    const [bigShoe, setBigShoe] = useState(bigShoe1);
    return <>
      <section id="home" className="hero-section flex-row flex-col">  
      <div className="hero-left">
        <p className="text-xl font-monserrat text-coral-blue">
          All Weather Collections
        </p>
        <h1 className="hero-title">
          <span className="highlight">The Most Latest</span><br/>
          <span className="brand">Nike</span> Shoes
        </h1>
        <p className="hero-description">
          Explore Nike'world of premium sportswear and athlletic footwear. Discover top-quality products designed to enhance your athletic performance and style. Shop the latest collections  and enjoy unbeatable comfort and style. Join the Nike community today.
        </p>
        <Button label={'Shop Now'} iconUrl={arrowRight} />

        <div className="hero-statistics">
          {statistics.map((item, index) => (
            <div key={index} className="hero-statistics-item">
              <p className="value">
                {item.value}
              </p>
              <p className="label">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      <div className="hero-right">
        <img src={bigShoe} alt="shoe"  width={610} height={500} />

        <div className="hero-shoes">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard 
                index={index}
                imgUrl={image}
                changeBigShoe = {(shoe) => setBigShoe(shoe)}
                bigShoe = {bigShoe}
              />
            </div>
          ))}
          
        </div>
      </div>
      </section>
    </>;
  };
  
  export default Hero;
  