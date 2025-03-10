import React from "react";
import "./ServiceCard.css";
const ServiceCard=({title,description})=>{
    return(
        <div className="service-card">
            <h2 className="service-title">{title}</h2>
            <p className="service-description">{description}</p>
        </div>
    );
};

export default ServiceCard;