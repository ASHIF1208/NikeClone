import React from "react";

const Button = ({
    label,
    iconUrl,
    backgroundColor,
    textColor,
    borderColor,
    fillWidth,
}) => {
    return <>
        <button 
        className={`
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'blue white coral-blue text-white border-coral-blue'
        } rounded-full ${fillWidth && "w-full"}`}>
            {label && <span>{label}</span>}
            {iconUrl && <img src={iconUrl} alt="icon" ></img>}
        </button>
    </>
}
 
export default Button;