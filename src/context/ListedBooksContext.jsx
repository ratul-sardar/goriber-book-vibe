import { createContext, useState } from "react";

const BooksContext = createContext("");

export default function ListedBooksContext({ children }) {
  const [readBooks, setReadBooks] = useState([]);
  const [wishList, setWishList] = useState([]);

  function handleAddToReadBooks(book) {
    setReadBooks([...book, readBooks]);
  }

  function handleAddToWishList(book) {
    setWishList([...book, wishList]);
  }

  return (
    <BooksContext.Provider
      value={{ readBooks, handleAddToReadBooks, wishList, handleAddToWishList }}
    >
      {children}
    </BooksContext.Provider>
  );
}
