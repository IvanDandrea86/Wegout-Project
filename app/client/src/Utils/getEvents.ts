import axios from 'axios';
import { predictHQ,rapidKey } from './constants';
export const getEvents =async(country:string,setData:Function)=>{


  var options:any|undefined  = {
    method: 'GET',
    url: 'https://predicthq.p.rapidapi.com/v1/events/',
    params: {country:country,
              category:"concerts",limit:"20" },
    headers: {
      authorization: `Bearer ${predictHQ}`,
      'x-rapidapi-key': `${rapidKey}`,
      'x-rapidapi-host': 'predicthq.p.rapidapi.com'
    }
  };
     const response= await axios.request(options)
     console.log(response.data)
      setData(response.data)
}
