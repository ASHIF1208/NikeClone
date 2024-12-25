import React from "react";
import Button from '../components/Button'
const Subscribe = () => {
    return <>
        <section className="subscribe-section">
            <h3>Sign Up For &nbsp; 
                <span>Updates</span>
                & Newsletter &nbsp;
            </h3>
            <div className="input-container">
                <input type="email" placeholder="SUbscribe@nike.com" className="input"/>
                <div>
                    <Button label='Subscribe' /> 
                </div>
            </div>
        </section>
    </>;
}

export default Subscribe;