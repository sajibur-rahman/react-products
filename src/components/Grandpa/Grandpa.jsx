import React, { useState } from "react";
import MoneyContext from "../../contxts/MoneyContext";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

// export const MoneyContext = createContext(10000);

const Grandpa = () => {
  const [house, setHouse] = useState(1);
  const money = 10000;
  return (
    <MoneyContext.Provider value={{money,house}}>
      <div className="grandpa">
        <h2>grandpa</h2>
        <p>{money}</p>
        <p>
          house : {house}
          <button onClick={() => setHouse((prevState) => prevState + 1)}>
            increse++
          </button>
        </p>
        <span style={{ display: "flex" }}>
          <Father />
          <Uncle  />
          <Aunty  />
        </span>
      </div>
    </MoneyContext.Provider>
  );
};

export default Grandpa;
