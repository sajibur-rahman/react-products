import React from 'react';

const ConditionalRendaring = () => {
    const name = 'sajib';
    const age = 18;
    const gender = '';
    let show;
    if(name){
        show = `${name}.your are a good programmer`
    } else {
        show = `${name}.who your are?`;
    }
    return (
        <div>
            {show}
            {age >= 18 ? <p>you are elgiable</p> : <p>your are not elegible</p>}
            {name && <p>you are a good boy</p>}
            {gender || <p>you can play this game</p>}
        </div>
    );
};

export default ConditionalRendaring;