import { Box } from '@chakra-ui/react';

import Display from './Display.js';
import Keys from './Keys.js';
import Header from './Header.js';

const Calculator = () => {

    return (

        <Box>

            <Header text = "Calculator" />
            <Display />
            <Keys />

        </Box>

    );

};

export default Calculator;