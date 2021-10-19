import './Login.css';
import React, { useState } from 'react';
import Form from '../Form/Form';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

  }

  const toggleCreate = () => {
    setNewUser(true)
  }

  const signIn = (
    <section className="sign-in">
      <h1>EnneaLink</h1>
        <form className="sign-in-box">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter your username"/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" minlength={8} required/>
          <button type="submit" className="submit-btn" onClick={handleClick}>sign in</button>
        </form>
        <button onClick={toggleCreate} className="create-btn">create account</button>
    </section>

  );

  const createAccount = (
    <section className="create-account">
      <h1>EnneaLink</h1>

    </section>
  );

  return (
    <div>
      {signIn}
    </div>
  )
}

export default Login;