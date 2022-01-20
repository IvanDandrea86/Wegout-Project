

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { FOOTER_TEXT } from '../../Utils/constants';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary"  textAlign={'center'}>
      {FOOTER_TEXT +' '}
      <Link color="inherit" href="https://localhost:3000">
        WeGOut.io
      </Link>{' '}
      {'.'}
    </Typography>
  );
}
const  Footer=()=> {
  return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
         
          <Copyright />
        </Container>
      </Box>

  );
}
export default Footer;