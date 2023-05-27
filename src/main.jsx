import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@smastrom/react-rating/style.css";
import ChefDataProvider from "./provider/ChefDataProvider.jsx";
import ThemesProvider from "./provider/ThemesProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemesProvider>
      <AuthProvider>
        <ChefDataProvider>
          <App />
        </ChefDataProvider>
      </AuthProvider>
    </ThemesProvider>
  </React.StrictMode>
);
