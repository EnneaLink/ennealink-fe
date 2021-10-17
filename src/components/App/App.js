import './App.css';
import UserDisplay from '../UserDisplay/UserDisplay';
import {ApolloClient, 
        InMemoryCache, 
        ApolloProvider, 
        HttpLink, 
        from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';


const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
}) ;

const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:5432/"}) //This will be the link to our backend server when it is up and running! Ask BE team about if we should keep it local or deployed.
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>EnneaLink</h1>
      </header>
      <UserDisplay />
    </div>
  );
}

export default App;
