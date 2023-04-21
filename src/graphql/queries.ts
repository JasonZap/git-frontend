import { gql } from '@apollo/client';

export const SEARCH_USERS = gql`
  query SearchUsers($queryString: String!, $first: Int) {
    search(type: USER, query: $queryString, first: $first) {
      edges {
        node {
          ... on User {
            id
            login
            avatarUrl
            url
          }
        }
      }
    }
  }
`;
