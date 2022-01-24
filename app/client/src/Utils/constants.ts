

 const {REACT_APP_UNSPLASH_API,REACT_APP_PEXELS_API
    ,REACT_APP_GEOLOC_APIKEY,
    REACT_APP_TICKETMASTER_KEY}=process.env;

// APP TEXT
export const APP_TITLE = "WeGOut"
export const FOOTER_TEXT = `${new Date().getFullYear()} Built with ♡ by Ivan D'Andrea`
// PAGES TITLE
export const PAGE_TITLE_HOME = "Home"
export const PAGE_TITLE_DASHBOARD = "Dashboard"
export const PAGE_TITLE_SETTINGS = "Settings"
// UI CONSTANTS
export const FOOTER_HEIGHT = 30
export const HEADER_HEIGHT = 60
export const DRAWER_WIDTH = 250
// VALIDATION CONSTANT
export const VALID_PASSWORD_8_A_1= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
export const VAILDEMAIL=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// API
export const unsplashAPI = REACT_APP_UNSPLASH_API
 export const pexelsAPI = REACT_APP_PEXELS_API 
 export const gelocAPI= REACT_APP_GEOLOC_APIKEY

 export const ticketmasterKey=REACT_APP_TICKETMASTER_KEY
