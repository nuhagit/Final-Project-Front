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
    user&&<Card sx={{ width: '80vw', height: '60vh', m: 2 }}>
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar
              alt="Ted talk"
              src="images/Fitness(avatar).png"
            />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            user.username
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            user.goal
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="400"
          image="https://media.istockphoto.com/id/1440204155/es/vector/el-gr%C3%A1fico-de-barras-disminuye-reduciendo-el-negocio.jpg?s=612x612&w=0&k=20&c=WWpauFHtNcU_lLb5Fd-pWRT_eR6nuhyQ92XY7oVZwuQ="
          alt="Nicola Sturgeon on a TED talk stage"
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
            {
             
            }
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
    <div>
      <Media />
    </div>
  );
}