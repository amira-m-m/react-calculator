import { Flex } from "@chakra-ui/react";

import Key from "./Key";

const Keys = () => {

    return (

        <Flex
            direction="column"
            gap={2}
            w="100%"
        >

            <Flex
                direction="row"
                justify="space-between"
            >
                <Key label={7} className="digit" />
                <Key label={8} className="digit" />
                <Key label={9} className="digit" />
                <Key label="+" className="operator" />
            </Flex>

            <Flex
                direction="row"
                justify="space-between"
            >
                <Key label={4} className="digit" />
                <Key label={5} className="digit" />
                <Key label={6} className="digit" />
                <Key label="-" className="operator" />
            </Flex>

            <Flex
                direction="row"
                justify="space-between"
            >
                <Key label={1} className="digit" />
                <Key label={2} className="digit" />
                <Key label={3} className="digit" />
                <Key label="*" className="operator" />
            </Flex>

            <Flex
                direction="row"
                justify="space-between"
            >
                <Key label={0} className="digit" />
                <Key label="." className="decimal" />
                <Key label="^" className="operator" />
                <Key label="/" className="operator" />
            </Flex>

            <Key label="Calculate" className="calculate" />
            <Key label="Clear" className="clear" />

        </Flex>

    );

};

export default Keys;