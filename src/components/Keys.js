import { Button, HStack, VStack } from '@chakra-ui/react';

import Key from './Key.js';

const Keys = () => {

    return (
        
        <VStack>

            <HStack>
                <Key value = { 7 } />
                <Key value = { 8 } />
                <Key value = { 9 } />
                <Key value = "+" color = "blue" />
            </HStack>

            <HStack>
                <Key value = { 4 } />
                <Key value = { 5 } />
                <Key value = { 6 } />
                <Key value = "-" color = "blue" />
            </HStack>

            <HStack>
                <Key value = { 1 } />
                <Key value = { 2 } />
                <Key value = { 3 } />
                <Key value = "*" color = "blue" />
            </HStack>

            <HStack>
                <Key value = { 0 } />
                <Key value = "." />
                <Key value = "^" color = "blue" />
                <Key value = "/" color = "blue" />
            </HStack>

            <HStack>
                <Key value = "CLEAR" color = "red" />
                <Key value = "CALCULATE" color = "green" />
            </HStack>
            
        </VStack>
    );

};

export default Keys;