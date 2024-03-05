import React, { useEffect, useState } from "react";
import { getExerciseData } from '../../Services/exercises.Service'
import ExerciseCard from "./ExerciceCard"

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExerciseData(1); 
        console.log(data)
        setExercises(data.exercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  const exerciseList = () => {
    return exercises.map((exercise) => (
        
      <ExerciseCard id='exercisecard'
        key={exercise.id} 
        title={exercise.name}
        series={exercise.series}
        repetitions={exercise.repetitions}
        description={exercise.description}
      />
    ));
  };

  return exercises && <div>{exerciseList()}</div>;
};

export default ExerciseList;
