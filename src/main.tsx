import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import meuTema from "./config/theme/index.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={meuTema}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
