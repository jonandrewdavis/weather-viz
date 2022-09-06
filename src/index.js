import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorModeScript } from "@chakra-ui/react"; // TODO: sense OS setting for color

const rootElement = document.getElementById("app");
ReactDOM.createRoot(rootElement).render(
  <>
    <ColorModeScript initialColorMode={"light"} />
    <App />
  </>
);
