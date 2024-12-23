import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { DropdownProvider } from "./context/dropdownContext";

createRoot(document.getElementById("root")!).render(
  <DropdownProvider>
    <App />
  </DropdownProvider>
);
