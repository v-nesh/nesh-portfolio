import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Typography from "./styles/Typography";
import GlobalStyles from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>
);
