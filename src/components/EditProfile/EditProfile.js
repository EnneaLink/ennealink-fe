import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = ({username, id}) => {
  const [enneagramType, setEnneagramType] = useState('')
  const [mbtiType, setMbtiType] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!enneagramType || !mbtiType) {
      console.log('please choose both personality types')
    } else {
      console.log('success!')
      //this is where we can set off our UPDATE_USER_STATS mutation!
    }
  }    

  // maybe later add a cancel-btn or back-btn

    return (
      <form className='sign-in-box sign-in'>
        <h1>EnneaLink</h1>
        <h2>Know your personality types?</h2>
        <h3>Choose them below</h3>

        <select name='type-list' className="type-list" onChange={e => setMbtiType(e.target.value)}>
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

        <select name='type-list' className="num-list" onChange={e => setEnneagramType(parseInt(e.target.value))}>
          <option value='null'>enneagram</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        
        </select>  

        <button
          className='save-btn'
          onClick={e => handleSubmit(e)}>
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