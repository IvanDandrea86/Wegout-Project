
import { themeLight } from "../../Themes/themes";
import styled from "@emotion/styled";


const theme= themeLight;


export  const  BackDropTop =styled.div`
width:350%;
height:510px;
position:absolute;
display: flex;
flex-direction:column;
top:-320px;
z-index: -1;
border-radius: 50%;
background: ${theme.palette.primary.main};
box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12) ;
`
export const  BackDropBottom =styled.div`
width:350%;
height:510px;
position:absolute;
display: flex;
flex-direction:column;
bottom:-320px;
right:0;
z-index: -1;
border-radius: 50%;
background: ${theme.palette.primary.main};
box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12) ;
`


