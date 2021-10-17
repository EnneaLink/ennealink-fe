import './App.css';
import { useState, useEffect } from 'react';
import Profile from '../Profile/Profile';
import UserDisplay from '../UserDisplay/UserDisplay';
import {ApolloClient, 
        InMemoryCache, 
        ApolloProvider, 
        HttpLink, 
        from,
        useQuery,
        gql,      
      } from '@apollo/client';
import {GET_USER} from '../../graphQL/queries';
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
  
  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  
  const {error, loading, data} = useQuery(GET_USER)
  //create a findFriend function to trigger when we click on a friend card, then pass the return as prop to profile. 

  useEffect(() => {
      console.log(data);
      setUser(data);
  }, [data])

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>EnneaLink</h1>
        </header>
        <Profile profileView={user} />
        <UserDisplay friends={friends} allUsers={allUsers} />
      </div>
    </ApolloProvider>
  );
}

export default App;
