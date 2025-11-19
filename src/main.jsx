
import './index.css'


import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './Page/About/About';
import Root from './Layout/Root';
import Home from './Page/Home/Home';
import Myjob from './Page/Myjob/Myjob';
import Contact from './Page/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/myjob", element: <Myjob></Myjob> },
      { path: "/contact", element: <Contact></Contact> },

    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
