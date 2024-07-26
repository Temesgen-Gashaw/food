import { createContext, useState } from "react";

export const AuthContext = createContext();
const food = [
  {
    name: "sushi",
    descripton: "fresh fish and veggies",
    amount: "$22",
  },
  {
    name: "schinztl",
    descripton: "a german spreciality",
    amount: "$19",
  },
  {
    name: "barbacue burger ",
    descripton: "nice mcdonald ",
    amount: "$32",
  },
  {
    name: "shiro ",
    descripton: "great ethiopian dish ",
    amount: "$52",
  },
  { name: "noodles", descripton: "china dish", amount: "$22" },
];
const AuthcontextProvider = (props) => {
  const [eachcount, seteachcount] = useState([]);

  const [count, setcount] = useState(0);
  const onadd = (entered) => {
    setcount(count + Number(entered));
  };
  const oneachadd = (item) => {
    const ind = eachcount.findIndex((arr) => arr.name === item[0].name);

    if (ind !== -1) {
      const updatedEachCount = [...eachcount];
      updatedEachCount[ind] = item[0];

      seteachcount(updatedEachCount);
    } else {
      seteachcount([...eachcount, ...item]);
    }
  };
  return (
    <AuthContext.Provider value={{ count, onadd, food, eachcount, oneachadd }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthcontextProvider;
