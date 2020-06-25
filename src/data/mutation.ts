import gql from 'graphql-tag'

export const likePost = gql`
  mutation LikePost($postId: Int, $userId: Int) {
    insert_Like(objects: [{ post_id: $postId, user_id: $userId }]) {
      affected_rows
    }
  }
`
export const deleteLikePost = gql`
  mutation DeleteLikePost($postId: Int, $userId: Int) {
    delete_Like(
      where: { user_id: { _eq: $userId }, post_id: { _eq: $postId } }
    ) {
      affected_rows
    }
  }
`
