import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createTheme, CssBaseline, responsiveFontSizes, ThemeProvider} from "@mui/material";

let theme = createTheme({
  // Default coloring
  palette: {
    background: {
      default: "#191B29",
      paper: "#171824"
    },
    text: {
      primary: "#ffffff"
    },
    primary: {
      main: "#202020",
    }
  },


});

theme = responsiveFontSizes(theme);

theme.components = {
  // Default styling
  MuiCard: {
    defaultProps: {
      // I always want cards to be raised
      raised: false
    },
    styleOverrides: {
      // Responsive width
      root: {
        height: '90%',
        width: '75%',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
          width: '60%',
        },
        [theme.breakpoints.up('md')]: {
          width: '50%',
        },
        [theme.breakpoints.up('lg')]: {
          width: '50%',
        },
        [theme.breakpoints.up('xl')]: {
          width: '30%',
        },
      },
    },
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
