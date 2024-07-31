import { Box, HStack, Switch } from '@chakra-ui/react';
import { SunnyOutline } from '@chakra-icons/ionicons';


const ThemeToggle = () => {

    return (

            <Box 
                w = "100vw"
                display = "flex"
                justifyContent = "flex-end"
            >
                <HStack>
                    <SunnyOutline boxSize= { 6 } />
                    <Switch />
                </HStack>
            </Box>

    );

};

export default ThemeToggle;