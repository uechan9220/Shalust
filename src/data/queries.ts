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
    }
  }
`
