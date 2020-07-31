import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'
import { useQuery } from 'react-apollo'
import { myUserQuery } from '../data/queries'

const Container = styled.div`
  position: fixed;
  display: flex;
  background-color: #fff;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1);
  height: 4.2rem;
  z-index: 1;
`

const Title = styled.p`
  color: #000;
  font-weight: bold;
  font-family: cursive;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  &:active {
    color: #000000;
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Login = styled.p`
  color: #fff;
  background-color: #ea4c89;
  margin-left: 0.5rem;
  display: inline-block;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`

const Signin = styled.p`
  color: #000;
  margin-left: 0.5rem;
  display: inline-block;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`

const Header: React.FC = () => {
  const { currentUser } = useContext(AuthContext)

  // useStateのところに currentUser.user.email を入れたい
  const [userEmail, setUserEmail] = useState('example@example.com')
  const { loading, error, data } = useQuery(myUserQuery, {
    variables: { email: userEmail },
  })

  return (
    <Container>
      {/* {console.log(data)} */}
      <Link to="/">
        <Title>Illustgram</Title>
      </Link>
      {currentUser.user ? (
        <Content>
          <Link to="/tags">
            <Signin>Tags</Signin>
          </Link>
          {data.User.map((items: any, index: number) => {
            return (
              // test Link
              // <Link to={`/user/${items.uniqueID}`}>
              <Link to={`/user/moooooooooooke`}>
                <Signin>user</Signin>
              </Link>
            )
          })}
        </Content>
      ) : (
          <Content>
            <Link to="/signin">
              <Signin>Sign in</Signin>
            </Link>
            <Link to="/login">
              <Login>Login</Login>
            </Link>
          </Content>
        )}
    </Container>
  )
}

export default Header
