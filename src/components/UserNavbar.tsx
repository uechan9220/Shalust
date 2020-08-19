import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**
 * interface
 */
interface SelectProps {
  index: number
}

interface NavbarProps {
  selectNumber: number
  accountId?: string
}

/**
 * animation function
 */
const getAnimation = (index: number) => {
  return `
    & > a:nth-child(${index}) {
    color: rgba(0, 0, 0, 0.88);
    border-top: 4px solid rgb(0, 150, 250);
  }
  `
}

/**
 * styled-components
 */

const Nav = styled.nav<Pick<SelectProps, 'index'>>`
  @media (max-width: 768px) {
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    height: 48px;
    text-align: center;
  }
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  & > a:hover:nth-child(n + 1) {
    color: rgba(0, 0, 0, 0.88);
  }
  ${({ index }) => getAnimation(index)};
`

const StyledLink = styled(Link)`
  @media (max-width: 768px) {
    -webkit-box-flex: 1;
    flex: 1 0;
    justify-content: center;
    padding: 0;
    font-size: 16px;
    line-height: 24px;
    height: 36px;
  }
  text-decoration: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 72px;
  padding: 0 1.5rem;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: rgba(0, 0, 0, 0.16);
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
  text-decoration: none;
  border-top: 4px solid transparent;
  transition: color 0.2s ease 0s;
  width: 25%;
  justify-content: center;
`

const NavText = styled.p``

const NavContainer = styled.div`
  margin:2rem 0 1rem 0;
`

const UserNavbar: React.FC<NavbarProps> = ({ selectNumber, accountId }) => {
  return (
    <NavContainer>
      <Nav index={selectNumber}>
        <StyledLink to={`/user/${accountId}/illustratio`}>
          <NavText>イラスト</NavText>
        </StyledLink>

        <StyledLink to={`/user/${accountId}/rough`}>
          <NavText>ラフ</NavText>
        </StyledLink>

        <StyledLink to={`/user/${accountId}/commic`}>
          <NavText>マンガ</NavText>
        </StyledLink>

        <StyledLink to={`/user/${accountId}/graffiti`}>
          <NavText>落書き</NavText>
        </StyledLink>

      </Nav>
    </NavContainer>
  )
}

export default UserNavbar
