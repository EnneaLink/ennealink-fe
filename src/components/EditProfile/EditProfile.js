import React, { useState, useEffect } from 'react';
import { UPDATE_USER } from '../../graphQL/mutations';
import { useMutation } from '@apollo/client';
import './EditProfile.css';

const EditProfile = ({user, updateTypes}) => {
  const [enneagramType, setEnneagramType] = useState('')
  const [mbtiType, setMbtiType] = useState('');
  const [updateUser, { error, loading, data }] = useMutation(UPDATE_USER);

  if (data) updateTypes(data)
  

  const handleSubmit = e => {
    e.preventDefault();
    if (!enneagramType || !mbtiType) {
      console.log('put in both types')
    } else {
      console.log(user.getUserStats.id)
      updateUser({
        variables: {
          id: user.getUserStats.id,
          username: user.getUserStats.username,
          myersBrigg: mbtiType,
          enneagram: enneagramType
        }
      })
  
    }
  }  

  useEffect(() => {
    console.log('updated data in edit profile', data)
  }, [data])
  // maybe later add a cancel-btn or back-btn

    return (
      <form className='sign-in-box sign-in'>
        <h1>EnneaLink</h1>
        <h2>Know your personality types?</h2>
        <h3>Choose them below</h3>

        <select name='type-list' className="type-list" onChange={e => setMbtiType(e.target.value)}>
          <option value='null'>mbti</option>
          <option value='ENFJ'>ENFJ</option>
          <option value='INFJ'>INFJ</option>
          <option value='ENFP'>ENFP</option>
          <option value='INFP'>INFP</option>

          <option value='ENTJ'>ENTJ</option>
          <option value='INTJ'>INTJ</option>
          <option value='ENTP'>ENTP</option>
          <option value='INTP'>INTP</option>

          <option value='ESFJ'>ESFJ</option>
          <option value='ISFJ'>ISFJ</option>
          <option value='ESFP'>ESFP</option>
          <option value='ISFP'>ISFP</option>

          <option value='ESTJ'>ESTJ</option>
          <option value='ISTJ'>ISTJ</option>  
          <option value='ESTP'>ESTP</option>
          <option value='ISTP'>ISTP</option>
        
        </select>

        <select name='type-list' className="num-list" onChange={e => setEnneagramType(e.target.value)}>
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