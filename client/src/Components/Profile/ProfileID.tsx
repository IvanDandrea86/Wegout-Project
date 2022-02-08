import { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Avatar, Badge, Typography, Divider } from "@mui/material";

import { AvatarGenerator } from "random-avatar-generator";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { gql, useQuery } from "@apollo/client";
import { flexColumCenter, flexStartCenter } from "../../Assets/Style/style";
import ErrorMess from "../Utility/ErrorMess";
import Loading from "../Utility/Loading";


import { BackFab } from "../Utility/BackFab";
const GETUSERBYID = gql`
  query ($_id: String!) {
    findUserById(user_id: $_id) {
      firstname
      lastname
      location
      email
      info {
        age
        bio
        interest
        job
      }
      isVerified
    }
  }
`;
interface IUserId {
  id: string | undefined;
}
interface IInfo {
  Age: number;
  Interest: Array<string>;
  Job: string;
  Bio: string;
}

export const ProfileID: FC<IUserId> = ({ id }) => {
    const ID=id;
  const { data, loading, error } = useQuery(GETUSERBYID, {
    variables: {
      _id: ID
    },
});

const [state, setState] = useState({}as IInfo);
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

useEffect(() => {
    if(data!== undefined){
  if (data.findUserById.isVerified === true) {
    setVerifiedColor("success");
  }
  if (data.findUserById.info===null){
    let array= new Array<string>()
    setState({
      Age: 0,
      Interest: array,
      Job: "",
      Bio: "",
    }) 
  } 
  else
  setState({
      Age: data.findUserById.info.age,
      Interest: data.findUserById.info.interest,
      Job: data.findUserById.info.job,
      Bio: data.findUserById.info.bio
    })
}

}, [data]);

  if (loading) {
      return <Loading />;
  }
  if (error) {
      return   <ErrorMess />;
  }
  if (data === undefined) {
      return <p>Not found</p>;
    }
   if(data){ 
   
}


  const FullName =
    data.findUserById.firstname + " " + data.findUserById.lastname;
  const generator = new AvatarGenerator();
  const avatar = generator.generateRandomAvatar(
    data.findUserById.email as string
  );

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
            {data.findUserById.email}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
            {data.findUserById.location}
          </Typography>
        </Grid>
      </Grid>

      <Divider variant="middle" />
      <Grid item xs={12}>
        <Grid container spacing={2} sx={flexColumCenter}>
          {Object.keys(state).map((item, key) => (
            <Grid item xs={8} key={`${item}_` + key} sx={flexStartCenter}>
              <Typography variant="h6">{item}</Typography>
              {item === "Interest" ? (
                state[item].map((elem: string, key: number) => (
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
        </Grid>
      </Grid>
      <BackFab/>
    </Grid>
  );
};
