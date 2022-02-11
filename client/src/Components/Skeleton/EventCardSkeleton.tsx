import {FC, Fragment} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Skeleton } from '@mui/material';


const  EventCardSkeleton:FC=()=> {
  
  return (
   <Fragment>
      <Skeleton variant="rectangular" animation="wave"   height={140} />
   
        <Skeleton />
        <Skeleton />
  
  
        <Button size="small">I Go</Button>
        <Button size="small">Who Goes ?</Button>
</Fragment>
   
  );
}
export default EventCardSkeleton