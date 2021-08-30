import react, { useContext } from "react";
import { GlobalContext } from "../context/context";

export function TransactionList() {
  const { lists, deleteTransaction } = useContext(GlobalContext);
  console.log("lists in transactionlist", lists);
  return (
    <>
      <h4>Transaction list</h4>

      <ol>
        {lists &&
          lists.map((obj, index) => {
            return (
              <div key={index}>
                <li>
                  {` ${obj.title} `} {`${obj.amount}$`}
                  <button
                    onClick={() => {
                      deleteTransaction(obj.title);
                    }}
                  >
                    x
                  </button>
                </li>
              </div>
            );
          })}
      </ol>
    </>
  );
}
