import axios from "axios";
import { ticketmasterKey } from "./constants";




export const getCategories = async (setData: Function) => {
  
      var options: any | undefined = {
        method: "GET",
        url: `https://app.ticketmaster.com/discovery/v2/classifications?apikey=${ticketmasterKey}`,
        header:{
            "Access-Control-Allow-Origin": "*"
        },
        };

        try{
            const response = await axios.request(options)
            setData(response.data._embedded.classifications)
        }
        catch(err){
            console.error(err)
        }
        
    //   axios
    //     .request(options)
    //     .then(function (response) {
    //       setData(response.data._embedded.classifications);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    }
  
