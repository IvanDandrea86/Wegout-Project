import { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  Avatar,
  Badge,
  Button,
  Typography,
  Divider,
  TextareaAutosize,
  Fab,
} from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { AvatarGenerator } from "random-avatar-generator";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { gql, useMutation } from "@apollo/client";
import {
  flexColumCenter,
  flexRowCenter,
  flexStartCenter,
} from "../../Assets/Style/style";
import { Box } from "@mui/system";

const REQUEST_VERIFY = gql`
  mutation ($email: String!) {
    requestVerifyEmail(email: $email)
  }
`;
const UPDATEMUTATION=gql`
mutation($email:String!,$info:UserInfoInput!)
{updateUser(info:$info,email:$email){
  _id
}}`
export const Profile: FC = () => {
  const navigate=useNavigate()

  const user = useContext(UserContext);
  const [state, setState] = useState({
    Age: user.info.age,
    Interest: user.info.interest,
    Job: user.info.job,
    Bio: user.info.bio,
  });

  const [verifiedColor, setVerifiedColor] = useState<
    | "disabled"
    | "inherit"
    | "action"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined
  >("disabled");
  const [verify] = useMutation(REQUEST_VERIFY);
  const[update]=useMutation(UPDATEMUTATION)
  const [modify, setModify] = useState<boolean>(false);
  const FullName = user.firstname + " " + user.lastname;
  const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar(user.email as string);
  // Simply get a random avatar

  const handleVerify = async () => {
    const { data } = await verify({
      variables: {
        email: user.email,
      },
    });
    if (data) {
      console.log("email sent");
    }
    // add modal
  };
  const hanleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.name) {
      let array = event.target.value.split(",");
      setState({
        ...state,
        [event.target.name]: array,
      });
    } else {
      const value = event.target.value;
      setState({
        ...state,
        [event.target.name]: value,
      });
    }
  };
  const handleSubmit=async (event: React.FormEvent)=>{
    event.preventDefault();
    let newInfo={
      age:Number(state.Age),
      interest:state.Interest,
      job:state.Job?.toString(),
      bio:state.Bio?.toString()
    }
    try{
   await update({variables:{
     email:user.email,
     info:newInfo
   }})
   setModify(!modify);
   
  }
  catch(err)
  {console.error(err)}
  }

  useEffect(() => {
    if (user.isVerified === true) {
      setVerifiedColor("success");
    }
  }, [user.isVerified]);

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{
        heigth: "83vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item xs={2}>
          <Avatar src={avatar} sx={{ width: "5rem", height: "5rem" }} />
        </Grid>
        <Grid item xs={12}>
          <Badge>
            <Typography variant="h4" color="inherit">
              {FullName}
            </Typography>
            <CheckCircleIcon color={verifiedColor} />
          </Badge>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            {user.email}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            {user.location}
          </Typography>
        </Grid>
      </Grid>
      {!user.isVerified ? (
        <Button variant="contained" color="warning" onClick={handleVerify}>
          Veryfy
        </Button>
      ) : null}
      <Divider variant="middle" />
      <Grid item xs={12}>
        {!modify ? (
          <Grid container spacing={2} sx={flexColumCenter}>
            {Object.keys(state).map((item, key) => (
              <Grid item xs={8} key={`${item}_` + key} sx={flexStartCenter}>
                <Typography variant="h6">{item}</Typography>
                {item === "Interest" ? (
                  state[item].map((elem, key) => (
                    <Typography key={`${item}_` + key} variant="subtitle1">
                      {elem}
                    </Typography>
                  ))
                ) : (
                  <Typography variant="subtitle1">
                    {state[item as keyof typeof state]}
                  </Typography>
                )}
              </Grid>
            ))}
            <Button
              variant="contained"
              onClick={() => {
                setModify(!modify);
              }}
            >
              Modify
            </Button>
          </Grid>
        ) : (
          <Grid container component="form" onSubmit={handleSubmit} spacing={2} sx={flexColumCenter}>
            {Object.keys(state).map((item, key) => (
              <Grid item xs={8} key={`${item}_` + key} sx={flexStartCenter}>
                {item === "Interest" ? (
                  <Box sx={flexRowCenter}>
                    <Typography variant="h6" textAlign={"center"}>
                      {item}{" "}
                    </Typography>
                    <Typography variant="subtitle1" textAlign={"center"}>
                      (separete with comma){" "}
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="h6" textAlign={"center"}>
                    {item}{" "}
                  </Typography>
                )}
                <TextareaAutosize
                  id={item}
                  aria-label={item}
                  name={item}
                  value={state[item as keyof typeof state] as string}
                  onChange={hanleChange}
                />
              </Grid>
            ))}
            <Button
           
              variant="contained"
              type="submit"
              // onSubmit={handleSubmit}
              // onClick={() => {
              //   setModify(!modify);
              // }}
            >
              Update
            </Button>
         
          </Grid>
        )}
      </Grid>
     <Box sx={{ '& > :not(style)': { m: 1,position:"fixed",bottom:35,right:25 }}}>
     <Fab variant="extended" size="large" onClick={()=>{navigate("/")}} >
       <ArrowBackIcon sx={{ mr: 1 }} />
       Back
    </Fab>
   </Box>
    </Grid>
  );
};
