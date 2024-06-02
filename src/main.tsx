import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider, CssBaseline, createTheme} from "@mui/material";
import App from "./App.tsx";

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: "#202020"
    },
    primary: {
      main: '#902D9C',
    },
    secondary: {
      main: '#389c2d',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
