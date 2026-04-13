import { createContext, useState } from "react";

export const BooksContext = createContext("");

export default function ListedBooksContext({ children }) {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  function handleAddToReadBooks(book) {
    setReadBooks([...readBooks, book]);
  }

  function handleAddToWishList(book) {
    setWishList([...wishList, book]);
  }

  return (
    <BooksContext.Provider
      value={{ readBooks, handleAddToReadBooks, wishList, handleAddToWishList }}
    >
      {children}
    </BooksContext.Provider>
  );
}
