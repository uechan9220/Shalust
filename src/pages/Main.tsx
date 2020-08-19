import React from 'react'
import styled from 'styled-components'

/**
 * components
 */
import Items from '../components/Items'
import Navbar from '../components/Navbar'

/**
 * testData
 */
import { IllustDataTest } from '../data/Data'
import { Query } from 'react-apollo'
import { GetIllustQuery } from '../data/queries'

const Container = styled.div`
  min-height: 80vh; /* 後で消す */
  padding: 2rem 1rem;
  background-color: #e6ecf0;
`
const Content = styled.div`
  padding: 2rem 1rem;
  background-color: #fff;
`

const Main: React.FC = () => {
  return (
    // <Query query={GetIllustQuery}>
    //   {({ loading, data, err }: any) => {
    //     if (err) console.log(err)
    //     if (loading) { return <p>...loading</p> }
    //     console.log(IllustDataTest)

    //     return (
    //       <Container>
    //         <Content>
    //           <Navbar selectNumber={1} />
    //           <Items datas={data.illust} isInfo={true} />
    //         </Content>
    //       </Container>
    //     )
    //   }}
    // </Query>
    <Container>
      <Content>
        <Navbar selectNumber={1} />
        <Items datas={IllustDataTest} isInfo={true} />
      </Content>
    </Container>
  )
}

export default Main
