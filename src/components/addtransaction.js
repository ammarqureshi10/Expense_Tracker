import react, { useContext, useState } from "react";
import { GlobalContext } from "../context/context";
export function AddTransaction() {
  const [title, setTitle] = useState();
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  function handleAdd(e) {
    e.preventDefault();
    const obj = Object();
    obj.title = title;
    obj.amount = +amount;
    addTransaction(obj);
    setAmount("");
    setTitle("");
  }
  return (
    <>
      <h4>Add Transaction</h4>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter Title..."
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br /> <br />
        <input
          type="number"
          placeholder="Enter Amount..."
          required
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <br />
        <input type="submit" value="confirm" />
      </form>
    </>
  );
}
