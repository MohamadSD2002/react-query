import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./root-layout";
import { HomePage } from "../../pages/HOME/home-page";
import { ProductPage } from "../../pages/product/product-page";
import { CreateProductPage } from "../../pages/create-product/create-product-page";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      {
        path: "/products/create",
        element: <CreateProductPage />,
      },
    ],
  },
]);