import React from 'react'
import styled from 'styled-components'
import { Query, QueryResult } from 'react-apollo'
import { allTagQuery } from '../data/queries'
import { TagQueryProps } from '../generated/TagProps'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
`

const Tag = styled.p`
  display: flex;
  align-items: center;
  color: #37beb0;
  height: 3.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.6em 1em;
  border: 1px solid #37beb0;
  border-radius: 2px;
  background-color: #fff;
  transition: color, background-color 0.1s ease-out;
`

const Tags: React.FC = () => {
  return (
    <Query query={allTagQuery}>
      {({ loading, data, error }: QueryResult<TagQueryProps>) => {
        return (
          <Container>
            {!loading && data
              ? data!.Tags.map((items: any, index: number) => {
                  return (
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/tags/${items.name}`}
                    >
                      <Tag key={index}>{items.name}</Tag>
                    </Link>
                  )
                })
              : null}
          </Container>
        )
      }}
    </Query>
  )
}

export default Tags
