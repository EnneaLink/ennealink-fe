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
import { Route } from "react-router";

function App() {

  const [user, setUser] = useState({});
  const [id, setID] = useState(0);
  const {error, loading, data} = useQuery(GET_USER, {
    variables: {id: id}
  })

  useEffect(() => {

    setUser(data);
  }, [data])

  return (

    <div className="App">

      <Route exact path='/'
        render={() =>
          <Login assignUser={setID} user={user} updateTypes={setUser}/>
        }
      />

      <Route exact path='/profile/:id'
        render={({match}) =>
          <Profile profileView={ match.params.id } />
      }
      />

      <Route exact path='/friends'
        render={() =>
          <UserDisplay friends={data.getUserStats.friends} />
        }
      />

    </div>

  );
}

export default App;
