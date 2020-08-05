import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Query, QueryResult } from 'react-apollo'
import { userQuery } from '../data/queries'
import { UserQueryProps } from '../generated/TagProps'

/**
 * component
 */

import UserContent from '../components/UserContent'

/**
 * test Data 
 */
import { TestUserData } from '../data/Data'

const Container = styled.div``

interface UserProps {
  user_id: number;
  name: string;
  last_seen: string;
  icon_url: string;
  header_url: string;
  location: string;
  comment: string;
  account_id: string;
}


const User: React.FC = () => {
  let { user_id } = useParams()
  const [userData, setUserData] = useState<UserProps>()

  useEffect(() => {
    TestUserData.filter((items: any, index: number) => {
      switch (items.account_id) {
        case user_id:
          setUserData(items)
          break;
        default:
          break;
      }
    })
  }, [user_id])

  return (
    // <Query query={userQuery} variables={{ uniqueid: user_id }}>
    //   {({ loading, data, error }: QueryResult<UserQueryProps>) => {
    //     return (
    //       <Container>
    //         {!loading && data
    //           ? data.User.map((items: any, index: number) => {
    //               return (
    //                 <div key={index}>
    //                   <p>{items.name}</p>
    //                 </div>
    //               )
    //             })
    //           : null}
    //         <p>User</p>
    //         <p>{user_id}</p>
    //       </Container>
    //     )
    //   }}
    // </Query>
    <Container>
      {/* Userが存在しているかを判別 */}
      {userData ?
        // 自分自身かどうかを判別する
        (userData.account_id == "moooooooooooke" ?
          <UserContent item={userData} myUserAuth={true} />
          : <UserContent item={userData} myUserAuth={false} />)
        : <p>このアカウントは存在しません</p>}
    </Container>
  )
}

export default User
