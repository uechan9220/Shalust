import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Query, QueryResult } from 'react-apollo'
import { userQuery } from '../data/queries'
import { UserQueryProps } from '../generated/TagProps'

const Container = styled.div``

const MyPage: React.FC = () => {
  let { id } = useParams()

  return (
    <Query query={userQuery} variables={{ uniqueid: id }}>
      {({ loading, data, error }: QueryResult<UserQueryProps>) => {
        return (
          <Container>
            {!loading && data
              ? data.User.map((items: any, index: number) => {
                  return (
                    <div key={index}>
                      {console.log(items)}
                      <p>{items.name}</p>
                    </div>
                  )
                })
              : null}
            <p>MyPage</p>
            <p>{id}</p>
          </Container>
        )
      }}
    </Query>
  )
}

export default MyPage
