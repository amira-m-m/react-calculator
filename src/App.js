import { ChakraProvider } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import './App.css';

function App() {
  return (
    <>
      <ChakraProvider>
        <h1>Hello World</h1>
        <Button>Testing Chakra UI</Button>
      </ChakraProvider>
    </>
  );
}

export default App;
