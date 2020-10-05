import gql from 'graphql-tag';

export const likePost = gql`
  mutation LikePost($postId: Int, $userId: Int) {
    insert_Like(objects: [{ post_id: $postId, user_id: $userId }]) {
      affected_rows
    }
  }
`;
export const deleteLikePost = gql`
  mutation DeleteLikePost($postId: Int, $userId: Int) {
    delete_Like(
      where: { user_id: { _eq: $userId }, post_id: { _eq: $postId } }
    ) {
      affected_rows
    }
  }
`;

export const GetIllustQuery = gql`
  mutation getIllustQuery($type: String!) {
    getIllustQuery(type: $type)
      @rest(type: "illust", path: "getIllustratio", method: "POST") {
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
`;

// export const UserRegistrationQuery = gql`
//   mutation userRegistrationQuery($)
// `

// export const CreateUserQuery = gql`
//   mutation createUserQuery($user_id: String, $user_name: String, $last_seen: String, $comment: String, $icon_image: Any, $header_image: Any, $account_id: String){
//     createUserQuery(user_id: $user_id, user_name: $user_name, last_seen: $last_seen, comment: $comment, icon_image: $icon_image, header_image: $header_image, account_id: $account_id)
//       @rest(type: "createUser", path: "createUser", method: "POST" bodySerializer: "text"){
//         user_id
//         user_name
//         last_seen
//         comment
//         icon_image
//         header_image
//         account_id
//     }
//   }
// `

export const CreateUserQuery = gql`
  mutation createUserQuery($input: userInfo!) {
    createUserQuery(input: $userInfo)
      @rest(type: "createUser", path: "createUser", method: "POST") {
      user_id
    }
  }
`;

export const PostQuery = gql`
  mutation postQuery($input: postData!) {
    postQuery(input: $postData)
      @rest(type: "postContent", path: "postContent", method: "POST") {
      user_id
    }
  }
`;

export const ChangeDiscloseQuery = gql`
  mutation changeDiscloseQuery($input: changeData!) {
    changeDiscloseQuery(input: $changeData)
      @rest(
        type: "changeDisclose"
        path: "cahngeDiscloseContent"
        method: "PUT"
      ) {
      content_id
    }
  }
`;

export const DeleteContentQuery = gql`
  mutation deleteContentQuery($input: ContentId!) {
    deleteContentQuery(input: $ContentId)
      @rest(type: "Post", path: "deleteContnt", method: "DELETE") {
      content_id
    }
  }
`;
