import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import config from './aws-exports';

import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure(config);

/* Replacing suitable variables based on generated file aws-exports.js */
const client = new ApolloClient({
  uri: 'https://abcxyzabcxyzabcxyz.appsync-api.us-east-1.amazonaws.com/graphql',
  headers: {
    'X-Api-Key': 'da9-8978dasfdasfdsaas88dd'
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
