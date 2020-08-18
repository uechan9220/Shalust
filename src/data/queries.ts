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

/**
 * illustratio query
 */
// export const IllustratioQuery = gql`
//   query illustratio($myUserId: String) {
//     Illustratio {
//       id
//       image_url
//       title
//       comment
//       like_count #Likeされている数をnumber型でほしい
//       Like(where: { user_id: { _eq: $myUserId } }) {
//         isLike #自身がお気に入りしているか知りたい boolean型
//       }
//       bookmark(where: { user_id: { _eq: $myUserId } }) {
//         isBookmark #自身がブックマークしているか知りたい boolean型
//       }
//       User {
//         name
//         icon_url
//       }
//     }
//   }
// `


export const GetIllustQuery = gql`
  query getIllustQuery{
    illust @rest(type: "Illust", path: "getIllustratio" ){
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


// UserPageQuery
export const GetUserIllustQuery = gql`
  query getUserIllustQuery($user_id: String!){
    userData(user_id: $user_id)
     @rest(type: "userData", path: "user/{args.user_id}/Illustratio"){
       illustratio
     }
  }
`

export const GetUserRoughQuery = gql`
  query getUserRoughQuery($user_id: String!){
    userData(user_id: $user_id)
     @rest(type: "userData", path: "user/{args.user_id}/rough"){
       rough
     }
  }
`

export const GetUserCommicQuery = gql`
  query getUserCommicQuery($user_id: String!){
    userData(user_id: $user_id)
     @rest(type: "userData", path: "user/{args.user_id}/commic"){
       commic
     }
  }
`

export const GetUserGraffitiQuery = gql`
  query getUserGraffitiQuery($user_id: String!){
    userData(user_id: $user_id)
     @rest(type: "userData", path: "user/{args.user_id}/graffiti"){
       graffiti
     }
  }
`