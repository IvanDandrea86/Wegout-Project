import {FC,useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getPhotos } from "../../Utils/getPhotos";
import { unsplashAPI } from "../../Utils/constants";
import { Skeleton } from '@mui/material';


interface IProps{

  title:string |null,
  desc:string |null,
}



const  EventCard:FC<IProps>=({title,desc})=> {
  const [pics,setPics]=useState({} as string)
  
  useEffect(()=>{
    getPhotos(unsplashAPI,"music",setPics)
  },[])
  

  return (
    
    <Card   sx={{ maxWidth: 345 }}>
      {pics?
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={pics}
      />
      :
      <Skeleton variant="rectangular" animation="wave"   height={140} />
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title ? title :<Skeleton />}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {desc? desc :(
        <Skeleton />
       
        )
        }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">I Go</Button>
        <Button size="small">Who Goes ?</Button>
      </CardActions>
    </Card>
  
  
  
  );
}
export default EventCard