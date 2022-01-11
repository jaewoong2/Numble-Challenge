import GlobalStyles from "./Style/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "@class101/ui";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Style/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
