import react, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/context";

export function Balance() {
  const { lists } = useContext(GlobalContext);
  const [balance, setBalance] = useState();
  const [income, setIncome] = useState();
  const [expense, setExpanse] = useState();
  useEffect(() => {
    console.log("useEffect called");
    //SUM of negative expense
    /* @notice pick negative number objects in separete `negative` array
     */
    const negative = lists.filter(function (obj, ind) {
      return obj.amount < 0;
    });
    console.log("negative", negative);

    /* @notice pick negative number in separete `nNmbers` array
     */
    let nNumbers = [];
    negative.map((obj, ind) => {
      nNumbers.push(obj.amount);
      return obj.amount;
    });
    console.log("nNumbers", nNumbers);

    /* @notice added all expense in `REALN`
     */
    const REALN = nNumbers.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    console.log("REALN", REALN);

    //Sum of positive Income
    /* @notice pick positive numbers objects in separete `positive` array
     */
    const positive = lists.filter(function (obj, ind) {
      return obj.amount > 0;
    });
    console.log(positive);

    /* @notice pick up positive numbers in `pNumbers` array
     */
    let pNumbers = [];
    positive.map((obj, ind) => {
      pNumbers.push(obj.amount);
      return obj.amount;
    });
    console.log("pNumbers", pNumbers);

    /* @notice added all income in 'REALP`
     */
    const REALP = pNumbers.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);
    console.log("REALP", REALP);
    const balance = REALP + REALN;
    setExpanse(REALN);
    setIncome(REALP);
    console.log("balance = ", balance);
    setBalance(balance);
  }, [lists]);

  //const income = lists.redu;
  //const expense = ;
  return (
    <div>
      <h2>{`Your Balance: ${balance}`}</h2>
      <h3>{`INCOME: ${income}`}</h3>
      <h3>{`EXPENSE: ${expense}`}</h3>
    </div>
  );
}
