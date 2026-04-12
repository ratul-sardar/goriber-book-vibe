import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../components/layouts/Root";
import DetailsPage from "../pages/DetailsPage";

const route = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/bookDetails/:id",
        loader: ({ params }) => fetch("/booksData.json"),
        Component: DetailsPage,
      },
    ],
    errorElement: (
      <h1 className="text-4xl text-red-600 mx-auto mt-[20%]">
        Yo, app crushed Nigga! Do something Nigga!
      </h1>
    ),
  },
]);

export default route;
