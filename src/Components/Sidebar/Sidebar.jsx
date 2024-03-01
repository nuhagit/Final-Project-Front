import React, { useState } from 'react'
import './Sidebar.css'
import ImageAvatars from '../Avatar/Avatar'

function Sidebar (){
/* 
    const [data, setData] = useState("")(

        async () => {
            const result = await getAllUsers()
            setData(result.data.result)
        }
    */

    return (
        <div id="sidebar">
            <ImageAvatars/>
            <h1> Nuha </h1>
        </div>
    )
}

export default Sidebar