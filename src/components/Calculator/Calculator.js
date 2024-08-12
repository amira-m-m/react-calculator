import { useContext } from "react";

import { Button, Flex, Input, Text } from "@chakra-ui/react";

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
            <Text>DEBUG - Last clicked:</Text>
            <Input value={lastClicked} />
            <Text>DEBUG - Equation:</Text>
            <Input value={equation} />
            <Text>DEBUG - Result so far:</Text>
            <Input value={result} />
        </Flex>

    );

};

export default Calculator;