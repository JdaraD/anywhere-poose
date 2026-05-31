import react from "react";
import ReactDom from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { router } from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
