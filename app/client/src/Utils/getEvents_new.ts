import axios from "axios";
import { ticketmasterKey } from "./constants";

export const getEvents_new = async (setData: Function) => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const latlon = pos.coords.latitude + "," + pos.coords.longitude;
      var options: any | undefined = {
        method: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${ticketmasterKey}&latlong=${latlon}&radius=50`,
        header:{
            "Access-Control-Allow-Origin": "*"
        }
        };

      axios
        .request(options)
        .then(function (response) {
          setData(response.data._embedded.events);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    (err) => {
      console.log(err);
    }
  );
};
