import { useState, useEffect } from "react";
import FoodForm from "./FoodForm";

const FoodN = () => {
  const [food, setfood] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fetchpost = async () => {
      try {
        const response = await fetch(
          "https://food-order-18898-default-rtdb.firebaseio.com/food/-O3gqhIo1Jo6XEbq0avr.json"
        );

        const data = await response.json();
        if (!data) {
          throw new Error("Request failed");
        }
        setloading(false);
        setfood(data);
      } catch (error) {
        seterror(error.message);
        setloading(false);
      }
    };

    fetchpost();
  }, []);

  return (
    <div className="absolute left-[25%] top-[40%] bg-white rounded-lg w-[50%] mx-auto p-7 pt-6 shadow-black shadow-lg border-b border-gray-600 z-0">
      {loading && <p>Loading.....</p>}
      {error && <p>{error}</p>}
      {food.map((item) => (
        <div key={item.name} className=" flex justify-between pb-4">
          <div>
            <div className="font-bold">{item.name}</div>
            <div className=" italic">{item.descripton}</div>
            <div className="font-semibold text-amber-600">{item.amount}</div>
          </div>
          <FoodForm name={item.name} price={item.amount}></FoodForm>
        </div>
      ))}
    </div>
  );
};

export default FoodN;
