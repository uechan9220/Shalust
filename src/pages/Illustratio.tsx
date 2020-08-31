import React from 'react'
import styled from 'styled-components'

import { GetIllustQuery } from '../data/queries'

/**
 * components
 */
import Items from '../components/Items'
import Navbar from '../components/Navbar'

/**
 * testData
 */
import { Query, Mutation } from 'react-apollo'
import { IllustDataTest } from '../data/Data'

const Container = styled.div`
  min-height: 80vh; /* 後で消す */
  padding: 2rem 1rem;
  background-color: #e6ecf0;
`
const Content = styled.div`
  padding: 2rem 1rem;
  background-color: #fff;
`

const Illust: React.FC = () => {
  return (
    <Query query={GetIllustQuery}>
      {({ loading, data, err }: any) => {
        console.log(err)
        if (loading) { return <p>...loading</p> }
        console.log(data.illust)
        console.log(IllustDataTest)

        return (
          <Container>
            <Content>
              <Navbar selectNumber={1} />
              <Items datas={data.illust} isInfo={true} path={"illustratio"} />
            </Content>
          </Container>
        )
      }}

    </Query >
    // <Container>
    //   <Content>
    //     <Navbar selectNumber={1} />

    //     <Items datas={IllustDataTest} isInfo={true} />
    //   </Content>
    // </Container>
  )
}

export default Illust
