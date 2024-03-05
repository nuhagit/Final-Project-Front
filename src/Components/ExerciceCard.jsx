import React from "react";
import './ExerciseCard.css'

const ExerciseCard = ({ title, series, repetitions, description }) => {

  return (
      
      <div id='exercises'style={cardStyle}>
        <h3 id='h3'>{title}</h3><br/>
      <span><p>Repetitions: {repetitions}</p>
      <p>Series: {series}</p></span>
      <p>{description}</p><br/>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  maxWidth: "250px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default ExerciseCard;