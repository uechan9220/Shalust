import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Query, QueryResult } from 'react-apollo'

/**
 * query, Props
 */
import { allPostQuery } from '../data/queries'
import { PostQueryProps } from '../generated/Props'

const Container = styled.div``

const Title = styled.p`
  text-align: center;
  margin: 2rem 0;
  font-size: 3rem;
  font-weight: bold;
`

const Tag: React.FC = (props: any) => {
  let { tag } = useParams()

  return (
    <Query query={allPostQuery} variables={{ tagName: '期待の新人' }}>
      {({ loading, data, error }: QueryResult<PostQueryProps>) => {
        return (
          <Container>
            <Title>{tag}</Title>
            {console.log(data)}
            {!loading && data
              ? data.Post.map((items: any, index: number) => {
                  return (
                    <div>
                      <p>{items.id}</p>
                      <p>{items.create_at}</p>
                      <p>{items.caption}</p>
                      <p>{items.image}</p>
                    </div>
                  )
                })
              : null}
          </Container>
        )
      }}
    </Query>
  )
}

export default Tag
