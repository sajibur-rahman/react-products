import React, { useContext } from "react";
import MoneyContext from "../../contxts/MoneyContext";

const Aunty = () => {
  const { house } = useContext(MoneyContext);
  return (
    <div>
      <h2>aunty</h2>
      <p>hosue {house}</p>
    </div>
  );
};

export default Aunty;
