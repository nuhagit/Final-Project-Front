import React from 'react'
import MenuAppBar from "../../Components/Header/Header"
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <>
       <div id='center'>
      <MenuAppBar id='header'/>
     </div>
        <ProfileCard/>
    </>
  )
}

export default Profile