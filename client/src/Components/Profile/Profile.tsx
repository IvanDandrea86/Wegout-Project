import { FC, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Badge, Button, Typography, Divider, TextField } from "@mui/material";
import { UserContext } from "../../Context/UserContext";
import { AvatarGenerator } from "random-avatar-generator";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { gql, useMutation } from "@apollo/client";
import { flexColumCenter, flexStartCenter } from "../../Assets/Style/style";

const REQUEST_VERIFY = gql`
  mutation ($email: String!) {
    requestVerifyEmail(email: $email)
  }
`;
export const Profile: FC = () => {
  const user = useContext(UserContext);
  const profileParam: {
    [key: string]: number | string | Array<string> | null;
  } = {
    "Age ": user.info.age,
    "Interest ": user.info.interest,
    "Job ": user.info.job,
    "Bio ": user.info.bio,
  };
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
          <Grid
            container
            spacing={2}
            sx={flexColumCenter}
          >
            {Object.keys(profileParam).map((item: string, key) => (
              <Grid
                item
                xs={8}
                key={key}
                sx={flexStartCenter}
              >
                <Typography variant="h6">{item}</Typography>
                {item === "Interest " ? (
                  user.info.interest.map((elem) => (
                    <Typography variant="subtitle1">{elem}</Typography>
                  ))
                ) : (
                  <Typography variant="subtitle1">
                    {profileParam[item]}
                  </Typography>
                )}
              </Grid>
            ))}
            <Button variant="contained" onClick={()=>{setModify(!modify)}}>Modify</Button>
          </Grid>
        ) : (
          <Grid
            container
            spacing={2}
            sx={flexColumCenter}
          >
            {Object.keys(profileParam).map((item: string, key) => (
              <Grid
                item
                xs={8}
                key={key}
                sx={flexStartCenter}
              >
                {item === "Interest " ? (
                  user.info.interest.map((elem) => (
                    <TextField id="interest" label={item} value={elem} variant="standard" />

                  ))
                )      
                : (
                  <TextField  id="standard-basic" label={item} value={profileParam[item]} variant="standard" />
                  )}
              </Grid>
            ))}
            <Button variant="contained" onClick={()=>{setModify(!modify)}}>Update</Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};
