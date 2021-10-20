import './Login.css';
import React, { useState } from 'react';
import Form from '../Form/Form';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [passCheck, setPassCheck] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

  }

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
      //this can be where we send a POST to the BE to make a new user
    } else {
      //return error
    }
  }

  const signIn = (
    <section className="sign-in">
      <h1>EnneaLink</h1>
        <form className="sign-in-box">
          <input className="login-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="enter your username"/>
          <input className="login-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your password" minlength={8} required/>
          <button className="submit-btn" type="submit" className="submit-btn" onClick={handleClick}>sign in</button>
        </form>
        <button onClick={toggleCreate} className="create-btn">create account</button>
    </section>

  );

  const makeAccount = (
    <section className="create-account">
      <h1>EnneaLink</h1>
        <form className="sign-in-box">
          <input className="login-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="choose a username"/>
          <input className="login-input" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="create a password (min 8 characters)" minlength={8} required/>
          <input className="login-input" type="password" value={passCheck} onChange={(e) => setPassCheck(e.target.value)} placeholder="create a password (min 8 characters)" minlength={8} required/>
          <button className="submit-btn" type="submit" className="submit-btn" onClick={createAccount}>next</button>
        </form>
        <button onClick={toggleCreate} className="create-btn">already a user? sign in</button>
    </section>
  );

  return (
    <div>
      { newUser ? makeAccount : signIn}
    </div>
  )
}

export default Login;