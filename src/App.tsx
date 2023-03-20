import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    direction: "rtl",

    typography: {
      // fontFamily: ["Maven Pro", "sans-serif"].join(","),
      fontFamily: ["Inter", "sans-serif"].join(","),
      h6: {
        fontFamily: ["Maven Pro", "sans-serif"].join(","),
        fontWeight: "500",
        fontSize: "1rem",
      },
      h2: {
        fontFamily: ["Maven Pro", "sans-serif"].join(","),
        fontWeight: "600",
        fontSize: "2.8rem",
      },
      h3: {
        fontFamily: ["Maven Pro", "sans-serif"].join(","),
        fontWeight: "600",
        fontSize: "2.5rem",
      },
      h4: {
        fontFamily: ["Maven Pro", "sans-serif"].join(","),
        fontWeight: "600",
        fontSize: "1.6rem",
      },
      h5: {
        fontFamily: ["Maven Pro", "sans-serif"].join(","),
        fontWeight: "400",
        fontSize: "1.38rem",
      },
      subtitle1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "1.2rem",
      },
      subtitle2: {
        fontWeight: 500,
      },
      body1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "1.13rem",
      },
      body2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "0.82rem",
      },
    },
    palette: {
      primary: {
        main: "#009891",
        light: "rgba(25,42,86,0.8)",
      },
      secondary: {
        main: "#04292f",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
