import './App.css';
import UserDisplay from '../UserDisplay/UserDisplay';
import {ApolloClient, 
        InMemoryCache, 
        ApolloProvider, 
        HttpLink, 
        from} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:5432/"}) //This will be the link to our backend server when it is up and running! 
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
