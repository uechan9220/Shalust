import gql from 'graphql-tag'

export const allTagQuery = gql`
  query tags {
    Tags {
      name
    }
  }
`

export const allPostQuery = gql`
  query posts($tagName: String) {
    Post(where: { post_tags: { Tag: { name: { _eq: $tagName } } } }) {
      create_at
      id
      caption
      image
    }
  }
`
