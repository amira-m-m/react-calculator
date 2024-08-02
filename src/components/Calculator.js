import { Text, VStack } from '@chakra-ui/react';

import { DisplayedNumProvider } from '../providers/DisplayedNumContext.js';
import { ArrProvider } from '../providers/ArrContext.js';
import Display from './Display.js';
import Keys from './Keys.js';
import Header from './Header.js';
import { ResultProvider } from '../providers/ResultContext.js';

const Calculator = () => {

    return (

        <VStack>
            <Header text = "Calculator" />
            <DisplayedNumProvider>
                <ArrProvider>
                    <ResultProvider>
                        <Display />
                        <Keys />
                    </ResultProvider>
                </ArrProvider>
            </DisplayedNumProvider>
        </VStack>

    );

};

export default Calculator;