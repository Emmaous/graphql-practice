import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'


//components
import BookList from './components/BookComponent';


//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Avatah's Graphql Practice</h1>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
