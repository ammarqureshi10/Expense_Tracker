import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GlobalProvider } from "./context/context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
  rootElement
);
