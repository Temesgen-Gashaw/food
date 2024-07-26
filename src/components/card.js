import { useContext } from "react";
import { AuthContext } from "./authContext";

const Card = ({ neww }) => {
  const { eachcount } = useContext(AuthContext);
  return (
    <div>
      {eachcount.map((item, index) => (
        <div key={index}>
          <div>{item.name}</div>
          <div>{neww} </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
