import { useContext } from "react";

import { Button } from "@chakra-ui/react";

import { CalculatorContext } from "../../providers/CalculatorContext";

const Key = (props) => {

    const {calculate} = useContext(CalculatorContext);

    const setButtonColorScheme = () => {
        const buttonType = props.className;
        switch (buttonType) {
            case 'operator':
                return 'purple';
            case 'calculate':
                return 'green';
            case 'clear':
                return 'red';
            default:
                return 'gray';
        };
    };

    const handleButtonClick = () => {
        const buttonType = props.className;
        const buttonValue = props.label;
        calculate(buttonType, buttonValue);
    };

    return (

        <Button
            onClick={handleButtonClick}
            colorScheme={setButtonColorScheme()}
        >
            {props.label}
        </Button>

    );
        
};

export default Key;