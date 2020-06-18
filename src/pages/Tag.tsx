import React, { useContext } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Query, QueryResult, useMutation } from 'react-apollo'
import { AuthContext } from '../AuthProvider'

/**
 * query, Props
 */
import { allPostQuery } from '../data/queries'
import { PostQueryProps } from '../generated/Props'
import { likePost } from '../data/mutation'

/**
 * どうにかstyled-componentsで実装したい
 * 参考URL -> https://qiita.com/wintyo/items/cb90e5ac50d193cce578
 */
// @mixin flex-fitting($column - width, $max - column) {
//   @for $i from 1 through $max - column {
//     @media only screen and(min - width: $i * $item - width) {
//       max - width: $i * $item - width;
//     }
//   }
// }

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
  flex-flow: row wrap;
  justify-content: space-between;
  &::after {
    content: '';
    flex: auto;
  }
`

const Content = styled.div`
  min-width: 15rem;
  min-height: 15rem;
  max-width: 15rem;
  max-height: 15rem;
  margin: 2rem 1rem;
`

const ContentImage = styled.img`
  width: 100%;
  height: 100%;
`

const Tag: React.FC = (props: any) => {
  let { tag } = useParams()
  const { currentUser } = useContext(AuthContext)

  const [like_post] = useMutation(likePost, {
    // variables: {postId: }
  })

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
                        <ContentImage src={items.image} />
                        <p>{items.create_at}</p>
                        <p>{items.caption}</p>
                        <p>Like: {items.Likes_aggregate.aggregate.count}</p>
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
