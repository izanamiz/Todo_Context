import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { TaskProvider } from "./context/TaskContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <TaskProvider value="value">
        <App />
      </TaskProvider>
    </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
