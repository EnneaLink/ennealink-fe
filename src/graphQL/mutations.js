import {gql} from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $username: String!  
    $password: String!) {
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
  mutation updateUser(
    $username: String!
    $id: ID!
    $myersBrigg: String!
    $enneagram: String!
  ) {
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