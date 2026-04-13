import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Route from "./router/Route";
import { ProductDataContext } from "./context/ProductDataContext";
import productData from "./data/booksData.json";
import ListedBooksContext from "./context/ListedBooksContext";

// Router creation
const router = Route;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductDataContext value={productData}>
      <ListedBooksContext>
        <RouterProvider router={router}></RouterProvider>
      </ListedBooksContext>
    </ProductDataContext>
  </StrictMode>,
);
