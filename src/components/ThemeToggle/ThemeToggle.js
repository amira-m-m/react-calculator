import { Sunny, Moon } from "@chakra-icons/ionicons";
import { Flex } from "@chakra-ui/react"

const ThemeToggle = () => {

    return (

        <Flex
            direction="row"
            align="center"
            justify="space-between"
        >
            <Moon boxSize={6} />
        </Flex>

    );
    
};

export default ThemeToggle;