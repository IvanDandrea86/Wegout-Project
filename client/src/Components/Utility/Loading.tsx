import CircularProgress from '@mui/material/CircularProgress';
import  {Box } from '@mui/material';
import { absolutCenter } from '../../Assets/Style/style';


 const Loading=()=> {
  return (
      <div>
      
    <Box sx={absolutCenter}>
      <CircularProgress  color='inherit'/>
    </Box>
    </div>
  );
}
export default Loading;