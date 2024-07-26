import { useState } from "react";
import Article from "./components/Article";
import Cart from "./components/Cart";
import FoodN from "./components/Foodn";

import AuthcontextProvider from "./components/authContext";

function App() {
  const [neww, setneww] = useState(0);

  const foodhandler = (item) => {
    const newx = item;
    setneww(newx);
  };
  console.log(neww);

  return (
    <div
      className=" min-h-screen pt-3  "
      style={{ backgroundImage: "url('/images/food.jpg')" }}
    >
      <AuthcontextProvider>
        <Cart neww={neww}></Cart>
        <Article></Article>
        <FoodN onfood={foodhandler}></FoodN>
      </AuthcontextProvider>
    </div>
  );
}

export default App;
