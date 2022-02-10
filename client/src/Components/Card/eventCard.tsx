import {FC, useContext, useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Skeleton, Grid } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { useNavigate } from 'react-router-dom';
import { qualityImgage } from "../../Utils/qualityImages";
import { gql, useMutation } from '@apollo/client';
import { UserContext } from '../../Context/UserContext';


const ADDEVENT=gql`
mutation(
$userEmail: String!
$eventId: String!
){
  addEvent(eventId:$eventId,userEmail:$userEmail)  
}
`
const REMOVEEVENT=gql`
mutation(
$userEmail: String!
$eventId: String!
){
  removeEvent(eventId:$eventId,userEmail:$userEmail)  
}
`
interface IProps{
  details:any,
}



const  EventCard:FC<IProps>=({details})=> {
  const user =useContext(UserContext)
  const [go,setGo]=useState<boolean>(user.eventList.includes(details.id))
  const navigate=useNavigate()
  const [addEvent]=useMutation(ADDEVENT)
  const [removeEvent]=useMutation(REMOVEEVENT)
const link=qualityImgage(details)

 const addEvents=async()=>{
  const {data} = await addEvent({variables:{
     eventId:details.id,
     userEmail:user.email
   }})
   setGo(true)
 }
 const removeEvents=async()=>{
  const {data} = await removeEvent({variables:{
     eventId:details.id,
     userEmail:user.email
   }})
   setGo(false)
  }


 return(
    <Card   sx={{ minWidth: 400, maxWidth: 400 , maxHeight:"100%",marign:"15px"}} >
      {!details.images[0].url ?
  
  <Skeleton variant="rectangular" animation="wave"   height={140} />
      :
      <CardMedia
      component="img"
      alt={details.name}
      sx={ {maxHeight:"190px"}}
      width="100%"
      height="auto"
      image={link}
    />
      }
      <CardContent sx={{padding:"15px 25px"}}>
        <Typography gutterBottom variant="h5" component="div">
        {
        details.name ? details.name.slice(0,28) :<Skeleton />}
        </Typography>
        <Divider variant="middle" />
        <Typography variant="body1" >
        {details.classifications? details.classifications[0].segment.name+" /  "+
        details.classifications[0].genre.name :(
        <Skeleton />
        )}
         </Typography>
         <Typography variant="body1" >
        {!details.dates? 
        <Skeleton />
        :
        details.dates.start.localDate
        }
         </Typography>
         <Grid container spacing={2} sx={{display:"flex",justifyContent:"start",flexDirection:"row", alignItems:"center"}}>
          <Grid item> 
        <LocationCityIcon/>
        </Grid>
        <Grid item> 
        <Typography variant="body2" >
        {!details._embedded.venues? 
       <Skeleton />
       :
       details._embedded.venues[0].name
         
        }
        </Typography>
        </Grid>
        </Grid> 
      </CardContent>
      <CardActions >
        {go?
            <Button variant="text" size="small" onClick={removeEvents} >Don't Go</Button>
          : 
        <Button variant="text" size="small" onClick={addEvents} >I Go</Button>
}
        <Button variant="text" size="small" onClick={()=>{navigate(`event/${details.id}`)}}>Who Goes ?</Button>
      </CardActions>
     
    </Card>
  );
}
export default EventCard