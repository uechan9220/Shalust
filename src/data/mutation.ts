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

export const GetIllustQuery = gql`
  mutation getIllustQuery($type: String!){
    getIllustQuery(type: $type)
      @rest(type: "illust", path: "getIllustratio", method: "POST"){
      content_id
      user_id
      user_name
      icon_url
      detail
      create_at
      title
      views
      adult
      image_url
      image_index
      like_count
    }
  }
`