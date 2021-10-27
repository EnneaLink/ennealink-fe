import './Login.css';
import React, { useState } from 'react';
import { CREATE_USER } from '../../graphQL/mutations';
import { useMutation } from '@apollo/client';
import EditProfile from '../EditProfile/EditProfile';
import ExistingLogIn from '../ExistingLogIn/ExistingLogIn';
import Error from '../Error/Error';

const Login = ({assignUser, user, updateTypes}) => {
  const [username, setUsername] = useState('');
  const [newUser, setNewUser] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [passCheck, setPassCheck] = useState('');
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const [createUser, { error, data }] = useMutation(CREATE_USER);

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
      setMessage('your password did not match')
      setTimeout(() => {setMessage('')}, 4000)
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
              disabled={!username || !newPassword || !passCheck }
            >
              create account
            </button>

            { message && <p className="message" >{message}</p>}

        </form>

        <button
          onClick={toggleCreate}
          className="create-btn"
        >
          already a user? sign in
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
