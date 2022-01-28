import axios from 'axios';

export const getPhotos =async(clientId:string,collection:string,setData:Function)=>{
    var options:any|undefined = {
        method: 'GET',
        url: 'https://api.unsplash.com/search/photos/',
        params: {client_id: clientId, query: collection},
      };
     const response= await axios.request(options)
     let randomIndex=Math.floor(Math.random()*9)
     const data =response.data.results[randomIndex].urls.full
 
      setData(data)
}
