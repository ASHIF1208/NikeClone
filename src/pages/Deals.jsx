import React from "react";
import offer from "../assets/images/customer1.jpeg";
import arrowRight from "../assets/icons/arrow-right.svg";
import Button from '../components/Button';
import '../styles/Deals.css'

const Deals = () => {
    return <>
    <section className="section">
        <div className="image-container">
            <img src={offer} alt="deals" width={773} height={687} className=""/>
        </div>
        <div  className="text-content">
            <h2>
                <span>Exclusive</span>Deals
            </h2>
            <p>
                Embark on a shopping adventure filled with extraordinary offers. From premium selections to unbeatable discounts, we provide unmatched value that  distinguishes us.
            </p>
            <p>
                Explore a world of possibilities crafted to satisfy your unique desires, surpassing even the highest expectations.Your journey with us is nothing short of remarkable. 
            </p>

            <div className="buttons-container">
                <Button lable="Shop now" iconURL={arrowRight}/>
                <Button label="Learn More" />
            </div>
        </div>
    </section>
    </>;
}

export default Deals;