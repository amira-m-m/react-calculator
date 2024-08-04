import React, { createContext, useState, useContext, useEffect } from 'react';
import { ArrContext } from './ArrContext.js';
import { DisplayedNumContext } from './DisplayedNumContext.js';
import { ClearContext } from './ClearContext.js';

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {

    const [result, setResult] = useState(0);

    const { numArr, opArr } = useContext(ArrContext);
    const { setDisplayedNum } = useContext(DisplayedNumContext);
    const { setResetNum } = useContext(ClearContext);

    useEffect(() => {

        if (numArr.length === 0) return;

        let tempResult = Number(numArr[0]);

        for (let i = 1; i < numArr.length; i++) {

            const currentNum = Number(numArr[i]);
            const currentOp = opArr[i - 1];

            switch (currentOp) {
                case '+':
                    tempResult += currentNum;
                    break;
                case '-':
                    tempResult -= currentNum;
                    break;
                case '*':
                    tempResult *= currentNum;
                    break;
                case '/':
                    tempResult /= currentNum;
                    break;
                case '^':
                    tempResult **= currentNum;
                    break;
                default:
                    break;
            }
        }

        setDisplayedNum(tempResult);
        setResult(tempResult);
        setResetNum(true);
                
    }, [numArr, opArr, setDisplayedNum, setResetNum]);

    return (
        <ResultContext.Provider value={{ result }}>
            {children}
        </ResultContext.Provider>
    );
};