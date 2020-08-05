import React, { useContext } from 'react'
import styled from 'styled-components'

interface UserContentProps {
  item: {
    user_id: number;
    name: string;
    last_seen: string;
    icon_url: string;
    header_url: string;
    location: string;
    comment: string;
    account_id: string;
  }
  myUserAuth: boolean
}

const Container = styled.div``

const HeaderContainer = styled.div`
  width: 100vw;

`

const HeaderImage = styled.img`
  width: 100%;
`

const SettingButton = styled.button`
  background-color: #fff;
  border: 1px solid #55ACEE;
  border-radius: 8px;
  color: #55ACEE;
  margin: 5rem 0;
  font-weight: bold;
  font-size: 1.5rem;
  flex: 2;
`

const FollowButton = styled.button`

  background-color: #fff;
  border: 1px solid #55ACEE;
  border-radius: 8px;
  color: #55ACEE;
  margin: 5rem 0;
  font-weight: bold;
  font-size: 1.5rem;
  flex: 2;
  `

const InfoContainer = styled.div`
  padding: 0 3rem;
`

const UserContainer = styled.div`
  display: flex;
`

const AccountImage = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 90%;
  border: 1px solid #000;
  flex:1;
`

const UserName = styled.p`
  font-size: 4rem;
  font-weight: bold;
`

const UserAccountId = styled.p`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
`

const UserInfo = styled.div`
    margin: 3rem 0 0 2rem;
  flex: 7;
`

const UserContent: React.FC<UserContentProps> = ({ item, myUserAuth }) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderImage src={item.header_url} />
      </HeaderContainer>
      <InfoContainer>
        <UserContainer>
          <AccountImage src={item.icon_url} />
          <UserInfo>
            <UserName>{item.name}</UserName>
            <UserAccountId>@{item.account_id}</UserAccountId>
          </UserInfo>
          {myUserAuth ? <SettingButton>設定</SettingButton> : <FollowButton>フォロー</FollowButton>}
        </UserContainer>
      </InfoContainer>

    </Container>
  )
}

export default UserContent