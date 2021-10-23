import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = ({username, id}) => {
  const [enneagramType, setEnneagramType] = useState('')
  const [mbtiType, setMbtiType] = useState('');
  // do we need this with graphql?

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // }

  const handleSubmit = e => {
    e.preventDefault();
    
    // save user type & set state in App to match inputs
  }    

  // maybe later add a cancel-btn or back-btn

    return (
      <form className='sign-in-box sign-in'>
        <h1>EnneaLink</h1>
        <h2>Know your personality types?</h2>
        <h3>Choose them below</h3>

        <select name='type-list' className="type-list">
          <option value='null'>mbti</option>
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

        <select name='type-list' className="num-list">
        <option value='null'>enneagram</option>
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

        <button
          className='save-btn'
          onClick={e => this.handleSubmit(e)}>
          Save
        </button>

        <h2>Don't know your types?</h2>
        <h3>That's okay!</h3>   
        <div className="link-container">
          <a className="test-link" href='https://www.idrlabs.com/cognitive-function/test.php' target="_blank"
          rel="noopener noreferrer">Take MBTI Test</a>
          <a className="test-link" href='https://similarminds.com/cgi-bin/sminds2/similarminds3.pl' target="_blank"
          rel="noopener noreferrer">Take Enneagram Test</a>        
        </div>

      </form>
    )
  }


export default EditProfile;