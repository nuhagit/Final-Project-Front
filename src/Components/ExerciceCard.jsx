import React from "react";
import './ExerciseCard.css'

const ExerciseCard = ({ title, series, repetitions, description }) => {

  return (
    <div id='exercises'style={cardStyle}>
      <h3>{title}</h3>
      <p>Series: {series}</p>
      <p>Repetitions: {repetitions}</p>
      <p>Description: {description}</p>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  margin: "16px",
  maxWidth: "300px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default ExerciseCard;