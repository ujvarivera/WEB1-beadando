import React, { createContext, useReducer } from "react";
import { initialState, reducer, ACTIONS } from "../reducers/FavouriteReducer";
import useLocalStorage from "../hooks/useLocalStorage";

export const Context = createContext();

export default function FavouritesContext({ children }) {
  const { deleteValue, addValue, state, resetValue } = useLocalStorage(
    "favourites",
    initialState
  );
  const [favourites, dispatch] = useReducer(reducer, state);

  const like = (meal) => {
    dispatch({ type: ACTIONS.LIKE, payload: meal });
    addValue(meal);
  };

  const unlike = (meal) => {
    dispatch({ type: ACTIONS.UNLIKE, payload: meal });
    deleteValue(meal);
  };

  const reset = () => {
    dispatch({ type: ACTIONS.RESET });
    resetValue();
  };

  const values = {
    favourites,
    like,
    unlike,
    reset
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}