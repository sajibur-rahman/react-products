import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse]= useContext(MoneyContext);
    return (
        <div>
            <h1>special {house}</h1>
            <button onClick={() => setHouse((prevState) => prevState + 1)}>Buy now</button>
        </div>
    );
};

export default Special;