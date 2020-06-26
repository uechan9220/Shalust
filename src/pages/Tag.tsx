import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { useParams } from 'react-router-dom'
import { Query, QueryResult, useMutation } from 'react-apollo'
import { AuthContext } from '../AuthProvider'

/**
 * query, Props
 */
import { allPostQuery, fetchLikes } from '../data/queries'
import { PostQueryProps } from '../generated/Props'
import { likePost } from '../data/mutation'

// columnWidth: 1カラムの幅
// maxColumn: 最大カラム数
const flexFitting = (columnWidth: number, maxColumn: number) => {
  let styles = ''
  for (let i = 1; i < maxColumn; i++) {
    styles += `
      @media only screen and (min-width: ${i * columnWidth}px){
        max-width: ${i * columnWidth}px;
      }
     `
  }
  return css`
    ${styles}
  `
}

const Container = styled.div`
  padding: 0 1rem;
`

const Title = styled.p`
  text-align: center;
  margin: 2rem 0;
  font-size: 3rem;
  font-weight: bold;
`

const ContentContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-flow: wrap;
  ${flexFitting(256, 8)}
`

const Content = styled.div`
  min-width: 14rem;
  min-height: 20rem;
  max-width: 14rem;
  max-height: 20rem;
  margin: 1rem;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ImageContent = styled.div`
  height: 15rem;
`

const Tag: React.FC = (props: any) => {
  let { tag } = useParams()
  const { currentUser } = useContext(AuthContext)
  const [liked, setLiked] = useState(false)
  const [countLikes, setCountLikes] = useState(-1)

  // useMutationで変数を使いたい
  // const postLike = (post_id: number, user_id: number) => {
  //   useMutation(likePost, {
  //     variables: { postId: post_id, userId: user_id },
  //     refetchQueries: [
  //       {
  //         query: fetchLikes,
  //         variables: { id: post_id, userId: user_id },
  //       },
  //     ],
  //   })
  // }

  const deleteLike = (postId: number, userId: number) => {}

  return (
    <Query query={allPostQuery} variables={{ tagName: tag }}>
      {({ loading, data, error }: QueryResult<PostQueryProps>) => {
        return (
          <Container>
            <Title>{tag}</Title>
            <ContentContainer>
              {!loading && data
                ? data.Post.map((items: any, index: number) => {
                    return (
                      <Content>
                        <ImageContent>
                          <Image src={items.image} />
                        </ImageContent>
                        <p>{items.create_at}</p>
                        <p>{items.caption}</p>
                        <p>Like: {items.Likes_aggregate.aggregate.count}</p>
                        {!liked && (
                          <button
                            className="post-like-button-white button-nodec"
                            onClick={() => {
                              // postLike(items.Likes.post_id, items.Likes.user_id)
                              setLiked(true)
                              setCountLikes(countLikes + 1)
                            }}
                          />
                        )}
                        {liked && (
                          <button
                            className="post-like-button-black button-nodec"
                            onClick={() => {
                              deleteLike(
                                items.Likes.post_id,
                                items.Likes.user_id
                              )
                              setLiked(false)
                              setCountLikes(countLikes - 1)
                            }}
                          />
                        )}
                      </Content>
                    )
                  })
                : null}
            </ContentContainer>
          </Container>
        )
      }}
    </Query>
  )
}

export default Tag
