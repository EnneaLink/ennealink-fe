import './Login.css';
import React, { useState, useEffect } from 'react';
import {CREATE_USER, LOGIN_USER} from '../../graphQL/mutations';
import {useMutation} from '@apollo/client';
import EditProfile from '../EditProfile/EditProfile';
import ExistingLogIn from '../ExistingLogIn/ExistingLogIn';
import Error from '../Error/Error';

const Login = ({assignUser, user, updateTypes}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [passCheck, setPassCheck] = useState('');
  const [id, setId] = useState('');

  const [createUser, { error, loading, data }] = useMutation(CREATE_USER);

  if (error) console.log(error)

  if (data) {assignUser(data.createUser.id)}

  if (data) {
    if (!id) {
      setId(data.createUser.id)
    }
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
      createUser({
        variables: {
          username: username,
          password: newPassword
        }
      })
    } else {
      alert('your password did not match')
      //do some sort of error handling
    }
  }


  const signIn = <ExistingLogIn toggleCreate={toggleCreate} assignUser={assignUser} />

  const makeAccount = () => {

    if (user === undefined) {
      return (
      <section className="create-account">
        <h1 className='ennealink-login'>EnneaLink</h1>

        <form className="sign-in-box">

          <input
            className="login-input login-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value.replace(/[^a-z0-9]/gi,''))}
            placeholder="username"
            maxLength={10} required
          />

          <input
            className="login-input password-1"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="password"
            minLength={8} required
          />

          <input
            className="login-input password-2"
            type="password"
            value={passCheck}
            onChange={(e) => setPassCheck(e.target.value)}
            placeholder="password"
            minLength={8} required
          />

            <button
              className="submit-btn next"
              type="submit"
              className="submit-btn next"
              onClick={createAccount}
            >
              Create Account
            </button>
        </form>

        <button
          onClick={toggleCreate}
          className="create-btn"
        >
          Already a user? Sign in!
        </button>

      </section> )
    } else {
      return <EditProfile updateTypes={updateTypes} id={id} username={username}/>
    }
  }

  return (
    <div className="login-container">
      {newUser ? makeAccount() : signIn}
      {error && <Error message={error}/>}
    </div>
  )
}

export default Login;
