import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import  {Box,  Typography } from '@mui/material';



 const ErrorMess=()=> {
  return (
      <div>
          
    <Box sx={{ display: 'flex',  position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    alignItems:"center",
    justifyContent:"center",
    p: 4, }}>
      <Typography  color='inherit'/>
      Ops...something goes wrong 😔
      <Typography/>
    </Box>
    </div>
  );
}
export default ErrorMess;