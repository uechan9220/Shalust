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
import { IllustData } from '../data/Data'

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
    <Container>
      <Content>
        <Navbar selectNumber={1} />
        <Items datas={IllustData} isInfo={true} />
      </Content>
    </Container>
  )
}

export default Main
