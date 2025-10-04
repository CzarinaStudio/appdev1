import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Import template CSS files
import "./assets/templatemo-chain-app-dev.css";
import "./assets/animated.css";
import "./assets/fontawesome.css";
import "./assets/owl.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
