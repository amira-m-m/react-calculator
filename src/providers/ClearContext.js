import React, { createContext, useState } from 'react';

export const ClearContext = createContext();

export const ClearProvider = ({ children }) => {

    const [resetNum, setResetNum] = useState(false);
    const [clearClickedOnce, setClearClickedOnce] = useState(false);

    return (
        <ClearContext.Provider value={{ resetNum, setResetNum, clearClickedOnce, setClearClickedOnce }}>
            {children}
        </ClearContext.Provider>
    );

};