import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      emailInput: '',
      passwordInput: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }  

  handleSubmit = e => {
    e.preventDefault();

    // user login function
  }    

  render() {
    return (
      <form className='login-form'>
        <h2>Login</h2>

        <input
          type='text'
          placeholder='Email'
          name='emailInput'
          className='email-input'          
          value={this.state.emailInput}
          onChange={e => this.handleChange(e)}
        />

        <input
          type='text'
          placeholder='Password'
          name='passwordInput'
          className='password-input'
          value={this.state.passwordInput}
          onChange={e => this.handleChange(e)}
        />

        <button
          className='login-btn'
          onClick={e => this.handleSubmit(e)}>
          Login
        </button>         
     
      </form>
    )
  }
}

export default Login;