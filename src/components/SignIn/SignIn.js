import React, {useState, useEffect} from 'react';
import './SignIn.css';
import { LOGIN_USER } from '../../graphQL/mutations';
import { useMutation } from '@apollo/client';

const SignIn = ({toggleCreate}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser, {error, loading, data}] =useMutation(LOGIN_USER);

  if (data) console.log('after sign in mut data return', data)

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

  
        <button
          className="submit-btn"
          type="submit"
          onClick={e => handleSubmit(e)}
        >
          sign in
        </button>

      </form>

      <button
        onClick={toggleCreate}
        className="create-btn"
      >
        create account
      </button>

    </section>
  )
}

export default SignIn;