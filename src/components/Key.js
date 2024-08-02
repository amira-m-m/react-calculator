import React from "react";
import { Button } from "@chakra-ui/react";

import { DisplayedNumContext } from "../providers/DisplayedNumContext.js";
import { ArrContext } from "../providers/ArrContext.js";

const Key = (props) => {

    const { appendNum, appendDec, clearNum } = React.useContext(DisplayedNumContext);
    const { addNumToArr, addOpToArr, clearArrs } = React.useContext(ArrContext);

    const handleClickNum = () => {
        appendNum(props.caption.toString());
    };

    const handleClickDec = () => {
        appendDec();
    };

    const handleClickOp = () => {
        addNumToArr();
        addOpToArr(props.caption.toString());
    };

    const handleClickClr = () => {
        clearNum();
    };

    const handleClickCalc = () => {
        addNumToArr();
    };

    const keyAttributes = [
        { type: 'num', colorScheme: 'gray', onClick: handleClickNum },
        { type: 'dec', colorScheme: 'gray', onClick: handleClickDec },
        { type: 'op', colorScheme: 'blue', onClick: handleClickOp },
        { type: 'clr', colorScheme: 'red', onClick: handleClickClr },
        { type: 'calc', colorScheme: 'green', onClick: handleClickCalc }
    ];

    const setKeyColorScheme = (type) => {
        const key = keyAttributes.find(key => key.type === type );
        return key ? key.colorScheme : 'gray';
    };

    const setKeyOnClick = (type) => {
        const key = keyAttributes.find(key => key.type === type );
        return key ? key.onClick: () => {};
    };

    return (

        <Button
            colorScheme = { setKeyColorScheme(props.type) }
            onClick = { setKeyOnClick(props.type) }
        >
            { props.caption }
        </Button>

    );

};

export default Key;