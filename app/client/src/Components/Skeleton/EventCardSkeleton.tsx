import {FC} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { Skeleton } from '@mui/material';






const  EventCardSkeleton:FC=()=> {
  

  return (
    
    <Card   sx={{ maxWidth: 345 }}>
      <Skeleton variant="rectangular" animation="wave"   height={140} />
      <CardContent>
        <Skeleton />
        <Skeleton />
     </CardContent>
      <CardActions>
        <Button size="small">I Go</Button>
        <Button size="small">Who Goes ?</Button>
      </CardActions>
    </Card>
  
  
  
  );
}
export default EventCardSkeleton