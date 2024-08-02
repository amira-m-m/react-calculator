import React, { createContext, useState, useContext, useEffect } from 'react';
import { ArrContext } from './ArrContext.js';
import { DisplayedNumContext } from './DisplayedNumContext.js';

export const ResultContext = createContext();

export const ResultProvider = ({ children }) => {

    const [result, setResult] = useState(0);

    const { numArr, opArr } = useContext(ArrContext);
    const { clearNum } = useContext(DisplayedNumContext);

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

        setResult(tempResult);
        clearNum();
                
    }, [numArr, opArr]);

    return (
        <ResultContext.Provider value={{ result }}>
            {children}
        </ResultContext.Provider>
    );
};