import React from 'react'
import styled from 'styled-components'

/**
 * components
 */
import Item from '../components/Items'
import Navbar from '../components/Navbar'

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
        <Navbar />
        <Item />
      </Content>
    </Container>
  )
}

export default Main
