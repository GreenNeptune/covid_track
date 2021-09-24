import { createContext, useReducer } from "react";
import AppReducer from './appReducer';

import { today, yesterday } from "../utils/date";

const initialState = {
  date: {
    from: yesterday(),
    to: today()
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

  function updateCountries(countries) {
    dispatch({
      type: 'UPDATE_COUNTRIES',
      payload: countries
    });
  }

  return (
    <globalContext.Provider value={{
      date: state.date,
      countries: state.countries,
      updateDate,
      updateCountries
    }}
    >
      {children}
    </globalContext.Provider>
  );
}

