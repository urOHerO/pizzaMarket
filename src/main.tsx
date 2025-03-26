import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart.tsx";
import Error from "./components/pages/ErrorPage/Error.tsx";
import MenuLayout from "./layouts/Menu/MenuLayout.tsx";
import Product from "./components/pages/Product/ProductComponent.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";
import AuthLayout from "./layouts/AuthLayout/AuthLayout.tsx";
import Login from "./components/pages/Login/Login.tsx";
import Register from "./components/pages/Register/Register.tsx";
import RequireAuth from "./helpers/RequireAuth.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

const Menu = lazy(() => import("./components/pages/Menu/Menu.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <MenuLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрузка...</>}>
            <Menu />
          </Suspense>
        ),
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
          const data = await axios
            .get(`${PREFIX}products/${params.id}`)
            .then((res) => res.data);
          return { data };
        },
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
