import { ChakraProvider, Flex } from "@chakra-ui/react";

import { CalculatorProvider } from "./providers/CalculatorContext";

import "./App.css";

import Calculator from "./components/Calculator/Calculator";
import MemoryList from "./components/MemoryList/MemoryList";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import Credits from "./components/Credits/Credits";

function App () {

    return (

        <ChakraProvider>
                <Flex
                    direction="row"
                    w="100vw"
                    justify="center"
                >
                    <Flex
                        direction="column"
                        h="100vh"
                        p={10}
                        gap={4}
                        bgColor="gray.300"
                    >
                        <ThemeToggle />
                        <CalculatorProvider>
                            <Calculator />
                        </CalculatorProvider>
                        <Credits />
                    </Flex>
                    <Flex
                        grow={1}
                        p={10}
                        bgColor="gray.100"
                    >
                        <MemoryList />
                    </Flex>
                </Flex>
        </ChakraProvider>

    );

};

export default App;