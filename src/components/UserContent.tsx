import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

/**
 * components
 */
import Items from '../components/Items'
import UserNavbar from '../components/UserNavbar'

/**
 * testData
 */
import { IllustDataTest, RoughData, CommicData, GraffitiData } from '../data/Data'
import { GetUserIllustQuery, GetIllustQuery, GetUserRoughQuery } from '../data/queries'
import { useQuery, Query } from 'react-apollo'

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
  height: 100%;

`

const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
`

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #55ACEE;
  border-radius: 8px;
  color: #55ACEE;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 1rem 4rem;
  @media (max-width: 450px) {
    padding: .5rem 2rem;
  }
`

const InfoContainer = styled.div`
  margin: 1rem 0 2rem 0;
  padding: 0 3rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`

const UserContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`

const AccountImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  max-width: 10rem;
  max-height: 10rem;
  @media (max-width: 450px) {
    max-width: 6rem;
    max-height: 6rem;
  }
`

const AccountImage = styled.img`
  width: 100%;
  border-radius: 90%;
  border: 1px solid #000;
`

const UserName = styled.p`
  font-size: 3rem;
  font-weight: bold;
  @media (max-width: 450px){
    font-size: 2rem;
  }
`

const UserAccountId = styled.p`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
  @media (max-width: 450px){
    font-size: 1rem;
  }
`

const UserInfo = styled.div`
  margin: 0.5rem 0;
`

const DetailContainer = styled.div`
  width: 100%;
`

const Detail = styled.p`
  white-space: pre-wrap;
  font-size: 24px;
  line-height: 48px;
  @media  (max-width: 768px){
    font-size: 16px;
    line-height: 24px;
  }
`

const AccountButtonConatiner = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`



const UserContent: React.FC<UserContentProps> = ({ item, myUserAuth }) => {
  let { user_id, content } = useParams()
  const [selectNumber, setNumber] = useState(1)
  const [getQuery, setQuery] = useState(GetUserIllustQuery)
  const [Data, setData] = useState(IllustDataTest)

  useEffect(() => {
    console.log(content)
    switch (content) {
      case 'illust':
        setNumber(1)
        setQuery(GetUserIllustQuery)
        break
      case 'rough':
        setNumber(2)
        setQuery(GetUserRoughQuery)
        setData(RoughData)
        break
      case 'commic':
        setNumber(3)
        setData(CommicData)
        break
      case 'graffiti':
        setNumber(4)
        setData(GraffitiData)
        break
      default:
        setNumber(1)
        setData(IllustDataTest)
        break
    }
  }, [content])

  return (
    <Query query={getQuery} variables={{ user_id }}>
      {({ loading, data, err }: any) => {
        console.log(err)
        if (loading) { return <p>...loading</p> }
        if (data.userData.illustratio) {
          setData(data.userData.illustratio)
        }
        console.log(data.userData)
        return (
          <Container>
            <HeaderContainer>
              <HeaderImage src={item.header_url} />
            </HeaderContainer>
            <InfoContainer>
              <UserContainer>
                <AccountImageContainer>
                  <AccountImage src={item.icon_url} />
                </AccountImageContainer>
                <AccountButtonConatiner>
                  {myUserAuth ? <Button onClick={() => console.log('設定')}>設定</Button> : <Button onClick={() => console.log("フォローしました。")}>フォロー</Button>}
                </AccountButtonConatiner>
              </UserContainer>
              <UserInfo>
                <UserName>{item.name}</UserName>
                <UserAccountId>@{item.account_id}</UserAccountId>
              </UserInfo>
              <DetailContainer>
                <Detail>{item.comment}</Detail>
              </DetailContainer>

              <UserNavbar selectNumber={selectNumber} accountId={item.account_id} />
              <Items datas={Data} isInfo={false} />
            </InfoContainer>

          </Container >
        )
      }}
    </Query>
  )
}

export default UserContent