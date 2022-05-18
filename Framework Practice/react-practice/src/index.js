import InitialMessage from "./components/InitialMessage";
import { createRoot } from "react-dom/client";
import "./styles/PageStyles.css";

createRoot(document.getElementById("root")).render(
  InitialMessage(`Hello World React`)
);
