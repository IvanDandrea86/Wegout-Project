import { useParams,useNavigate } from "react-router-dom"
import {FC }from 'react'
import {Container,Box,TextField,Button, Typography} from '@mui/material'
import { useState } from "react"
import { VALID_PASSWORD_8_A_1 } from "../../Utils/constants"
import {gql,useMutation} from '@apollo/client'



const CHANGE_PASS=gql`
mutation($token:String!,$newPassword:String!){changePassword(token:$token,password:$newPassword){
  errors{field message}
  user{_id}
}}
`

const ForgotPassword:FC=()=>{

    const {token} =useParams()
    const history = useNavigate();

    
    const [newPassword,setNewPassword]=useState<string>("")
    const [confirmPassword,setConfirmPassword]=useState<string>("")
    const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);
    const [newPasswordError, setNewPasswordError] = useState<boolean>(false);
  const [helperNewPass, setHelperNewPass] = useState("");
  const [helperConfirmPass, setHelperConfirmPass] = useState("");
  const [colorState, setColorState]= useState<
  'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
  >()

   const [changePass]=useMutation(CHANGE_PASS)

   const handleSubmit =async (event: React.SyntheticEvent)=> 
   {
     event.preventDefault();
      if(newPasswordError===false && confirmPasswordError===false){
        const {data}=await changePass({variables:{
        token:token,
        newPassword:newPassword
         }}) 
        
        if(data.changePassword.errors){
        // console.log(data.changePassword.errors.field)
        // console.log(data.changePassword.errors.message)
      }
      else{
        history("/");
        window.location.reload()
      }
      }
  }

    const handleChange =(e:string,field:string)=>{ 
        if(field==="newPassword"){
          setNewPassword(e);
          if (
            e === "" ||
            !e.match(VALID_PASSWORD_8_A_1)
          ) {
            setNewPasswordError(true);
            setHelperNewPass(
              "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
            );
          } else {
            setNewPasswordError(false);
            setHelperNewPass("")
            setColorState('success')
          }
        }
    else if(field==="confirmPassword")
            {          
        setConfirmPassword(e);
        if (e === "") {
          setConfirmPasswordError(true);
          setHelperNewPass(
            "Password must be at least 8,contain at leat one digit, one uppercase and one lowercase character"
          );
        } else if (e !== newPassword) {
          setConfirmPasswordError(true);
          setHelperConfirmPass("Passwords must bethe same ");
        } else {
          setConfirmPasswordError(false);
          setHelperConfirmPass("");
          setHelperNewPass("");
          setColorState('success')
     
        }
      };
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
             <Typography variant="h5" color="inherit">Reset Password</Typography>
            <Typography variant="subtitle2" color="inherit">Choose your new password.</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(e) => {
                handleChange(e.target.value,e.target.name);
              }}
              margin="normal"
              required
              fullWidth
              id="newPass"
              label="new password"
              name="newPassword"
              autoComplete="password"
              type="password"
              value={newPassword}
              autoFocus
              error={newPasswordError}
              color={colorState}
              helperText={helperNewPass}
            />
            <TextField
              onChange={(e) => handleChange(e.target.value,e.target.name)}
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              value={confirmPassword}
              label="confirm password"
              type="password"
              id="confirm password"
              color={colorState}
              autoComplete="current-password"
              error={confirmPasswordError}
              helperText={helperConfirmPass}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Confirm
            </Button>
            
          </Box>
        </Box>
      </Container>

        
        
      
    )
  }
          


export default ForgotPassword;