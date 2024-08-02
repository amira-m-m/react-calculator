import { ChakraProvider, Divider, VStack } from '@chakra-ui/react';

import ThemeToggle from './components/ThemeToggle.js';
import Calculator from './components/Calculator.js';
import MemoryList from './components/MemoryList.js';

import './App.css';

function App() {



  return (
    <>
      <ChakraProvider>
        <VStack>
          <ThemeToggle />
          <Divider />
          <Calculator />
          <Divider />
          <MemoryList />
        </VStack>
      </ChakraProvider>
    </>  
  );

}

export default App;
