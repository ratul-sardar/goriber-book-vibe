import { useContext } from "react";
import ListedBooksContext from "../context/ListedBooksContext";

export default function ListedBooks() {
  const { readBooks, handleAddToReadBooks, wishList, handleAddToWishList } =
    useContext(ListedBooksContext);
  return (
    <section className="">
      <div className="container w-11/12 mx-auto py-16 lg:py-20 xl:py-28  space-y-6">
        <h2 className="text-red-500">hi from Listed Books</h2>
      </div>
    </section>
  );
}
