import { VStack } from '@chakra-ui/react';

import { ChosenNumProvider } from '../providers/ChosenNumContext.js';
import Display from './Display.js';
import Keys from './Keys.js';
import Header from './Header.js';

const Calculator = () => {

    return (

        <VStack>
            <Header text = "Calculator" />
            <ChosenNumProvider>
                <Display />
                <Keys />
            </ChosenNumProvider>
        </VStack>

    );

};

export default Calculator;