import React, { createContext, useContext, useReducer } from "react";

// preparing the datalayer
export const StateContext = createContext();

// wrap our app and providing the datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);
