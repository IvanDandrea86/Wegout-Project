

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import { FOOTER_TEXT } from '../../Utils/constants';
import Localization from '../Localization/Localization';



function Copyright() {
  return (
    <Typography variant='body2' color="text.secondary"  textAlign={'center'}>
      {FOOTER_TEXT +' '}
      <Link color="inherit" href="https://localhost:3000">
        WeGOut.io
      </Link>{' '}
     
    </Typography>
  );
}
const  Footer=()=> {
  return (
<footer>
 
    <Box
    component="footer"
    sx={{  
      mt:5   
    }}
    >
        <Container maxWidth="sm" >
        <Grid container sx={{
     display: "flex",
     justifyContent:"space-around",
     flexDirection:"row",
     alignItems:"center"
   }}> 
          <Copyright />
      <Localization />
          </Grid>
        </Container>
      </Box>

</footer>
  );
}
export default Footer;