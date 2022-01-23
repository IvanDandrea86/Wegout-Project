import axios from 'axios';

export const getPhotos =async(lat:number,long:number,setData:Function)=>{
    var options:any|undefined = {
        method: 'GET',
        url: 'https://api.meetup.com/find/upcoming_events',
        params: {lat: lat, lon: long},
        
      };
     const response= await axios.request(options)
      setData(response.data)
}
