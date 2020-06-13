import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { AuthContext } from '../AuthProvider'

const Container = styled.div``

const Login: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser.user) {
      props.history.push('/')
    }
    console.log(currentUser)
  }, [currentUser])

  return (
    <Container>
      <p>Login</p>
    </Container>
  )
}

export default withRouter(Login)
