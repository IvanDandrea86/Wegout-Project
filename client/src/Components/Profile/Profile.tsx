import { FC, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Badge, Button, Typography,Divider } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { AvatarGenerator } from "random-avatar-generator";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {gql,useMutation} from "@apollo/client"




const REQUEST_VERIFY=gql`
  mutation($email:String!){
    requestVerifyEmail(email:$email)}

`

export const Profile: FC = () => {
  const user = useContext(UserContext);
  const profileParam:{ [key: string]: number|string|Array<string>|null}= {"Age " :user.info.age,"Interest ":user.info.interest,"Job ":user.info.job,"Bio ":user.info.bio};
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
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ heigth:"83vh", display: "flex", justifyContent: "center", flexDirection:"row", alignItems: "center" }}>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center" }}
      >
        <Grid item xs={2}>
          <Avatar src={avatar} sx={{ width: "5rem", height: "5rem" }} />
        </Grid>
        <Grid item xs={12}>
          <Badge>
            <Typography  variant="h4" color="inherit">
              {FullName}
            </Typography>
            <CheckCircleIcon color={verifiedColor} />
          </Badge>
        </Grid>
        <Grid item xs={6}>
         <Typography variant="subtitle1" sx={{textAlign:"center"}}> {user.email}</Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography variant="subtitle2" sx={{textAlign:"center"}}> {user.location}</Typography>
        </Grid>
      </Grid>
      {!user.isVerified ? <Button variant="contained"  color="error" onClick={handleVerify}>
        Veryfy
      </Button>
      : null}
      <Divider variant="middle" />
      

        <Grid item xs={12}>
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

            {Object.keys(profileParam).map((item:string, key) => (
              <Grid item xs={8} key={key} sx={{display:"flex",justifyContent:"start",flexDirection:"column",alignItems:"center"}}>
                <Typography variant="h6" >{item}</Typography>
                <Typography variant="subtitle1" >{profileParam[item]}</Typography>
              </Grid>
            ))}
                <Button variant="contained" >
                  Update
                </Button>
          </Grid>
    </Grid>
    </Grid>

  );
};
