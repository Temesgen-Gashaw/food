import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./authContext";

const FoodForm = ({ name, price, onfood }) => {
  const [enteredAmount, setenteredAmount] = useState("");
  const [amount, setamount] = useState(0);
  const { onadd, eachcount, oneachadd } = useContext(AuthContext);
  useEffect(() => {
    onfood(amount);
  }, [amount]);
  const amounthandler = (event) => {
    setenteredAmount(event.target.value);
  };
  const addhandler = (e) => {
    e.preventDefault();
    onadd(enteredAmount);
    setamount(amount + Number(enteredAmount));
    if (enteredAmount !== "") {
      const newarr = [{ name, price }];

      oneachadd(newarr);
    }
  };

  return (
    <div>
      <form>
        <label className="font-semibold">Amount</label>
        <input
          className="border-2 border-gray-200 w-[2.5rem] ml-2"
          type="number"
          value={enteredAmount}
          onChange={amounthandler}
        ></input>
        <div className="text-center pt-2">
          <button
            onClick={addhandler}
            className=" rounded-full text-white font-semibold px-7 py-1 bg-amber-800"
          >
            +Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoodForm;
