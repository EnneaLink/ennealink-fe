import './Login.css';
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';
import {CREATE_USER} from '../../graphQL/mutations';
import {useMutation} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import { Link } from 'react-router-dom';

const Login = ({assignUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [passCheck, setPassCheck] = useState('');

  const [createUser, { error, loading, data }] = useMutation(CREATE_USER);

  if (data) { assignUser(data.createUser.id)
    console.log('data from mutation', data.createUser)}

  // const errorLink = onError(({ graphQLErrors, networkError }) => {
  //   if (graphQLErrors)
  //     graphQLErrors.forEach(({ message, locations, path }) =>
  //       console.log(
  //         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
  //       ),
  //     );
  
  //   if (networkError) console.log(`[Network error]: ${networkError}`);
  // });

  const toggleCreate = () => {
    if (!newUser){
      setNewUser(true)
    } else {
      setNewUser(false)
    }
  }
  
  const createAccount = (e) => {
    e.preventDefault();
    if (newPassword === passCheck) {
      createUser({
        variables: {
          username: username,
          password: newPassword
        }
      })
      //redirrect to type inputs
    } else {
      alert('your password did not match')
      //do some sort of error handling
    }
  }


  const signIn = (
    <section className="sign-in">
      <h1>EnneaLink</h1>

      <form className="sign-in-box">

        <input
          className="login-input"
          type="text" value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter your username"
        />

        <input
          className="login-input"
          type="password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
          minlength={8} required
        />

        <Link
          to={'/profile'}
          key='1'  
        >

          <button
            className="submit-btn"
            type="submit"
          >
            sign in
          </button>

        </Link>

      </form>

      <button
        onClick={toggleCreate}
        className="create-btn"
      >
        create account
      </button>

    </section>

  );

  const makeAccount = (
    <section className="create-account">
      <h1>EnneaLink</h1>

      <form className="sign-in-box">

        <input 
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="choose a username"
        />

        <input
          className="login-input"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="create a password (min 8 characters)"
          minlength={8} required
        />

        <input
          className="login-input"
          type="password"
          value={passCheck}
          onChange={(e) => setPassCheck(e.target.value)}
          placeholder="create a password (min 8 characters)"
          minlength={8} required
        />

          <button
            className="submit-btn"
            type="submit"
            className="submit-btn"
            onClick={createAccount}
          >
            next
          </button>
      </form>

      <button
        onClick={toggleCreate}
        className="create-btn"
      >
        Already a user? Sign in
      </button>

    </section>
  );

  return (
    <div>
      { newUser ? makeAccount : signIn}
    </div>
  )
}

export default Login;