import React from "react";
import { Button } from "@chakra-ui/react";

import { ChosenNumContext } from "../providers/ChosenNumContext";

const Key = (props) => {

    const setKeyColorScheme = (type) => {
        const key = keyAttributes.find(key => key.type === type );
        return key ? key.colorScheme : 'gray';
    };

    const setKeyOnClick = (type) => {
        const key = keyAttributes.find(key => key.type === type );
        return key ? key.onClick: () => {};
    };

    const { chosenNum, setChosenNum } = React.useContext(ChosenNumContext);

    const handleClickNum = () => {
        setChosenNum(props.caption);
    };

    const handleClickDec = () => {
        setChosenNum(props.caption);
    };

    const handleClickOp = () => {
        alert('Operation');
    };

    const handleClickClr = () => {
        alert('Clear');
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