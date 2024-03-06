import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import './Profile.css'
import { GetUserById } from '../../../Services/user.service';
import { useEffect } from 'react';



function Media(props) {
  const { loading = false } = props;
  const [user, setUser] = useState(null)
  const getUser = async () => {
    const result = await GetUserById() 
    setUser(result.result)
    
  }
  useEffect(()=> {
getUser()
  },[])
  return (
    user&&<Card id='profile' sx={{ width: '20vw', height: '60vh', m: 2 }}>
      <CardHeader
    
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography fontWeight={"bold"} fontSize={"26px"}>{user.username}</Typography>
          )
        }
        // subheader={
        //   loading ? (
        //     <Skeleton animation="wave" height={10} width="40%" />
        //   ) : (
        //     user.goal
        //   )
        // }
      />
     {loading ? (
        <Skeleton sx={{ height: 190}} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia sx={{display:'flex', justifyItems:'center'}}
          component="img"
          height="200"
          image="images/Fitness(avatar).png" id="imagenperfil"
          alt=""
        />
        
      )} 

      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
          <p><b>Goal:</b> {user.goal}</p>
          <p><b>Availability: </b>{user.availability} days/week</p>
          <p><b>Age: </b>{user.age}</p>
          <p><b>Height: </b>{user.height} cm</p>
          <p><b>Weigth: </b>{user.weight} kg</p>
          <p><b>Sex: </b>{user.sex}</p>
        </Typography>
        )}
      </CardContent>
    </Card>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function Facebook() {
  return (
    <div id="contenedorp">
      <Media />
      <>
      <img id='calendario' src="images/CALENDARIO.png" alt="anuel" />
      </>
    </div>
  );
}