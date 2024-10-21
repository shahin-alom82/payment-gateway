import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Features from "../Features";
import Product from "../Product";
import Clients from "../Clients";


export const router = createBrowserRouter([{
      path: "/",
      element: <Root />,
      children: [
            {
                  path: "/",
                  element: <Home />
            },
            {
                  path: "/features",
                  element: <Features />
            },
            {
                  path: "/product",
                  element: <Product />
            },
            {
                  path: "/clients",
                  element: <Clients />
            },
      ]
}])