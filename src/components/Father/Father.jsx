import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({house,money}) => {
    return (
        <div>
            <h3>father</h3>
            <p>house : {house}</p>
            <span style={{display:'flex'}}>
            <MySelf  house={house} />
            <Sister house={house} />
            <Brother house={house} />
            </span>
        </div>
    );
};

export default Father;