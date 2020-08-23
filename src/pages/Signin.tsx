import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../Firebase'
import { withRouter } from 'react-router'
import { AuthContext } from '../AuthProvider'

const Container = styled.div``

const Signin: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext)

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  useEffect(() => {
    if (currentUser.user) {
      props.history.push("/create_user")
    }
    // console.log(currentUser)
  }, [currentUser])

  return (
    <Container>
      <p>Signin</p>
      <button onClick={() => login()}>Login</button>
    </Container>
  )
}

export default withRouter(Signin)
