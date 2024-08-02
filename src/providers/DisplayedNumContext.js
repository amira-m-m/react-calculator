import React, { createContext, useState } from 'react';

export const DisplayedNumContext = createContext();

export const DisplayedNumProvider = ({ children }) => {

    const [displayedNum, setDisplayedNum] = useState('0');

    const appendNum = (newNum) => {
        setDisplayedNum((prevNum) => {
            if (prevNum === '0') {
                return newNum;
            };
            return prevNum + newNum;
        });
    };

    const appendDec = () => {
        setDisplayedNum((prevNum) => {
            const pattern = /\./;
            const hasADecimal = pattern.test(prevNum);
            if (hasADecimal) {
                return prevNum;
            };
            return prevNum + '.';
        });
    };

    const clearNum = () => {
        setDisplayedNum('0');
    };

    return (
        <DisplayedNumContext.Provider value={{ displayedNum, setDisplayedNum, appendNum, appendDec, clearNum }}>
            {children}
        </DisplayedNumContext.Provider>
    );

};