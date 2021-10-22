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
  