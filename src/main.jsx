import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@smastrom/react-rating/style.css";
import ChefDataProvider from "./provider/ChefDataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ChefDataProvider>
        <App />
      </ChefDataProvider>
    </AuthProvider>
  </React.StrictMode>
);
