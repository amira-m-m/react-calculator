import { VStack } from '@chakra-ui/react';

import Display from './Display.js';
import Keys from './Keys.js';
import Header from './Header.js';

const Calculator = () => {

    return (

        <VStack>
            <Header text = "Calculator" />
            <Display />
            <Keys />
        </VStack>

    );

};

export default Calculator;