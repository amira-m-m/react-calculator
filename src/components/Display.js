import React from 'react';
import { HStack, Input, Text } from '@chakra-ui/react';

import { DisplayedNumContext } from '../providers/DisplayedNumContext.js';
import { ResultContext } from '../providers/ResultContext.js';

const Display = () => {

    const { displayedNum } = React.useContext(DisplayedNumContext);
    const { result } = React.useContext(ResultContext);

    return (

        <HStack>
        <Input
            value = { displayedNum }
            readOnly
        />
        <Text>{ result }</Text>
        </HStack>

    );

};

export default Display;