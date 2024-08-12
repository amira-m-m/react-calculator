import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";

const Key = (props) => {

    const {calculate} = useContext(CalculatorContext);

    const handleButtonClick = () => {
        const buttonType = props.className;
        const buttonValue = props.label;
        calculate(buttonType, buttonValue);
    };

    return (

        <Button
            onClick={handleButtonClick}
        >
            {props.label}
        </Button>

    );
        
};

export default Key;