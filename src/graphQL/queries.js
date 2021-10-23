import {gql} from '@apollo/client';

export const GET_USER = gql `
  query getUserStats($id: ID!) {
    getUserStats(id: $id) {
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
      friends{
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
  }`

  export const GET_ALL_USERS = gql `
    query getAllUsers {
      getAllUsers {
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
  }`
