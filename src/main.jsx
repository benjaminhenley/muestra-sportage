import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-kia">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
