import { FC, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Badge, Button, Typography } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { AvatarGenerator } from "random-avatar-generator";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {gql,useMutation} from "@apollo/client"




const REQUEST_VERIFY=gql`
  mutation($email:String!){
    requestVerifyEmail(email:$email)}

`

export const Profile: FC = () => {
  const profileParam = ["Age: ","Location: ","Hobby: ","", 5, 6, 7, 8];
  const profileEvent = [1, 2, 3, 4, 5, 6, 7, 8];
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
  const user = useContext(UserContext);
  const [verify]=useMutation(REQUEST_VERIFY)
  const FullName = user.firstname + " " + user.lastname;
  const generator = new AvatarGenerator();
  const avatar =  generator.generateRandomAvatar(user.email as string );
  // Simply get a random avatar

  const handleVerify=async()=>{
    const {data}=await verify({variables:{
      email:user.email
    }})
    if (data){console.log("email sent")}

  }
  useEffect(()=>{
    if (user.isVerified===true){
      setVerifiedColor("success")
    }
  },[user.isVerified])

 
  return (  
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid
        item
        xs={8}
        sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <Avatar src={avatar} sx={{ width: "5rem", height: "5rem" }} />
        </Grid>
        <Grid item xs={4}>
          <Badge>
            <Typography variant="h4" color="inherit">
              {FullName}
            </Typography>
            <CheckCircleIcon color={verifiedColor} />
          </Badge>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "start",
        }}
      >
        <Grid item xs={4}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            >
            {!user.isVerified ? <Button variant="contained" onClick={handleVerify}>
              Veryfy
            </Button>
            : null}

            {profileParam.map((event, key) => (
              <Grid item xs={3} key={key}>
                {event}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {profileEvent.map((event, key) => (
              <Grid item key={key}>
                 {event}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
