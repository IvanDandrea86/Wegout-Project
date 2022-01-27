import * as React from 'react';
import {TextField,Box,Button,Modal, Typography} from '@mui/material';
import Translator from "../../Utils/Translator"
import { useState } from 'react';
import {VAILDEMAIL} from '../../Utils/constants'
import { useMutation,gql } from '@apollo/client';
import ErrorMess from "../../Components/Utility/ErrorMess"
import { useNavigate } from 'react-router-dom';
import { PopUp } from './PopUp';
import { sleep } from '../../Utils/utils';



const FORGOT_MUT=gql`
mutation($forgotmail:String!)
{forgotPassword(email:$forgotmail)}`


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function BasicModal() {

const history=useNavigate()
    const [send]=useMutation(FORGOT_MUT)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [message,setMessage]=useState("")
  const [titleMessage,setTitleMessage]=useState("")
  
  const handleClose = () => setOpen(false);
  const [forgotEmail,setforgotEmail]=useState('');
  const [forgotEmailError,setforgotEmailError]=useState(false)
  const [HelperforgotEmail,setHelperforgotEmail]=useState('')
    const [color,setColorState]=useState<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
    >()

  const handleChange =(e:string,field:string)=>{ 
      setforgotEmail(e);
      if (
        e === "" ||
        !e.match(VAILDEMAIL)
      ) {
        setforgotEmailError(true);
        setHelperforgotEmail(
            "Insert a valid email format [*@.*]"        );
      } else {
        setforgotEmailError(false);
        setHelperforgotEmail("")
        setColorState('success')
      }
}

const handleSendEmail = async ()=>
{

const { data,errors} =  await  send({
    variables: {
        forgotmail: forgotEmail,
    },
  });
  if (errors) return <ErrorMess/>
if(data){
  if (forgotEmail===""){
    setTitleMessage("Alert")
    setMessage("Email field is empty!")
  }
  else{
    setTitleMessage("Email Sent")
    setMessage("Check your mailbox, if this email is in our database you will find the link to rest your password")
  }
  handleOpenPopUp()
  await  sleep(5000)
  history("/");
  window.location.reload()

}
}
const [openPop, setOpenPop] = React.useState(false);
const handleOpenPopUp = () => {
  setOpenPop(true);
};
const handleClosePopup = () => {
  setOpenPop(false);
};

  return (
    <div>
      <Button onClick={handleOpen}>
          <Translator trad= "forgotPass" />
      </Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
          <Box
          sx={style}
        >    
          <Box component="form" onSubmit={handleSendEmail} noValidate sx={{ mt: 1 }}>
            <Typography variant="h5" color="inherit">Insert Your Email</Typography>
            <Typography variant="subtitle2" color="inherit">If your email is in our database you will recive the link to rest your password.</Typography>
            <TextField
              onChange={(e) => {
                handleChange(e.target.value,e.target.name);
              }}
              margin="normal"
              required
              fullWidth
              id="forgotEmail"
              label="email"
              name="forgotEmail"
              autoComplete="email"
              value={forgotEmail}
              autoFocus
              error={forgotEmailError}
              color={color}
              helperText={HelperforgotEmail}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Email
            </Button> 
          </Box>
          <Modal
        hideBackdrop
        open={openPop}
        onClose={handleClosePopup}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">{titleMessage}</h2>
          <p id="child-modal-description">
            {message}
          </p>
          <Button onClick={handleClosePopup}>Close</Button>
        </Box>
      </Modal>
          </Box>
          </Modal>
    </div>
  );
}