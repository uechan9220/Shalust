import gql from 'graphql-tag'

export const allTagQuery = gql`
  query tags {
    Tags {
      name
    }
  }
`

export const userQuery = gql`
  query UserQuyery($uniqueid: String) {
    User(where: { uniqueID: { _eq: $uniqueid } }) {
      avatar
      email
      name
      Posts {
        image
      }
    }
  }
`

export const myUserQuery = gql`
  query MyUserQuyery($email: String) {
    User(where: { email: { _eq: $email } }) {
      avatar
      email
      name
      uniqueID
      Posts {
        image
      }
    }
  }
`
