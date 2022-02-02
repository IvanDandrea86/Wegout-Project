import axios from 'axios';
import { pexelsAPI } from "./constants";

export const getVideos = async (query:string,page:number,setVideo:Function) => {
    var options:any|undefined = {
        method: 'GET',
        headers:{
            Accept:'application/json',
            Authorization:pexelsAPI,
        },
        
        url: 'https://api.pexels.com/videos/search?',
        params: {query: query, per_page: page},
      };
      let index=Math.floor(Math.random()*6)
     const response= await axios.request(options)
      setVideo(response.data.videos[index].video_files[0].link)
};
