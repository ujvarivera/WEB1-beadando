import React, { createContext, useReducer } from "react";
import { initialState, reducer, ACTIONS } from "../reducers/FavouriteReducer";

export const Context = createContext();

export default function FavouritesContext({ children }) {
  const [favourites, dispatch] = useReducer(reducer, initialState);

  const like = (meal) => {
    dispatch({ type: ACTIONS.LIKE, payload: meal });
  };

  const unlike = (meal) => {
    dispatch({ type: ACTIONS.UNLIKE, payload: meal });
  };

  const reset = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  const values = {
    favourites,
    like,
    unlike,
    reset
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}