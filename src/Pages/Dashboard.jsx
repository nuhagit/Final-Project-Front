import MenuAppBar from "../Components/Header/Header"
import './Dashboard.css'
import React, { useEffect, useState } from "react"
import BasicTable from "../Components/BasicTable";
import { useParams } from "react-router-dom";
import { getUserData } from "../../Services/user.service";
import { getTrainingData } from "../../Services/training.service";
import { getExerciseData } from "../../Services/exercises.Service";
import ExerciseList from "../Components/ExerciseCardConfig";
import ExerciseCard from "../Components/ExerciceCard";
const Dashboard = () => {

  const {userId} = useParams('userId')

  //const [user, setUser] = useState({})

  useEffect(() => {

const loadData = async () => { 

  const user = await getUserData(userId)
  const training = await getTrainingData(user.trainingId)

  const exercise = await getExerciseData(user.trainingId)


}

loadData()

  }, [])





  return (
    <>
    <div id='center'>
      <MenuAppBar id='header'/>
     </div>
      <div id='ejercicios'>
     <ExerciseList />
     </div>
   </>
    
    
  )
};

export default Dashboard