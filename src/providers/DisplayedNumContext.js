import React, { createContext, useContext, useState } from 'react';

import { ClearContext } from './ClearContext.js';

export const DisplayedNumContext = createContext();

export const DisplayedNumProvider = ({ children }) => {

    const { resetNum, setResetNum, clearClickedOnce, setClearClickedOnce } = React.useContext(ClearContext);

    const [displayedNum, setDisplayedNum] = useState('0');

    const appendNum = (newNum) => {
        setDisplayedNum((prevNum) => {
            if (clearClickedOnce) {
                setClearClickedOnce(false);
            };
            if (resetNum) {
                setResetNum(false);
                return newNum;
            };
            if (prevNum === '0') {
                return newNum;
            };
            return prevNum + newNum;
        });
    };

    const appendDec = () => {
        if (clearClickedOnce) {
            setClearClickedOnce(false);
        };
        if (resetNum === true) {
            setDisplayedNum(0);
            setResetNum(false);
        };
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
        setClearClickedOnce(!clearClickedOnce);
    };

    return (
        <DisplayedNumContext.Provider value={{ displayedNum, setDisplayedNum, appendNum, appendDec, clearNum }}>
            {children}
        </DisplayedNumContext.Provider>
    );

};