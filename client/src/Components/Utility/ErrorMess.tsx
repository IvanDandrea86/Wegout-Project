import  {Box,  Typography } from '@mui/material';
import { absolutCenter } from '../../Assets/Style/style';



 const ErrorMess=()=> {
  return (
      <div>
          
    <Box sx={absolutCenter}>
      <Typography  color='inherit'/>
      Ops...something goes wrong 😔
      <Typography/>
    </Box>
    </div>
  );
}
export default ErrorMess;