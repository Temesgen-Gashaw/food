import { useContext } from "react";
import FoodForm from "./FoodForm";
import { AuthContext } from "./authContext";

const FoodN = ({ onfood }) => {
  const { food } = useContext(AuthContext);
  const foodhandler = (item) => {
    const newx = item;
    onfood(newx);
  };
  return (
    <div className="bg-white rounded-lg w-[50%] mx-auto p-7 pt-6 shadow-black shadow-lg border-b border-gray-600">
      {food.map((item) => (
        <div key={item.name} className="flex justify-between pb-4">
          <div className="">
            <div className="font-bold">{item.name}</div>
            <div className=" italic">{item.descripton}</div>
            <div className="font-semibold text-amber-600">{item.amount}</div>
          </div>
          <FoodForm
            name={item.name}
            price={item.amount}
            onfood={foodhandler}
          ></FoodForm>
        </div>
      ))}
    </div>
  );
};

export default FoodN;
