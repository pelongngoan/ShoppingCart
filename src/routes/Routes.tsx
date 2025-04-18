import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Reviews } from "../pages/Reviews";
import { Checkout } from "../pages/Checkout";
import { myStore } from "../redux/configureStore";
import { Provider } from "react-redux";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={myStore}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <Navigate to="/products" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
    ],
  },
]);
