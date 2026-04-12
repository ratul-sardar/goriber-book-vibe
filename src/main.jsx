import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Route from "./router/Route";
import { ProductDataContext } from "./context/ProductDataContext";
import productData from "./data/booksData.json";

// Router creation
const router = Route;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductDataContext value={productData}>
      <RouterProvider router={router}></RouterProvider>
    </ProductDataContext>
  </StrictMode>,
);
