import './ExistingLogIn.css';
import React, { useState } from 'react';
import { LOGIN_USER } from '../../graphQL/mutations';
import { useMutation } from '@apollo/client';
import { useHistory } from "react-router-dom";

const ExistingLogIn = ({ toggleCreate, assignUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('')
  const [loginUser, { data }] =useMutation(LOGIN_USER);
  const history = useHistory();

  if (data) {
    setTimeout(() => {handleLoad(data)}, 1000)
  }

  const handleLoad = (data) => {
    if (data.loginUser.success){
      assignUser(data.loginUser.id);
      history.push(`/profile/${data.loginUser.id}`);
    } else {
      setMessage('Please check that your username or password are correct, or click the button below create a new account.')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      variables: {
        username: username,
        password: password
      }
    })
  }

  return (
    <section className="sign-in">
      <h1 className='login-title'>EnneaLink</h1>

      <form className="sign-in-box">

        <input
          className="login-input login-username"
          type="text" value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />

        <input
          className="login-input password"
          type="password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />

        { message && <p className="message" >{message}</p>}

        <button
          className="submit-btn"
          type="submit"
          onClick={e => handleSubmit(e)}
        >
          Sign In
        </button>

      </form>

      <button
        onClick={toggleCreate}
        className="create-btn"
      >
        Create Account
      </button>

    </section>
  )
}

export default ExistingLogIn;
