import { ChakraProvider } from '@chakra-ui/react';

import ThemeToggle from './components/ThemeToggle.js';
import Calculator from './components/Calculator.js';
import Memory from './components/Memory.js';

import './App.css';

function App() {



  return (
    <>
      <ChakraProvider>
        <ThemeToggle />
        <Calculator />
        <Memory />
      </ChakraProvider>
    </>  
  );

}

export default App;
