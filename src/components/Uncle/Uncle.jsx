import React, { useContext } from "react";
import MoneyContext from "../../contxts/MoneyContext";

const Uncle = () => {
  const { house } = useContext(MoneyContext);
  return (
    <div>
      <h2>uncle</h2>
      <p> house : {house}</p>
    </div>
  );
};

export default Uncle;
