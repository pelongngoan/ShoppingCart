import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Reviews } from "../pages/Reviews";
import { Checkout } from "../pages/Checkout";
import { AppContextProvider } from "../context/appContext";
import { myStore } from "../redux/configureStore";
import { Provider } from "react-redux";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppContextProvider>
        <Provider store={myStore}>
          <App />
        </Provider>
      </AppContextProvider>
    ),
    children: [
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
