import React from 'react'
import styled from 'styled-components'

/**
 * components
 */
import Item from '../components/Items'

const Container = styled.div`
  min-height: 80vh; /* 後で消す */
  padding: 2rem 1rem;
`
const Content = styled.div`
  padding: 2rem 1rem;
  background-color: #fff;
`

const Nav = styled.nav`
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
`

const NavText = styled.p`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 46px;
  padding: 0 1.5rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.16);
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
  text-decoration: none;
  border-top: 4px solid transparent;
  transition: color 0.2s ease 0s;
  &:first-child {
    color: rgba(0, 0, 0, 0.88);
    border-top: 4px solid rgb(0, 150, 250);
  }
`

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <Nav>
          <NavText>イラスト</NavText>
          <NavText>ラフ</NavText>
          <NavText>マンガ</NavText>
          <NavText>落書き</NavText>
        </Nav>
        <Item />
      </Content>
    </Container>
  )
}

export default Main
