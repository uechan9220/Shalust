import gql from 'graphql-tag'

export const allTagQuery = gql`
  query tags {
    Tags {
      name
    }
  }
`

export const allPostQuery = gql`
  query post($tagName: String) {
    Post(where: { post_tags: { Tag: { name: { _eq: $tagName } } } }) {
      create_at
      caption
      image
      Likes_aggregate {
        aggregate {
          count
        }
      }
      Likes {
        id
        post_id
        user_id
      }
    }
  }
`

export const fetchLikes = gql`
  query FetchLikes($id: number, $userId: string) {
    Post(where: { id: { _eq: $id } }) {
      Likes_aggregate {
        aggregate {
          count
        }
      }
      Likes(where: { user_id: { _eq: $userId } }) {
        id
      }
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
