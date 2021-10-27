import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      return alert(`Graphql error ${message}`);
    });
  }
}) ;

const link = from([
  errorLink,
  new HttpLink({uri:"https://ennealink-be.herokuapp.com/graphql"}) 
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

const router = 

  <ApolloProvider client={client}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </ApolloProvider>

ReactDOM.render(router, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
