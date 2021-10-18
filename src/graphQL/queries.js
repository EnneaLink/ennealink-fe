import {gql} from '@apollo/client';

export const GET_USER = gql `
  query getUserStats($id: ID!) {
    getUserStats(id: $id) {
      id
      email
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


