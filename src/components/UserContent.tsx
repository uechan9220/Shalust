import React from 'react'
import styled from 'styled-components'

interface UserContentProps {
  item: {
    user_id: number;
    name: string;
    last_seen: string;
    icon_url: string;
    location: string;
    comment: string;
    account_id: string;
  }
  myUserAuth: boolean
}

const Container = styled.div`

`

const UserContent: React.FC<UserContentProps> = ({ item, myUserAuth }) => {
  return (
    <Container>
      <p>{item.name}</p>
      <p>{item.account_id}</p>
    </Container>
  )
}

export default UserContent