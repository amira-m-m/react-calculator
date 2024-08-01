import React, { createContext, useState } from 'react';

export const ChosenNumContext = createContext();

export const ChosenNumProvider = ({ children }) => {

    const [chosenNum, setChosenNum] = useState(null);

    return (

        <ChosenNumContext.Provider value = {{ chosenNum, setChosenNum }}>
            { children }
        </ChosenNumContext.Provider>

    );

};