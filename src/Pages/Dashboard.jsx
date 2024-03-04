import MenuAppBar from "../Components/Header/Header"
import React, { useEffect, useState } from "react"
import BasicTable from "../Components/BasicTable";
import { useParams } from "react-router-dom";
import { getUserData } from "../../Services/user.service";
import { getTrainingData } from "../../Services/training.service";
import './Dashboard.css'

const Dashboard = () => {
  const {userId} = useParams('userId')
  const [user, setUser] = useState({})

  useEffect(() => {

const loadData = async () => { 

  const user = await getUserData(userId)
  const training = await getTrainingData(user.trainingId)
}
loadData()
}, [])

  return (
    <div id='center'>
      <MenuAppBar />
     <div id="table">
     <BasicTable/>
     </div>
      </div>
  )
};

export default Dashboard