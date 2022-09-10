import { CssBaseline, ThemeProvider } from "@mui/material"
import { redTheme } from "./theme"


export const AppTheme = ({children}:React.PropsWithChildren) => {
  return (
    <ThemeProvider theme={redTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
