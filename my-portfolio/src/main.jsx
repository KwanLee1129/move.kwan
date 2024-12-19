import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Tailwind를 포함한 스타일 설정
import Portfolio from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
