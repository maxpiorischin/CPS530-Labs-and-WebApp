import { createTheme } from '@mui/material/styles';
import {orange } from '@mui/material/colors';
import {green } from '@mui/material/colors';



const theme = createTheme({
    palette:{
      primary: {
        main: orange[500],
      },secondary: {
        main: green[500],
      },
    }
    })
  
export default theme;