import { createContext, useReducer } from "react";
import AppReducer from './appReducer';

import { yesterday } from "../utils/date";

const initialState = {
  date: {
    from: yesterday(),
    to: yesterday()
  },
  countries: []
}

export const globalContext = createContext(initialState);


export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  return (
    <globalContext.Provider value={{
      date: state.date,
      countries: state.countries,
    }}
    >
      {children}
    </globalContext.Provider>
  );
}

