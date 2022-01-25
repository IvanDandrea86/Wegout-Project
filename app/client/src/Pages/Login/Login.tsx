import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,

  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
} from "@mui/material";
import logo from "../../Assets/Images/logo.svg";
import { gql, useMutation } from "@apollo/client";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch";
import Translator from '../../Utils/Translator';
import ForgotModal from "../../Components/Modal/ForgotModal";
import { isEmptyString, isValidEmail, isValidPassword } from "../../Components/Utility/validation";

const LOGIN_MUT = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        field
        message
      }
      user {
        _id
      }
    }
  }
`;

export default function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [helperPassword,setHelperPassword]=useState<string>("")
  const [helperEmail,setHelperEmail]=useState<string>("")
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailColor, setEmailColor] = useState<
    "primary" | "secondary" | "error" | "info" | "success" | "warning"
  >("primary");
  const [passwordColor, setPasswordColor] = useState<
    "primary" | "secondary" | "error" | "info" | "success" | "warning"
  >("primary");
  const [login] = useMutation(LOGIN_MUT);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (password === "") {
      setPasswordError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    const { data } = await login({
      variables: {
        email: email,
        password: password,
      },
    });
    if (data.login.user == null) {
      if (data.login.errors.field === "Password") {
        setHelperPassword(data.login.errors.message);
        setPasswordError(true)
      } else if (data.login.errors.field === "Email") {
        setHelperEmail(data.login.errors.message);
        setEmailError(true)
      }
    } else {
      //LOGIN SUCCESS
      history("/");
      window.location.reload()
    }
  };
 

  const handleChange=(e:HTMLTextAreaElement | HTMLInputElement)=>{
    if(e.name==="email"){
      setEmail(e.value)
      if (!isValidEmail(e.value) || !isEmptyString(e.value)){
        setHelperEmail("Insert a valid email format [*@.*]")
        setEmailError(true)
      }
      else{
        setEmailError(false);
        setHelperEmail("")
        setEmailColor("success");
      }
    }
    if(e.name==="password"){
      setPassword(e.value)
      if (!isValidPassword(e.value) || !isEmptyString(e.value)){
        setHelperPassword("Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character")
        setPasswordError(true)
      }
      else{
        setPasswordError(false);
        setHelperPassword("")
        setPasswordColor("success");
      }
    }
  }
  return (
    <Container component="main" maxWidth="xs">
  
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ThemeSwitch />

        <Link href={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <Typography
          component="h2"
          variant="h5"
          sx={{ mt: 1, fontWeight: "bold" }}
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={(e) => {
              handleChange(e.target);
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            autoFocus
            error={emailError}
            color={emailColor}
            helperText={helperEmail}
          />
          <TextField
            onChange={(e) => handleChange(e.target)}
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            color={passwordColor}
            autoComplete="current-password"
            error={passwordError}
            helperText={helperPassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
              <Translator trad= "forgotPass" />
            
              </Link> */}
              <ForgotModal/>
            </Grid>
            <Grid item xs>
              <Button href="/register" variant="text">
              <Translator trad= "notRegister" />
            </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
