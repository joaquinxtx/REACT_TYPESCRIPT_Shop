
import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

export const redTheme = createTheme({

    palette:{
        primary:{
            main:'#990808'
        },
        secondary:{
            main:'#af0909'
        },
        error:{
            main:red.A400
        }
    }
    
})

