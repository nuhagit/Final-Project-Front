import MenuAppBar from "../Components/Header/Header"
import './Dashboard.css'
import React, { useEffect, useState } from "react"
import BasicTable from "../Components/BasicTable";
import { useParams } from "react-router-dom";
import { getUserData } from "../../Services/user.service";
import { getTrainingData } from "../../Services/training.service";
import { getExerciseData } from "../../Services/exercises.Service";
import ExerciseList from "../Components/ExerciseCardConfig";
import ExerciseList2 from "../Components/ExerciceCardConfig2";
import ExerciseList3 from "../Components/ExerciceCardConfig3"

const Dashboard = () => {

  const {userId} = useParams('userId')

  //const [user, setUser] = useState({})

  useEffect(() => {

const loadData = async () => { 

  const user = await getUserData(userId)
  const training = await getTrainingData(user.trainingId)

  


}

loadData()

  }, [])





  return (
    <>
    <div id='center'>
      <MenuAppBar id='header'/>
     </div>
      <div id='ejercicios'>
        <h1 id='push'>PUSH DAY</h1>
     <ExerciseList/>
     <h1 id='push'>PULL DAY</h1>
     <ExerciseList2 />
     <h1 id='push'>LEG DAY</h1>
     <ExerciseList3/>
     </div>
     
     
     
   </>
    
    
  )
};

export default Dashboard