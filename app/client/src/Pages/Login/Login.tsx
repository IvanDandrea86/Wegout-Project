import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";
import logo from "../../Assets/Images/logo.svg";

export const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
     

      <CssBaseline />

      <Box
        sx={{
          mt: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
          <img src={logo} alt="logo" />
        <Typography component="h2" variant="h5" sx={{mt:5, fontWeight: 'bold'}}>
          Let's GO...!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="forgot" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Link href="/register" variant="body2">
              Not registered?
            </Link>
          </Grid>
        </Box>
      </Box>

    </Container>
  );
};
