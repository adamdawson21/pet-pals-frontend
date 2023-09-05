
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
// import { HomeIcon } from "@heroicons/react/solid"

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);