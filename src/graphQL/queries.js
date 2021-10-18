import {gql} from '@apollo/client';

//look into how to write parameters for getUserStats
export const GET_USER = gql`
  query getUserStats($id: String!) {
    getUserStats(id: $id) {
      email
      username
      enneagram{
        id
        number
        name
        description
      }
      myersBrigg{
        id
        typeOf
        name
        description
      }
    }
  }
  `
  // getUser is a placeholder. we need a name that matches the query that the BE has set up.