import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart.tsx";
import Error from "./components/pages/ErrorPage/Error.tsx";
import MenuLayout from "./layouts/Menu/MenuLayout.tsx";
import Product from "./components/pages/Product/ProductComponent.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";

const Menu = lazy(() => import ('./components/pages/Menu/Menu.tsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuLayout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={<>Загрузка...</>}><Menu /></Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          return defer({
            data: axios.get(`${PREFIX}products/${params.id}`).then(data => data)
          })
          // const { data } = await axios.get(`${PREFIX}products/${params.id}`);
          // return data;
        },
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
