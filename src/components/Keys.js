import { Button, HStack, VStack } from '@chakra-ui/react';

import Key from './Key.js';

const Keys = () => {

    return (
        
        <VStack>

            <HStack>
                <Key
                    type = "num"
                    caption = { 7 }
                />
                <Key
                    type = "num"
                    caption = { 8 }
                />
                <Key
                    type = "num"
                    caption = { 9 }
                />
                <Key
                    type = "op"
                    caption = "+"
                />
            </HStack>

            <HStack>
                <Key
                    type = "num"
                    caption = { 4 }
                />
                <Key
                    type = "num"
                    caption = { 5 }
                />
                <Key
                    type = "num"
                    caption = { 6 }
                />
                <Key
                    type = "op"
                    caption = "-"
                />
            </HStack>

            <HStack>
                <Key
                    type = "num"
                    caption = { 1 }
                />
                <Key
                    type = "num"
                    caption = { 2 }
                />
                <Key
                    type = "num"
                    caption = { 3 }
                />
                <Key
                    type = "op"
                    caption = "*"
                />
            </HStack>

            <HStack>
                <Key
                    type = "num"
                    caption = { 0 }
                />
                <Key
                    type = "dec"
                    caption = "."
                />
                <Key
                    type = "op"
                    caption = "^"
                />
                <Key
                    type = "op"
                    caption = "/"
                />
            </HStack>


            <HStack>
                <Key
                    type = "clr"
                    caption = "CLEAR"
                />
                <Key
                    type = "calc"
                    caption = "CALCULATE"
                />
            </HStack>
            
        </VStack>
    );

};

export default Keys;