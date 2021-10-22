import './App.css';
import { useState, useEffect } from 'react';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Loader from '../Loader/Loader';
import UserDisplay from '../UserDisplay/UserDisplay';
import {useQuery} from '@apollo/client';
import {GET_USER} from '../../graphQL/queries';
import {onError} from '@apollo/client/link/error';



function App() {

  const [user, setUser] = useState({});
  // const [friends, setFriends] = useState([]);

  

  const {error, loading, data} = useQuery(GET_USER, {
    variables: {id: "2"} //dynamically change id number with data from the create user mutation
  })
  //create a findFriend function to trigger when we click on a friend card, then pass the return as prop to profile.

  useEffect(() => {
    console.log(data);
    setUser(data);
  }, [data])

  return (
    <div className="App">
      
      <Login />
  
    </div>
  );
}

export default App;
