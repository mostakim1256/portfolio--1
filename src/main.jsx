import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Root from "./Layout/Root";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Myjob from "./Page/Myjob/Myjob";
import Contact from "./Page/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "myjob", element: <Myjob /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
