import { useContext } from "react";
import { AuthContext } from "./components/authContext";
import Plus from "./components/plus";

const Modal = ({ oncart }) => {
  const { eachcount, count } = useContext(AuthContext);
  const overlay = () => {
    oncart(false);
  };
  const x = localStorage.setItem("arr", JSON.stringify([1, 2, 3]));
  console.log(x);

  return (
    <div>
      <div
        onClick={overlay}
        className="absolute top-0 w-[100%] bg-black h-[100vh] opacity-[50%] z-5 blur-[200px] "
      ></div>
      <div className="absolute top-150 bg-white left-[20%] w-[50%] h-[30vh] rounded-lg m-auto z-6 ">
        {count === 0 ? (
          <p className="flex justify-center items-center h-[50%]">
            No item choosen
          </p>
        ) : (
          eachcount.map((item, index) => (
            <div className="flex justify-around" key={index}>
              {item.enteredAmount > 0 ? (
                <>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.enteredAmount} </div>{" "}
                  </div>
                  <Plus index={index} entered={item.enteredAmount}></Plus>
                </>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Modal;
