import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    console.log('myself')
    return (
        <div>
            <h4>myself</h4>
            <p>house : {house}</p>
            <Special/>
        </div>
    );
};

export default MySelf;