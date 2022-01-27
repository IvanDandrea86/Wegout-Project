// import {styled }from "@mui/system"
//Styles
export const video_container: React.CSSProperties = {
    minHeight: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  export const videoStyle: React.CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    opacity: 0.75,
  };
  export const centerBox ={
      pt: 8,
      pb: 6,
      height: "80vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center", 
  }
  
  // export  const VideoContainer = styled('div')(()=>({}))