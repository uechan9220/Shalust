import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/**
 * interface
 */
interface SelectProps {
  Number: number
}

interface NavbarProps {
  selectNumber: number
}

/**
 * animation function
 */
const getAnimation = (Number: number) => {
  return `
    & > a:nth-child(${Number}) {
    color: rgba(0, 0, 0, 0.88);
    border-top: 4px solid rgb(0, 150, 250);
  }
  `
}

/**
 * styled-components
 */

const Nav = styled.nav<Pick<SelectProps, 'Number'>>`
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
  & > a:hover:nth-child(n + 1) {
    color: rgba(0, 0, 0, 0.88);
  }
  ${({ Number }) => getAnimation(Number)};
`

const StyledLink = styled(Link)`
  text-decoration: none;
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
  @media (max-width: 450px) {
    -webkit-box-flex: 1;
    flex: 1 0;
    justify-content: center;
    padding: 0;
  }
`

const NavText = styled.p``

const NavContainer = styled.div``

const Navbar: React.FC<NavbarProps> = ({ selectNumber }) => {
  return (
    <NavContainer>
      <Nav Number={selectNumber}>
        <StyledLink to="/">
          <NavText>イラスト</NavText>
        </StyledLink>

        <StyledLink to="/rough">
          <NavText>ラフ</NavText>
        </StyledLink>

        <StyledLink to="/">
          <NavText>マンガ</NavText>
        </StyledLink>

        <StyledLink to="/">
          <NavText>落書き</NavText>
        </StyledLink>
      </Nav>
    </NavContainer>
  )
}

export default Navbar
