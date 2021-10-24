import './App.css';
import { useState, useEffect } from 'react';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';
import Loader from '../Loader/Loader';
import UserDisplay from '../UserDisplay/UserDisplay';
import {useQuery} from '@apollo/client';
import {GET_USER} from '../../graphQL/queries';
import {onError} from '@apollo/client/link/error';



function App() {

  const [user, setUser] = useState({});
  const [id, setID] = useState(0);
  // const [friends, setFriends] = useState([]);

  
  
const {error, loading, data} = useQuery(GET_USER, {
    variables: {id: id} 
  })

  useEffect(() => {
    setUser(data);
  }, [data])

  return (
    <div className="App">
      
      <Login assignUser={setID} />
      {user && <EditProfile user={user} updateTypes={setUser} />}
    </div>
  );
}

export default App;
