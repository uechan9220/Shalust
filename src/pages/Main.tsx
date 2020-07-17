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
  @media (max-width: 450px) {
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    height: 48px;
    text-align: center;
  }
  & > p:hover:nth-child(n + 1) {
    color: rgba(0, 0, 0, 0.44);
  }
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
  @media (max-width: 450px) {
    -webkit-box-flex: 1;
    flex: 1 0;
    justify-content: center;
    padding: 0;
  }
`

const NavContainer = styled.div``

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
        <NavContainer>
          <Nav>
            <NavText>イラスト</NavText>
            <NavText>ラフ</NavText>
            <NavText>マンガ</NavText>
            <NavText>落書き</NavText>
          </Nav>
        </NavContainer>
        <Item />
      </Content>
    </Container>
  )
}

export default Main
