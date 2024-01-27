import React from "react";
import "./card.css";

const Card = ({ playlist, image, cardClass }) => {
  return (
    <div className={`card ${cardClass}`}>
      <span>{playlist}</span>
      <img src={image} alt={playlist} />
    </div>
  );
};

export default Card;