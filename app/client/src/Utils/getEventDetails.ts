import axios from "axios";
import { ticketmasterKey } from "./constants";

export const getEventsDetails = async (id: string, setData: Function) => {
  var options: any | undefined = {
    method: "GET",
    url: `https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${ticketmasterKey}`,
    header: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  axios
    .request(options)
    .then(function (response) {
     
      setData(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
