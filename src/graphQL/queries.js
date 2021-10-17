import {gql} from '@apollo/client';

export const GET_USER = gql`
  query {
    getUser {
      id
      type
      attributes {
        username
        myers_briggs {
          type
          name
          descriptions
        }
        enneagram {
          type
          name
          descriptions
        }
      }
    }
  }
  `
  // getUser is a placeholder. we need a name that matches the query that the BE has set up.