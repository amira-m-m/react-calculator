import React, { createContext, useState } from 'react';

export const EnteredNumContext = createContext();

export const EnteredNumProvider = ({ children }) => {

    const [enteredNum, setEnteredNum] = useState('0');

    const appendNum = (newNum) => {
        setEnteredNum((prevNum) => {
            if (prevNum === '0') {
                return newNum;
            };
            return prevNum + newNum;
        });
    };

    const appendDec = () => {
        setEnteredNum((prevNum) => {
            const pattern = /\./;
            const hasADecimal = pattern.test(prevNum);
            if (hasADecimal) {
                return prevNum;
            };
            return prevNum + '.';
        });
    }

    return (

        <EnteredNumContext.Provider value = {{ enteredNum, appendNum, appendDec }}>
            { children }
        </EnteredNumContext.Provider>

    );

};