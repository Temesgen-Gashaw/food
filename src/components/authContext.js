import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthcontextProvider = (props) => {
  const [eachcount, seteachcount] = useState([]);

  const [count, setcount] = useState(0);

  const onadd = (entered) => {
    setcount(count + Number(entered));
  };

  const oneachadd = (up, item) => {
    seteachcount([...up]);
    const ind = up.findIndex((arr) => arr.name === item[0].name);

    if (ind !== -1) {
      up[ind] = {
        name: item[0].name,
        enteredAmount:
          Number(item[0].enteredAmount) + Number(up[ind].enteredAmount),
      };

      console.log(up);
    }
  };

  return (
    <AuthContext.Provider
      value={{ count, seteachcount, onadd, eachcount, oneachadd }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthcontextProvider;
