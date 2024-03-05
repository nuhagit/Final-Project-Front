import React, { useEffect, useState } from "react";
import { getExerciseData } from '../../Services/exercises.Service'
import ExerciseCard3 from "./ExerciceCard3"

const ExerciseList3 = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExerciseData(3); 
        console.log(data)
        setExercises(data.exercises);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  const exerciseList3 = () => {
    return exercises.map((exercise) => (
        
      <ExerciseCard3 id='exercisecard2'
        key={exercise.id} 
        title={exercise.name}
        series={exercise.series}
        repetitions={exercise.repetitions}
        description={exercise.description}
      />
    ));
  };

  return exercises && <div>{exerciseList3()}</div>;
};

export default ExerciseList3;