import MenuAppBar from "../Components/Header/Header"
import './Dashboard.css'
import React from "react"
import BasicTable from "../Components/Table";



const Dashboard = () => {
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