import React, { useEffect, useState } from "react";
import { getExerciseData } from '../../Services/exercises.Service'
import ExerciseCard2 from "./ExerciceCard2"

const ExerciseList2 = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExerciseData(2); 
        console.log(data)
        setExercises(data.exercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  const exerciseList2 = () => {
    return exercises.map((exercise) => (
        
      <ExerciseCard2 id='exercisecard2'
        key={exercise.id} 
        title={exercise.name}
        series={exercise.series}
        repetitions={exercise.repetitions}
        description={exercise.description}
      />
    ));
  };

  return exercises && <div>{exerciseList2()}</div>;
};

export default ExerciseList2;