import React from "react";
import { services } from "../constants/index";
import ServiceCard from "../components/ServiceCard";
import '../styles/Services.css'

const Services = () => {
    return <>
    <section className="max-container services-section">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
    </>;
  };
  
  export default Services;
  