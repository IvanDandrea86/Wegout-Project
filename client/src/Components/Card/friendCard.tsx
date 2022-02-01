import{useEffect,useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AvatarGenerator } from "random-avatar-generator";
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Badge } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export const AddFriendCard=(props:any)=> {
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
    const FullName = props.props.firstname + " " + props.props.lastname;
    const generator = new AvatarGenerator();
    const avatar =  generator.generateRandomAvatar(props.email as string );

    useEffect(()=>{
        if (props.props.isVerified===true){
          setVerifiedColor("success")
        }
      },[props.props.isVerified])
  return (
    <Card sx={{ width: "100%" }}>
<Grid container spacing={2} sx={{ display:"flex",justifyContent:"center", }}> 
  
      <CardMedia
        component="img"
        alt="photo"
        sx={{ width: "5rem", height: "5rem" }} 
        image={avatar}
        />
      <CardContent sx={{ height: "100%px" }}>
      <Badge>
            <Typography  variant="h4" color="inherit">
              {FullName}
            </Typography>
            <CheckCircleIcon color={verifiedColor} />
          </Badge>
      </CardContent>
        </Grid>
      <CardActions sx={{display:"flex", justifyContent: "center", flexDirection:"row", width:"100%"}}>
        {/* {props.bouton}
        {props.button} */}
        <Button variant="text" >
          Events
        </Button>
        <Button variant="text" >
          Chat
        </Button>
      </CardActions>
    </Card>
  );
}