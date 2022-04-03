import React, { useContext } from "react";
import MoneyContext from "../../contxts/MoneyContext";




function Special(){
    const {money} = useContext(MoneyContext);
    console.log('special')
    return (
        <div>
            <h1>special {money}</h1>
        </div>
    )
}
export default Special;
