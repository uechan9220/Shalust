import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Query, QueryResult } from 'react-apollo'
import { AuthContext } from '../AuthProvider'

/**
 * testData
 */
import { IllustData } from '../data/Data'

/**
 * components
 */
import Items from '../components/Items'
import Navbar from '../components/Navbar'

/**
 * query, Props
 */
import { allPostQuery, fetchLikes } from '../data/queries'
import { PostQueryProps } from '../generated/Props'

const Container = styled.div`
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: #e6ecf0;
`

const Title = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

const TitleContainer = styled.div`
  text-align: center;
  margin: 2rem 0 4rem 0;
`

const Content = styled.div`
  padding: 2rem 1rem;
  background-color: #fff;
`

const Count = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`

const Tag: React.FC = (props: any) => {
  let { content, tag } = useParams()
  const { currentUser } = useContext(AuthContext)
  const [selectNumber, setNumber] = useState(1)

  useEffect(() => {
    switch (content) {
      case 'illust':
        setNumber(1)
        break
      case 'rough':
        setNumber(2)
        break
      case 'commic':
        setNumber(3)
        break
      case 'graffiti':
        setNumber(4)
        break
      default:
        break
    }
  }, [content])

  return (
    // APIとの接続の時にはこれを使う。
    // <Query query={allPostQuery} variables={{ tagName: tag }}>
    // <Container>
    //   <Content>
    //     <Navbar />
    //       <TitleContainer>
    //         <Title># {tag}</Title>
    //         <Count>{data.length}</Count>
    //        </TitleContainer >
    //   {({ loading, data, error }: QueryResult<PostQueryProps>) => {
    //     return (
    //         {/* <Items datas={data} /> */}
    //     )
    //   }}
    // </Content >
    // </Container >
    // </Query>
    <Container>
      <Content>
        <Navbar selectNumber={selectNumber} tagName={tag} />
        <TitleContainer>
          <Title># {tag}</Title>
          <Count>{IllustData.length}作品</Count>
        </TitleContainer>
        <Items datas={IllustData} />
      </Content>
    </Container>
  )
}

export default Tag
