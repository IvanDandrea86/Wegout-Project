

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid'
import { FOOTER_TEXT } from '../../Utils/constants';
import Localization from '../Localization/Localization';

import { CssBaseline } from '@mui/material';

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
    {/* <CssBaseline/> */}
    <Box
    component="footer"
    sx={{
     
      mt: 10,
      
    }}
    >
        <Container maxWidth="sm" >
        <Grid container flex={"center"} justifyContent={"center"} alignItems={"center"}> 
  
          <Copyright />
      <Localization />
          
          </Grid>
        </Container>
      </Box>

</footer>
  );
}
export default Footer;