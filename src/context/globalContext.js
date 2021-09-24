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

  // actions
  function updateDate(date) {
    dispatch({
      type: 'UPDATE_DATE',
      payload: date
    });
  }

  return (
    <globalContext.Provider value={{
      date: state.date,
      countries: state.countries,
      updateDate
    }}
    >
      {children}
    </globalContext.Provider>
  );
}

