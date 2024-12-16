import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import ChefClaudeContextProvider from "./contexts/ChefClaudeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChefClaudeContextProvider>
      <App />
    </ChefClaudeContextProvider>
  </StrictMode>
);
