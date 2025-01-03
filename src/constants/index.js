// import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";

import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import shieldTick from "../assets/icons/shield-tick.svg"
import support from "../assets/icons/support.svg"
import truckFast from "../assets/icons/truck-fast.svg"
import twitter from "../assets/icons/twitter.svg"

// import { bigShoe1, bigShoe2, bigShoe3,bigShoe4, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3,thumbnailShoe4 } from "../assets/images";

import bigShoe1 from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
import bigShoe4 from "../assets/images/big-shoe4.jpeg";
import customer1 from "../assets/images/customer1.jpeg";
import customer2 from "../assets/images/customer2.jpg";
import shoe4 from "../assets/images/shoe4.png";
import shoe5 from "../assets/images/shoe5.png";
import shoe6 from "../assets/images/shoe6.png";
import shoe7 from "../assets/images/shoe7.png";
import thumbnailShoe1 from "../assets/images/thumbnail-shoe1.svg";
import thumbnailShoe2 from "../assets/images/thumbnail-shoe2.svg";
import thumbnailShoe3 from "../assets/images/thumbnail-shoe3.svg";
import thumbnailShoe4 from "../assets/images/thumbnail-shoe4.svg";



export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
    { href: "/", label: "Sign-in/Register" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
    {
        thumbnail: thumbnailShoe4,
        bigShoe: bigShoe4,
    },
];

export const statistics = [
    { value: '10k+', label: 'Brands' },
    { value: '800+', label: 'Shops' },
    { value: '500k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "AirMax Fusion X",
        price: "Kshs 20,000.20",
    },
    {
        imgURL: shoe5,
        name: "Zoom Ultra Boost",
        price: "Kshs 21,000.20",
    },
    {
        imgURL: shoe6,
        name: "React Volt Runner",
        price: "Kshs 22,000.20",
    },
    {
        imgURL: shoe7,
        name: "Lunar Blaze Elite",
        price: "Kshs 23,000.20",
    },
];

export const services = [
        {
            imgURL: truckFast,
            label: "Quick Delivery",
            subtext: "Enjoy seamless shopping with our fast and reliable delivery service."
        },
        {
            imgURL: shieldTick,
            label: "Payment Security",
            subtext: "Experience worry-free transactions with our secure payment options."
        },
        {
            imgURL: support,
            label: "Dedicated Support",
            subtext: "Our dedicated team is here to assist you every step of the way."
        },
    ];
    
    export const reviews = [
        {
            imgURL: customer1,
            customerName: 'John Smith',
            rating: 4.5,
            feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
        },
        {
            imgURL: customer2,
            customerName: 'Jane Doe',
            rating: 4.5,
            feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
        }
    ];
    

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];