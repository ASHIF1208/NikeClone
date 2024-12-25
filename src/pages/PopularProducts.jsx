import React from "react";
import { products } from "../constants/index";
import PopularProductsCard from "../components/PopularProductsCard";
import "../styles/PopularProducts.css";

const PopularProducts = () => {
    return <>
    <div className="popular-products-container" id="products">
      <div className="header-section">
        <h2 className="main-heading">
          Our Popular <span className="highlighted-text">Products</span>
        </h2>
        <p className="sub-heading-text">
          Explore top-quality products meticulously creafted to elevate your athletic performance and enhance your personal style.
        </p>
      </div>
      
      <div className="products-grid">
        {products.map((product)=> (
          <PopularProductsCard key={product.name} {...product}/>
          ))
        }
      </div>
    </div>
    </>;
  };
  
  export default PopularProducts;
  