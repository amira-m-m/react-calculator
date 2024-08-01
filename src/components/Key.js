import React from "react";
import { Button } from "@chakra-ui/react";

import { EnteredNumContext } from "../providers/EnteredNumContext";

const Key = (props) => {

    const setKeyColorScheme = (type) => {
        const key = keyAttributes.find(key => key.type === type );
        return key ? key.colorScheme : 'gray';
    };

    const setKeyOnClick = (type) => {
        const key = keyAttributes.find(key => key.type === type );
        return key ? key.onClick: () => {};
    };

    const { appendNum, appendDec, clearNum } = React.useContext(EnteredNumContext);

    const handleClickNum = () => {
        appendNum(props.caption.toString());
    };

    const handleClickDec = () => {
        appendDec();
    };

    const handleClickOp = () => {
        alert('Operation');
    };

    const handleClickClr = () => {
        clearNum();
    };

    const handleClickCalc = () => {
        alert('Calculate');
    };

    const keyAttributes = [
        { type: 'num', colorScheme: 'gray', onClick: handleClickNum },
        { type: 'dec', colorScheme: 'gray', onClick: handleClickDec },
        { type: 'op', colorScheme: 'blue', onClick: handleClickOp },
        { type: 'clr', colorScheme: 'red', onClick: handleClickClr },
        { type: 'calc', colorScheme: 'green', onClick: handleClickCalc }
    ];

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