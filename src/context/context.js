import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = [
  { title: "fees", amount: 200 },
  { title: "Income", amount: -300 },
  { title: "xyz", amount: -50 },
  { title: "bonus", amount: 100 }
];

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  // initialize reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state in context", state);

  function check() {
    dispatch({ type: "CHECK" });
  }
  function deleteTransaction(title) {
    dispatch({ type: "DELETE_TRANSACTION", payload: title });
  }
  function addTransaction(obj) {
    dispatch({ type: "ADD_TRANSACTION", payload: obj });
  }
  return (
    <GlobalContext.Provider
      value={{
        check,
        lists: state,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
