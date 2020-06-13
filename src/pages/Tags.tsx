import React from 'react'
import styled from 'styled-components'
import { Query, QueryResult } from 'react-apollo'
import { allTagQuery } from '../data/queries'
import { TagQueryProps } from '../generated/TagProps'
import { Link } from 'react-router-dom'

const Container = styled.div``

const Tags: React.FC = () => {
  return (
    <Query query={allTagQuery}>
      {({ loading, data, error }: QueryResult<TagQueryProps>) => {
        return (
          <Container>
            {!loading && data
              ? data!.Tags.map((items: any, index: number) => {
                  return (
                    <Link to={`/tags/${items.name}`}>
                      <p key={index}>{items.name}</p>
                    </Link>
                  )
                })
              : null}
            <p>hoge</p>
          </Container>
        )
      }}
    </Query>
  )
}

export default Tags
