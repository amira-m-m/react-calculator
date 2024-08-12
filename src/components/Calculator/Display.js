import { Input } from "@chakra-ui/react"
import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";

const Display = () => {

    const {displayedNum} = useContext(CalculatorContext);

    return (

        <Input 
            value={displayedNum}
            readOnly
        />

    );

};

export default Display;