import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TodoProvider } from "./context/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);
