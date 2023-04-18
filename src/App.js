import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Landing from './components/Landing';
import Bundles from './components/Bundles';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Bundles />
      </Box>
    </ChakraProvider>
  );
}

export default App;
