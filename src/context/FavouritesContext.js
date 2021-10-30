import React, { useState, createContext } from "react";

export const Context = createContext();

export default function FavouritesContext({ children }) {
  const [favourites, setFavourites] = useState([]);
  const value = {
    favourites,
    setFavourites
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
