import axios from 'axios';
import { pexelsAPI } from "./constants";

export const getVideos = async (query:string,page:number,setVideo:Function) => {
    var options:any|undefined = {
        method: 'GET',
        headers:{
            Accept:'application/jsom',
            Authorization:pexelsAPI,
        },
        url: 'https://api.pexels.com/videos/search?',
        params: {query: query, per_page: page},
      };
     const response= await axios.request(options)
      setVideo(response.data)
};
