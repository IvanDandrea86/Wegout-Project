import  { useState } from 'react';
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
  MenuItem,
  InputLabel
} from "@mui/material";
import logo from "../../Assets/Images/logo.svg";
import { VAILDEMAIL, VALID_PASSWORD_8_A_1 } from '../../Utils/constants';
import { useSpring,animated } from 'react-spring';
import Translator from '../../Utils/Translator';
import {gql,useMutation} from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_USER_MUTATION=gql`
mutation($lastname:String!,$firstname:String!,$email:String!,$location:String!,$password:String!){
  createUser(lastname:$lastname,firstname:$firstname,email:$email,location:$location,password:$password){
    errors{field
    message}
user{_id}
    
  }}`



export default function SignUp() {

  const fadeRight=useSpring({
    from:{ opacity :0, marginLeft:200},
    to:{ opacity :1,marginLeft:0},
    config:{duration:1000}
    })

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
    <MenuItem value="GB">United Kingdom</MenuItem>
    <MenuItem value="AL">Albania</MenuItem>
    <MenuItem value="AD">Andorra</MenuItem>
    <MenuItem value="AT">Austria</MenuItem>
    <MenuItem value="BY">Belarus</MenuItem>
    <MenuItem value="BE">Belgium</MenuItem>
    <MenuItem value="BA">Bosnia and Herzegovina</MenuItem>
    <MenuItem value="BG">Bulgaria</MenuItem>
    <MenuItem value="HR">Croatia (Hrvatska)</MenuItem>
    <MenuItem value="CY">Cyprus</MenuItem>
    <MenuItem value="CZ">Czech Republic</MenuItem>
    <MenuItem value="FR">France</MenuItem>
    <MenuItem value="GI">Gibraltar</MenuItem>
    <MenuItem value="DE">Germany</MenuItem>
    <MenuItem value="GR">Greece</MenuItem>
    <MenuItem value="VA">Holy See (Vatican City State)</MenuItem>
    <MenuItem value="HU">Hungary</MenuItem>
    <MenuItem value="IT">Italy</MenuItem>
    <MenuItem value="LI">Liechtenstein</MenuItem>
    <MenuItem value="LU">Luxembourg</MenuItem>
    <MenuItem value="MK">Macedonia</MenuItem>
    <MenuItem value="MT">Malta</MenuItem>
    <MenuItem value="MD">Moldova</MenuItem>
    <MenuItem value="MC">Monaco</MenuItem>
    <MenuItem value="ME">Montenegro</MenuItem>
    <MenuItem value="NL">Netherlands</MenuItem>
    <MenuItem value="PL">Poland</MenuItem>
    <MenuItem value="PT">Portugal</MenuItem>
    <MenuItem value="RO">Romania</MenuItem>
    <MenuItem value="SM">San Marino</MenuItem>
    <MenuItem value="RS">Serbia</MenuItem>
    <MenuItem value="SK">Slovakia</MenuItem>
    <MenuItem value="SI">Slovenia</MenuItem>
    <MenuItem value="ES">Spain</MenuItem>
    <MenuItem value="UA">Ukraine</MenuItem>
    <MenuItem value="DK">Denmark</MenuItem>
    <MenuItem value="EE">Estonia</MenuItem>
    <MenuItem value="FO">Faroe Islands</MenuItem>
    <MenuItem value="FI">Finland</MenuItem>
    <MenuItem value="GL">Greenland</MenuItem>
    <MenuItem value="IS">Iceland</MenuItem>
    <MenuItem value="IE">Ireland</MenuItem>
    <MenuItem value="LV">Latvia</MenuItem>
    <MenuItem value="LT">Lithuania</MenuItem>
    <MenuItem value="NO">Norway</MenuItem>
    <MenuItem value="SJ">Svalbard and Jan Mayen Islands</MenuItem>
    <MenuItem value="SE">Sweden</MenuItem>
    <MenuItem value="CH">Switzerland</MenuItem>
    <MenuItem value="TR">Turkey</MenuItem>
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
              <Button href="/login" variant="text">
             
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
