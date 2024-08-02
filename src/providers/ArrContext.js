import React, { createContext, useState } from 'react';

import { DisplayedNumContext } from './DisplayedNumContext.js';

export const ArrContext = createContext();

export const ArrProvider = ({ children }) => {

    const [numArr, setNumArr] = useState([]);
    const [opArr, setOpArr ] = useState([]);

    const { displayedNum, clearNum } = React.useContext(DisplayedNumContext);
    
    const addNumToArr = () => {
        setNumArr((prevNumArr) => [...prevNumArr, Number(displayedNum)]);
        clearNum();
    };

    const addOpToArr = (newOp) => {
        setOpArr((prevOpArr) => [...prevOpArr, newOp]);
    };

    const clearArrs = () => {
        setNumArr([]);
        setOpArr([]);
    };

    return (

        <ArrContext.Provider value = {{ numArr, addNumToArr, opArr, addOpToArr, clearArrs }}>
            { children }
        </ArrContext.Provider>

    );

};