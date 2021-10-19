import React, { Component } from 'react';
import './EditProfile.css';

class EditProfile extends Component {
  constructor({ user }) {
    super();

    const {myersBrigg, enneagram, username} = user;

    this.state = {
      usernameInput: username,
      mbtiTypeInput: myersBrigg.typeOf,
      enneagramTypeInput: enneagram.number
    };
  }

  render() {
    return (
      <form className='edit-profile-form'>
        <h2>Choose a username</h2>

        <input
          type='text'
          placeholder={this.state.usernameInput}
          name='username'
          value={this.state.usernameInput}
          onChange={e => this.handleChange(e)}
        />

        <h2>Know your personality types?</h2>
        <h3>Choose them below</h3>

        <select name='type-list' defaultValue={this.state.mbtiTypeInput}>

          <option value='enfj'>ENFJ</option>
          <option value='infj'>INFJ</option>
          <option value='enfp'>ENFP</option>
          <option value='infp'>INFP</option>

          <option value='entj'>ENTJ</option>
          <option value='intj'>INTJ</option>
          <option value='entp'>ENTP</option>
          <option value='intp'>INTP</option>

          <option value='esfj'>ESFJ</option>
          <option value='isfj'>ISFJ</option>
          <option value='esfp'>ESFP</option>
          <option value='isfp'>ISFP</option>

          <option value='estj'>ESTJ</option>
          <option value='istj'>ISTJ</option>  
          <option value='estp'>ESTP</option>
          <option value='istp'>ISTP</option>
        
        </select>

        <select name='type-list' defaultValue={this.state.enneagramTypeInput}>

          <option value='en-1'>1</option>
          <option value='en-2'>2</option>
          <option value='en-3'>3</option>
          <option value='en-4'>4</option>
          <option value='en-5'>5</option>
          <option value='en-6'>6</option>
          <option value='en-7'>7</option>
          <option value='en-8'>8</option>
          <option value='en-9'>9</option>
        
        </select>  

        <h2>Don't know your types?</h2>
        <h3>That's okay!</h3>   

        <a className="test-link" href='https://www.idrlabs.com/cognitive-function/test.php '>Take MBTI Test</a>
        <a className="test-link" href='https://similarminds.com/cgi-bin/sminds2/similarminds3.pl '>Take Enneagram Test</a>        

      </form>
    )
  }
}

export default EditProfile;