import { useContext } from "react";
import { AuthContext } from "./authContext";
const Plus = ({ index, entered }) => {
  const { eachcount, seteachcount, onadd, count } = useContext(AuthContext);
  const plushandler = () => {
    onadd(1);
    const updatedEachCount = [...eachcount];
    updatedEachCount[index] = {
      name: updatedEachCount[index].name,
      enteredAmount: Number(entered) + 1,
    };
    seteachcount(updatedEachCount);
  };
  const minushandler = () => {
    if (count >= 1 && entered >= 1) {
      onadd(-1);
      const updatedEachCount = [...eachcount];
      updatedEachCount[index] = {
        name: updatedEachCount[index].name,
        enteredAmount: Number(entered) - 1,
      };
      seteachcount(updatedEachCount);
    }
  };
  return (
    <div>
      {" "}
      <span onClick={plushandler} className="cursor-pointer">
        +
      </span>
      <span onClick={minushandler} className="cursor-pointer">
        -
      </span>
    </div>
  );
};

export default Plus;
