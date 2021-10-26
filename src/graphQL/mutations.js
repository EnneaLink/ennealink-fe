import {gql} from '@apollo/client';

export const CREATE_USER = gql `
  mutation createUser(
    $username: String!  
    $password: String!
  )
  {
    createUser(
      authProvider: {
        credentials: {
          username: $username
          password: $password
        }
      } 
    )
    {
      id
      username
    }
  }
`

export const UPDATE_USER = gql `
  mutation updateUser (
    $username: String!
    $id: ID!
    $myersBrigg: String!
    $enneagram: String!
  )
  {
    updateUser(
      username: $username
      id: $id
      myersBrigg: $myersBrigg
      enneagram: $enneagram
    )
    {
      id
      username
      enneagram{
        id
        number
        name
        description
        link
      }
      myersBrigg{
        id
        typeOf
        name
        description
        link
      }
    }
  }
`

export const LOGIN_USER = gql `
  mutation loginUser(
    $username: String!
    $password: String!
  )
  {
    loginUser(
      username: $username
      password: $password
    )
    {
      success
      id
    }
  }
`

export const ADD_FRIEND = gql `
  mutation addFriend(
    $userId: ID!
    $friendId: ID!
  )
  {
    addFriend(
        userId: $userId
        friendId: $friendId
      )
    {
      success
    }
  }
`

export const DELETE_FRIEND = gql `
  mutation deleteFriend(
    $userId: ID!
    $friendId: ID!
  )
  {
    deleteFriend(
      userId: $userId
      friendId: $friendId
    )
    {
      success
    }
  }
`