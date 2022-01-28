import {FC} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, Skeleton, Grid } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';




interface IProps{

  details:any,
  
  
}



const  EventCard:FC<IProps>=({details})=> {
 console.log(details)   
 return(
    <Card   sx={{ minWidth: 400, maxWidth: 400 , maxHeight:"100%"}} >
      {details.images[0].url?
      <CardMedia
        component="img"
        alt={details.name}
        sx={ {maxHeight:"190px"}}
        width="100%"
        height="auto"
        image={details.images[0].url}
      />
      :
      <Skeleton variant="rectangular" animation="wave"   height={140} />
      }
      <CardContent >
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
        {details.dates? details.dates.start.localDate :(
        <Skeleton />
        )}
         </Typography>
         <Grid container spacing={2} sx={{display:"flex",justifyContent:"start",flexDirection:"row", alignItems:"center"}}>
          <Grid item> 
        <LocationCityIcon/>
        </Grid>
        <Grid item> 
        <Typography variant="body2" >
        {details._embedded.venues? details._embedded.venues[0].name
       :(
         <Skeleton />
         )
        }
        </Typography>
        </Grid>
        </Grid>
      
      </CardContent>
      <CardActions >
        <Button variant="text" size="small">I Go</Button>
        <Button variant="text" size="small">Who Goes ?</Button>
      </CardActions>
     
    </Card>

  
  
  
  );
}
export default EventCard