import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Products from "./Components/Products/Products";
import Categories from "./Components/Categories/Categories";
import Brands from "./Components/Brands/Brands";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  const routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Cart",
          element: <Cart />,
        },
        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "Categories",
          element: <Categories />,
        },
        {
          path: "Brands",
          element: <Brands />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Register",
          element: <Register />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
