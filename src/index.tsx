import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.min.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import ExpensesDataProvider from "./providers/ExpensesDataProvider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ExpensesDataProvider>
        <App />
      </ExpensesDataProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
