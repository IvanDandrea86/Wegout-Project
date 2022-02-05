import axios from "axios";
import { TICKETMASTER_KEY } from "../constants/const";

 const getRandomEvent = async (page:number,size:number):Promise<Array<any>> => {
  return new Promise( (resolve, reject) => {
  
   var options: any | undefined = {
        method: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TICKETMASTER_KEY}&latlong=50.850346,4.351721&radius=100&page=${page}&size=${size}`,
        header:{
            "Access-Control-Allow-Origin": "*"
        }
        };
     axios.request(options)
        .then(function (response) {
          resolve(response.data._embedded.events)
        })
        .catch(function (error) {
          reject(error);
        })
        
      })
    }

export const EventList=async()=>{
  const Events=new Array<string>()
  const data=  await getRandomEvent(0,100)
data.forEach((elem)=>{
 Events.push(elem.id)
})
return Events
}
    
