import { useContext, useState } from "react";
import { AuthContext } from "./authContext";

import Modal from "../Modal";

const Cart = () => {
  const [cart, setcart] = useState(false);
  const { count } = useContext(AuthContext);
  const carthandler = () => {
    setcart(!cart);
  };
  const oncarthandler = (x) => {
    setcart(x);
  };

  return (
    <div className=" absolute w-full z-10">
      <div className="w-[100%] bg-amber-900 flex justify-around items-center  h-[4rem] z-9">
        <div className="text-2xl font-bold">ReactMeals</div>
        <div
          onClick={carthandler}
          className="text-white rounded-full bg-gray-700 px-7 h-[70%] flex items-center opacity-[70%] cursor-pointer  "
        >
          <svg
            className="mr-2 text-white z-20"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
          >
            <circle cx="176" cy="416" r="32" fill="currentColor" />
            <circle cx="400" cy="416" r="32" fill="currentColor" />
            <path
              fill="currentColor"
              d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93"
            />
          </svg>
          <span>Your Cart</span>{" "}
          <span className="ml-2 rounded-full bg-amber-700 px-3">{count}</span>
        </div>
      </div>

      <div>{cart && <Modal oncart={oncarthandler}></Modal>}</div>
    </div>
  );
};

export default Cart;
