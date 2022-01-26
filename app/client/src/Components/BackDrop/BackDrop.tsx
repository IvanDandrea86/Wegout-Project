import { styled, createTheme, ThemeProvider } from '@mui/system';



export  const BackDropTop = styled('div')(({ theme }) => ({
width:"350%",
height:"510px",
position:"absolute",
display:"flex",
flexDirection:"column",
top:"-320px",
zIndex:-1,
borderRadius:"50%",
backgroundColor:theme.palette.background.default,
boxShadow:"0 2.8px 2.2px rgba(0, 0, 0, 0.034)"
}));
export  const BackDropBottom = styled('div')(({ theme }) => ({
  width:"350%",
  height:"510px",
  position:"absolute",
  display:"flex",
  flexDirection:"column",
  right:"0px",
  bottom:"-320px",
  zIndex:-1,
  borderRadius:"50%",
  backgroundColor:theme.palette.background.default,
  boxShadow:"0 2.8px 2.2px rgba(0, 0, 0, 0.034)"
  }));




