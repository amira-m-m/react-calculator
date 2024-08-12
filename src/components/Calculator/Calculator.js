import { useContext } from "react";

import { Flex } from "@chakra-ui/react";

import { CalculatorContext } from "../../providers/CalculatorContext";

import Display from "./Display";
import Keys from "./Keys";

const Calculator = () => {

    const {lastClicked, equation, result} = useContext(CalculatorContext);

    return (

        <Flex
            direction="column"
            justify="start"
            align="center"
            flexGrow={1}
            w={200}
            gap={4}
        >
            <Display />
            <Keys />
        </Flex>

    );

};

export default Calculator;