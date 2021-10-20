import './App.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import UserDisplay from '../UserDisplay/UserDisplay';
import {useQuery} from '@apollo/client';
import {GET_USER} from '../../graphQL/queries';
import {onError} from '@apollo/client/link/error';



function App() {

  const [user, setUser] = useState({});
  const [friends, setFriends] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const {error, loading, data} = useQuery(GET_USER, {
    variables: {id: "1"}
  })
  //create a findFriend function to trigger when we click on a friend card, then pass the return as prop to profile.

  useEffect(() => {
    console.log(data);
    setUser(data);
  }, [data])

  return (
    <div className="App">
      <Header />
      {!loading && <Profile profileView={data.getUserStats} />}
      // <UserDisplay friends={friends} allUsers={allUsers} />
    </div>
  );
}

export default App;
