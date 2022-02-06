import axios from "axios";
import { ticketmasterKey } from "./constants";

export const getEvents_new = async (cat:string,
  sort:string,page:number,radius:number,size:number,keyword:string,latlong:string,setData: Function) => {
  // navigator.geolocation.getCurrentPosition(
  //   (pos) => {
  //     const latlon = pos.coords.latitude + "," + pos.coords.longitude;
      var options: any | undefined = {
        method: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmasterKey}&latlong=${latlong}&radius=${radius}&page=${page}&size=${size}&keyword=${keyword}&classificationName=${cat}&sort=${sort}`,
        header:{
            "Access-Control-Allow-Origin": "*"
        },
     
        };
      axios
        .request(options)
        .then(function (response) {
          if(response.data._embedded.events  === undefined){
          return;
          }
          else 
          setData(response.data._embedded.events);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
 
