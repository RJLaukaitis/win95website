import React from 'react';
import './BusinessCard.css'; // Make sure the CSS file is imported
import frontCard from "../../images/FrontCard2.png"
import backCard from "../../images/BackCard.png"

const BusinessCard = () => {
  return (
    <div className="page-container">
    <div className="card-container">
      <div className="card">
        <div className="front">
          <img src={frontCard}alt="Front Side of Business Card" />
        </div>
        <div className="back">
          <img src={backCard} alt="Back Side of Business Card" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default BusinessCard;