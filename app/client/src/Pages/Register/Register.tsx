import  { useContext, useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid,
  FormControl,
  Select,
  InputLabel
} from "@mui/material";
import logo from "../../Assets/Images/logo.svg";
import { VAILDEMAIL, VALID_PASSWORD_8_A_1 } from '../../Utils/constants';
import { useSpring,animated } from 'react-spring';
import Translator from '../../Utils/Translator';
import {gql,useMutation} from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { RegisterAnimation } from '../../Assets/Animation/animation';
import {CountryMenuItem} from '../../Components/FormComponents/ContryMenuItem'
import { navigatioContext } from '../../Context/NavContext';
const CREATE_USER_MUTATION=gql`
mutation($lastname:String!,$firstname:String!,$email:String!,$location:String!,$password:String!){
  createUser(lastname:$lastname,firstname:$firstname,email:$email,location:$location,password:$password){
    errors{field
    message}
user{_id}
    
  }}`



export default function SignUp() {
const navigation =useContext(navigatioContext)
  const fadeRight=useSpring(RegisterAnimation)

 const history = useNavigate()
  const [firstnameError, setFirstNameError] = useState<boolean>(false);
  const [lastnameError, setLastNameError] = useState<boolean>(false);
  const [email, setEmail] = useState("");
  const [location,setLocation]=useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [lastname, setLastName] = useState("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [firstname, setFirstName] = useState("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
  const [helperPass, setHelperPassword] = useState("");
  const [helperConfirmPass, setHelperConfirmPass] = useState("");
  const [colorState, setColorState]=useState<
  'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  >()
  const [helperEmail, setHelperEmail] = useState("");
  const [createUser]=useMutation(CREATE_USER_MUTATION)

  const handleSubmit = async (event:React.FormEvent) => {
    event.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    if(email === '') {
      setEmailError(true)
      setHelperEmail('This field is empty')
    }
    if(confirmPassword === '') {
      setConfirmPasswordError(true)
      setHelperPassword('This field is empty')
    }

    if(!(confirmPassword === password)) {
      setPasswordError(true);
      setConfirmPasswordError(true)
      setHelperConfirmPass('Password are different ')
    }

    const { data } = await createUser({
      variables: {
        firstname:firstname,
        lastname:lastname,
        email: email,
        password: password,
        location:location,
      },
    });

    if (data.createUser.user == null) {
      if (data.createUser.errors.field === "Password") {
        setHelperPassword(data.createUser.errors.message);
        setPasswordError(true)
      } else if (data.createUser.errors.field === "Email") {
        setHelperEmail(data.createUser.errors.message);
        setEmailError(true)
      }
    } else {
      //createUser SUCCESS
      history("/");
      window.location.reload()
    }

    }
  
 
 const handleChange =(e:string,field:string)=>{ 
    if(field==="password"){
      setPassword(e);
      if (
        e === "" ||
        !e.match(VALID_PASSWORD_8_A_1)
      ) {
        setPasswordError(true);
        setHelperPassword(
          "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
        );
      } else {
        setPasswordError(false);
        setHelperPassword("")
        setColorState('success')
      }
    }
    else if (field==="email"){
      setEmail(e);
      if (
        e === "" ||
        !e.match(
        VAILDEMAIL)
      ) {
        setEmailError(true);
        setHelperEmail("Insert a valid email format [*@.*]");
  
      } else {
        setEmailError(false);
        setHelperEmail("");
        setColorState('success')
      }
    }

  }

  const handlePasswordConfirmChange = (e:string, password:string) => {
    setConfirmPassword(e);
    if (e === "") {
      setConfirmPasswordError(true);
      setHelperPassword(
        "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
      );
    } else if (e !== password) {
      setConfirmPasswordError(true);
      setHelperConfirmPass("Passwords must bethe same ");
    } else {
      setConfirmPasswordError(false);
      setHelperConfirmPass("");
      setHelperPassword("");
      setColorState('success')
 
    }
  };
  const handleSelect=(e:string)=>{
    setLocation(e)
  }
  return (
    <animated.div style={fadeRight}> 
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
            >
          <Link href={'/'}>
            <img src={logo} alt="logo" />
            </Link>
          <Typography component="h2" variant="h5" sx={{mt:1, fontWeight: 'bold'}}>
            Don't wait anymore!
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setFirstNameError(false);
                  }}
                  autoComplete="given-name"
                  name="firstName"
                  value={firstname}
                  required
                  fullWidth
                  id="firstNameNew"
                  label="First Name"
                  autoFocus
                  color={colorState}
                  error={firstnameError}
                />

              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <TextField
      onChange={(e) => {
                    setLastName(e.target.value);
                    setLastNameError(false);
                  }}
                  required
                  fullWidth
                  id="lastNameNew"
                  label="Last Name"
                  name="lastName"
                  value={lastname}
                  autoComplete="family-name"
                  error={lastnameError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => handleChange(e.target.value,'email')}
                  required
                  fullWidth
                  value={email}
                  id="email_register"
                  label="Email Address"
                  error={emailError}
                  name="email"
                  autoComplete="email"
                  color={colorState}
                  helperText={helperEmail}
                />
              </Grid>
              <Grid item xs={12}>
              
                <FormControl fullWidth>
  <InputLabel id="Location">Location</InputLabel>
  <Select
    labelId="Location"
    id="LocationSelect"
    value={location}
    label="Location"
    onChange={(e)=>handleSelect(e.target.value)}
  >
    <CountryMenuItem/>
  </Select>
</FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={ (e) => handleChange(e.target.value,'password')}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="Password"
                  value={password}
                  id="password_register"
                  error={passwordError}
                  color={colorState}
                  autoComplete="new-password"
                  helperText={helperPass}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) =>
                    handlePasswordConfirmChange(e.target.value, password)
                  }
                  name="password_confirm"
                  label="Confirm password"
                  type="password"
                  value={confirmPassword}
                  id="password_confirm"
                  error={confirmPasswordError}
                  autoComplete="new-password"
                  color={colorState}
                  helperText={helperConfirmPass}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              onSubmit={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
            <Grid item xs>
              <Button onClick={()=>{navigation.setLink("login")}} variant="text">
             
             <Translator trad= "alredyRegister" />
              </Button>
            </Grid>

          </Grid>
          </Box>
          
        </Box>

 
        
      </Container>
      </animated.div>
  );
}
