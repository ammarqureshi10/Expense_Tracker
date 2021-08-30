import { useContext, useState } from "react";
import { AddTransaction } from "./components/addtransaction";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/transactionlist";
import { GlobalContext } from "./context/context";
//import { Spare } from "./Spare";
import "./styles.css";

export default function App() {
  const { check, lists } = useContext(GlobalContext);
  console.log("lists in App", lists);
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Balance />
      <AddTransaction />
      <TransactionList />
    </div>
  );
}
