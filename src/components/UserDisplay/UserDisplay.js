import React from 'react';
import {useState} from 'react';

const UserDisplay = ({ friends }) => {

  const [allUsers, setAllUsers] = useState([]);

  return (
    <p> I'm a user display!</p>
  )
}

export default UserDisplay;
