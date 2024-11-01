import { createContext, useEffect, useState } from "react";

import React from "react";

export const MyContext = createContext();

export default function MyProvider({ children }) {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch("booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return <MyContext.Provider value={{ books }}>{children}</MyContext.Provider>;
}
