import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Query, QueryResult } from 'react-apollo'

/**
 * query, Props
 */
import { allPostQuery } from '../data/queries'
import { PostQueryProps } from '../generated/Props'

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
`

const Content = styled.div`
  width: 15rem;
  height: 15rem;
`

const ContentImage = styled.img`
  width: 100%;
`

const Tag: React.FC = (props: any) => {
  let { tag } = useParams()

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
