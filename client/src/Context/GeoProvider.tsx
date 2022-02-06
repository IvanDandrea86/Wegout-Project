import { createContext, FC, useState } from "react";


interface IGeo {
      lat:number,
      long:number
}

export const GeoContext = createContext({} as IGeo);
const GeoProvider:FC=(props)=>{
const [geoloc,setGeoloc]=useState<IGeo>({ lat:50.8133376,
  long:4.4171264}as IGeo)
  navigator.geolocation.getCurrentPosition((pos) =>{
    const newUserPos = { 
      lat: pos.coords.latitude,
       long: pos.coords.longitude,
  }
    setGeoloc(newUserPos)
     console.log("geolog",geoloc)
     console.log("newUserPos",newUserPos)
})
    return (
      <GeoContext.Provider value={ geoloc as IGeo }>
        {props.children}
      </GeoContext.Provider>
    );
  
};

export default GeoProvider;