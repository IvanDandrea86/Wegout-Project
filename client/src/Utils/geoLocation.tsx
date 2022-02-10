import React, {useState, useEffect,FC, useContext, Fragment} from 'react'
import axios from 'axios';
import {gelocAPI} from '../Utils/constants'
import Typography from '@mui/material/Typography'
import { GeoContext } from '../Context/GeoProvider';

import TextField from '@mui/material/TextField'






const FindMe:FC=()=>{
const geo=useContext(GeoContext)
const [city,setCity]=useState<string>("Brussels")
const [Location,setLocation]=useState<string>()

const handleChange=(e:string)=>{
  setCity(e)
}
 useEffect(() => {
           var options:any|undefined = {
            method: 'GET',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${geo.lat}+${geo.long}/nearbyCities`,
            params: {radius: '15'},
            headers: {
              'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
              'x-rapidapi-key': gelocAPI
            }
          };
          
          axios.request(options).then(function (response) {
         
            setLocation(response.data.data[0].city)          
        }).catch(function (error) {
            console.error(error);
        });
       
     
     },[geo.lat,geo.long])


return (

<span>
{Location!==undefined ? Location.split(' ')[0]
:
<Fragment>
<Typography variant="h6" >Activate geolocation or select your city</Typography>
<TextField
  id="City"
  label="city"
  value={city}
  onChange={(e)=>handleChange(e.target.value)}
/>
</Fragment>
}
</span>
 )
    
}

export default FindMe;