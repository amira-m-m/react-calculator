import { Flex } from "@chakra-ui/react";

import Display from "./Display";
import Keys from "./Keys";

const Calculator = () => {

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