import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  CssBaseline,
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
import { VAILDEMAIL, VALID_PASSWORD_8_A_1 } from "../../Utils/constants";
import { gql, useMutation } from "@apollo/client";
import ThemeSwitch from "../../Components/ThemeSwitch/ThemeSwitch";
import Translator from '../../Utils/Translator';

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
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailColor, setEmailColor] = useState<
    "primary" | "secondary" | "error" | "info" | "success" | "warning"
  >("primary");
  const [passwordColor, setPasswordColor] = useState<
    "primary" | "secondary" | "error" | "info" | "success" | "warning"
  >("primary");
  const [helperPass, setHelperPass] = useState<string>("");
  const [helperEmail, setHelperEmail] = useState<string>("");
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
        setHelperPass(data.login.errors.message);
      } else if (data.login.errors.field === "Email") {
        setHelperEmail(data.login.errors.message);
      }
    } else {
      //LOGIN SUCCESS
      history("/");
      window.location.reload()
    }
  };
  const handleEmailChange = (e: string) => {
    setEmail(e);
    if (e === "" || !e.match(VAILDEMAIL)) {
      setEmailError(true);
      setHelperEmail("Insert a valid email format [*@.*]");
    } else {
      setEmailError(false);
      setHelperEmail("");
      setEmailColor("success");
    }
  };
  const handlePasswordChange = (e: string) => {
    setPassword(e);
    if (e === "" || !e.match(VALID_PASSWORD_8_A_1)) {
      setPasswordError(true);
      setHelperPass(
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
    } else {
      setPasswordError(false);
      setHelperPass("");

      setPasswordColor("success");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
              handleEmailChange(e.target.value);
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
            onChange={(e) => handlePasswordChange(e.target.value)}
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
            helperText={helperPass}
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
              <Link href="#" variant="body2">
              <Translator trad= "forgotPass" />
            
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="/register" variant="body2">
              <Translator trad= "notRegister" />
            
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
