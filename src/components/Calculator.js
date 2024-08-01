import { VStack } from '@chakra-ui/react';

import { EnteredNumProvider } from '../providers/EnteredNumContext.js';
import Display from './Display.js';
import Keys from './Keys.js';
import Header from './Header.js';

const Calculator = () => {

    return (

        <VStack>
            <Header text = "Calculator" />
            <EnteredNumProvider>
                <Display />
                <Keys />
            </EnteredNumProvider>
        </VStack>

    );

};

export default Calculator;