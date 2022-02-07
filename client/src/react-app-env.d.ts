/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' |'staging'| 'production' | 'test' ,
        PUBLIC_URL: string,
        REACT_APP_UNSPLASH_API:string,
        REACT_APP_PEXELS_API:string,
        REACT_APP_GEOLOC_APIKEY:string,
       
        REACT_APP_TICKETMASTER_KEY:string
        }
    }
  