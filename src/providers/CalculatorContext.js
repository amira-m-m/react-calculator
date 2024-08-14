import React, { createContext, useState } from "react";
import BigNumber from "bignumber.js";

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {

    const [displayedNum, setDisplayedNum] = useState('0');
    const [numArr, setNumArr] = useState([]);
    const [opArr, setOpArr] = useState([])
    const [equation, setEquation] = useState('');
    const [result, setResult] = useState(0);
    const [displayResetFlag, setDisplayResetFlag] = useState(false);
    const [equationResetFlag, setEquationResetFlag] = useState(false);

    // Handle calculator key clicks based on button type (class name)
    const calculate = (buttonType, buttonValue) => {

        try {
            switch (buttonType) {
                case 'digit':
                    equationResetFlag && resetEquation();
                    if (displayResetFlag) {
                        resetDisplay();
                        replace(buttonValue);
                    }
                    else {
                        displayedNum === '0' ? replace(buttonValue) : append(buttonValue);
                    };
                    break;

                case 'decimal':
                    equationResetFlag && resetEquation();
                    const searchPattern = /\./;
                    if (displayResetFlag) {
                        resetDisplay();
                        replace(`0.`);
                    }
                    else {
                        !searchPattern.test(displayedNum) && append(buttonValue);
                    };
                    break;

                case 'operator':
                    displayResetFlag && resetDisplay();
                    equationResetFlag && resetEquation();
                    updateEquation(displayedNum, buttonValue);
                    calculateResultSoFar();
                    break;

                case 'calculate':
                    displayResetFlag && resetDisplay();
                    equationResetFlag && resetEquation();
                    updateEquation(displayedNum);
                    calculateResultSoFar();
                    resetEquation();
                    flagDisplayForReset();
                    break;

                case 'clear':
                    displayedNum === '0' && resetEquation();
                    resetDisplay();
                    break;
            };
        
        }
        catch(error) {
            showError();
            flagEquationForReset();
            flagDisplayForReset();
        };

    };

    const replace = (buttonValue) => {
        setDisplayResetFlag(false);
        setEquationResetFlag(false);
        setDisplayedNum(buttonValue);
    };

    const append = (buttonValue) => {
        setDisplayResetFlag(false);
        setEquationResetFlag(false);
        setDisplayedNum((prev) => `${prev}${buttonValue}`);
    };

    const updateEquation = (num, op) => {
        flagDisplayForReset();
        equationResetFlag && setEquationResetFlag(false)
        numArr.push(num);
        setEquation((prev) => `${prev}${num} `)

        // Update equation on calculate button click
        if (op !== undefined) {
            opArr.push(op);
            setEquation((prev) => `${prev}${op} `)
        }

        // Update equation on operation button click
        else {
            calculateResultSoFar();
            setEquation((prev) => `${prev}= `);
            flagEquationForReset();
        };
        
    };

    const calculateResultSoFar = () => {
        setResult(() => {

            // Calculate result for an equation with a single number and no operations
            if (numArr.length === 0 || opArr.length === 0) {
                return result;
            };

            // Calculate result for an equation with multiple numbers and at least one operation
            setResult (() => {
                try {
                    for (let i = 0; i < numArr.length; i++) {

                        const currentOperand = BigNumber(numArr[i]);
                        const currentOperator = (opArr[i-1]);
                        let newResult = result;

                        switch (currentOperator) {
                            case undefined:
                                newResult = currentOperand;
                                break;
                            case '+':
                                newResult = newResult.plus(currentOperand);
                                break;
                            case '-':
                                newResult = newResult.minus(currentOperand);
                                break;
                            case '*':
                                newResult = newResult.times(currentOperand);
                                break;
                            case '/':
                                newResult = newResult.div(currentOperand);
                                break;
                            case '^':
                                newResult = newResult.pow(currentOperand);
                                break;
                        };

                        setDisplayedNum(newResult);
                        setResult(newResult);
                    };
                }
                catch(error) {
                    showError();
                };
            });
        });
    };

    const flagDisplayForReset = () => {
        setDisplayResetFlag(true);
    };

    const flagEquationForReset = () => {
        setEquationResetFlag(true);
    };

    const resetDisplay = () => {
        setDisplayedNum('0');
        setDisplayResetFlag(false);
    };
    
    const resetEquation = () => {
        setNumArr([]);
        setOpArr([]);
        setResult(0);
        setEquation('');
        setEquationResetFlag(false);
    };

    const showError = () => {
        setDisplayedNum('ERROR');
    };

    return (
        <CalculatorContext.Provider value={{
            calculate,
            displayedNum,
        }}>
        {children}
        </CalculatorContext.Provider>
    );
};