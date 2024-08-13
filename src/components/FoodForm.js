import { useContext, useState } from "react";
import { AuthContext } from "./authContext";

const FoodForm = ({ name }) => {
  const [enteredAmount, setenteredAmount] = useState("");

  const { onadd, oneachadd } = useContext(AuthContext);

  const amounthandler = (event) => {
    setenteredAmount(event.target.value);
  };
  const addhandler = (e) => {
    e.preventDefault();

    onadd(enteredAmount);

    if (enteredAmount !== "") {
      const get = async () => {
        const res = await fetch(
          "https://food-order-18898-default-rtdb.firebaseio.com/food/-O3gqhIo1Jo6XEbq0avr.json"
        );
        const data = await res.json();

        const updated = data.map((item, ind) => {
          return {
            name: item.name,
            enteredAmount: 0,
          };
        });
        const newarr = [{ name, enteredAmount }];
        console.log(updated);
        oneachadd(updated, newarr);
      };
      get();
    }
    setenteredAmount("");
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
