import React from 'react';
import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import client from './graphql/clients';
import UserSearch from './components/UserSearch';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <ApolloProvider client={client}>
        <Box p={8}>
          <UserSearch />
        </Box>
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;