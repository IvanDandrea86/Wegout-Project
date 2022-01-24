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
import { getEventsDetails } from '../../Utils/getEventDetails';


interface IProps{

  id:string ,
  
}



const  EventCard:FC<IProps>=({id})=> {
  const [pics,setPics]=useState<string|null>(null)
  const [details,setDetails]=useState({}as any)

  
   useEffect(()=>{ 
    
     getEventsDetails(id,setDetails)
    },[])

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
        {details.name ? details.name :<Skeleton />}
        </Typography>

        {/* <Typography variant="body1" color="text.secondary">
        {details.classifications? details.classifications :(
        <Skeleton />
        )}
         </Typography> */}
        <Typography variant="body2" color="text.secondary">
        {details.description? details.description :(
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