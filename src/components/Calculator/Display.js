import { Input } from "@chakra-ui/react"
import { useContext } from "react";
import { CalculatorContext } from "../../providers/CalculatorContext";

const Display = () => {

    const {displayedNum} = useContext(CalculatorContext);

    return (

        <Input 
            value={displayedNum}
            bgColor='gray.200'
            readOnly
        />

    );

};

export default Display;