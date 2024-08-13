
import Article from "./components/Article";
import Cart from "./components/Cart";
import FoodN from "./components/Foodn";

import AuthcontextProvider from "./components/authContext";

function App() {
 

  return (
    <div
      className="relative h-screen w-full pt-3 z-0 "
      style={{ backgroundImage: "url('/images/food.jpg')" }}
    >
      <AuthcontextProvider>
       
        <Cart ></Cart>
        <Article></Article>
        <FoodN ></FoodN>
      </AuthcontextProvider>
    </div>
  );
}

export default App;
