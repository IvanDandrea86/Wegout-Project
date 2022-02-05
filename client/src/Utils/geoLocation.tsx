import React, {useState, useEffect,FC} from 'react'
import axios from 'axios';
import {gelocAPI} from '../Utils/constants'
import Typography from '@mui/material/Typography'

interface IGeoLoc{
    lat:number|null;
    long :number |null;
}
const FindMe:FC=()=>{
const [userPos, setUserPos] = useState({}as IGeoLoc)
const [Location,setLocation]=useState()

 useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) =>{
          const newUserPos = { 
                lat: pos.coords.latitude,
                long: pos.coords.longitude,
           }
           var options:any|undefined = {
            method: 'GET',
            url: 'https://geocodeapi.p.rapidapi.com/GetTimezone',
            params: {latitude: newUserPos.lat, longitude: newUserPos.long},
            headers: {
              'x-rapidapi-host': 'geocodeapi.p.rapidapi.com',
              'x-rapidapi-key': gelocAPI
            }
          };
          axios.request(options).then(function (response) {
            
            setLocation(response.data.Country)
            
        }).catch(function (error) {
            console.error(error);
        });
          setUserPos(newUserPos) // store data in usestate
     
     }, (err) => {
          console.log(err);
     });
    },[])

return (

<span>
{Location!==undefined ? Location:
<Typography variant="h5" >Activate geolocation or select your city</Typography>}
</span>
 )
    
}

export default FindMe;