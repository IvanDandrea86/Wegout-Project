import axios from 'axios';

export const getPhotos =async(clientId:string,collection:string,setData:Function)=>{
    var options:any|undefined = {
        method: 'GET',
        url: 'https://api.unsplash.com/photos/random/',
        params: {client_id: clientId, collection: collection},
        
      };
     const response= await axios.request(options)
      setData(response.data)
}
