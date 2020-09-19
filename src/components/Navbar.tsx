import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * interface
 */
interface SelectProps {
  index: number;
}

interface NavbarProps {
  selectNumber: number;
  tagName?: string;
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
  `;
};

/**
 * styled-components
 */

const Nav = styled.nav<Pick<SelectProps, 'index'>>`
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
  ${({ index }) => getAnimation(index)};
`;

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
  border-top: 4px solid transparent;
  transition: color 0.2s ease 0s;
  @media (max-width: 450px) {
    -webkit-box-flex: 1;
    flex: 1 0;
    justify-content: center;
    padding: 0;
  }
`;

const NavText = styled.p``;

const NavContainer = styled.div``;

const Navbar: React.FC<NavbarProps> = ({ selectNumber, tagName }) => {
  return (
    <NavContainer>
      <Nav index={selectNumber}>
        {tagName === undefined ? (
          <>
            {console.log(tagName)}
            <StyledLink to='/illustratio'>
              <NavText>イラスト</NavText>
            </StyledLink>

            <StyledLink to='/rough'>
              <NavText>ラフ</NavText>
            </StyledLink>

            <StyledLink to='/commic'>
              <NavText>マンガ</NavText>
            </StyledLink>

            <StyledLink to='/graffiti'>
              <NavText>落書き</NavText>
            </StyledLink>
          </>
        ) : (
          <>
            {console.log(tagName)}
            <StyledLink to={`/tags/illustratio/${tagName}`}>
              <NavText>イラスト</NavText>
            </StyledLink>

            <StyledLink to={`/tags/rough/${tagName}`}>
              <NavText>ラフ</NavText>
            </StyledLink>

            <StyledLink to={`/tags/commic/${tagName}`}>
              <NavText>マンガ</NavText>
            </StyledLink>

            <StyledLink to={`/tags/graffiti/${tagName}`}>
              <NavText>落書き</NavText>
            </StyledLink>
          </>
        )}
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
