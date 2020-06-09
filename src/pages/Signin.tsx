import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../Firebase'
import { AuthContext } from '../AuthProvider'

const Container = styled.div``

const Signin: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    // currentUser && props.history.push('/')
    console.log(currentUser)
  }, [currentUser])

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  return (
    <Container>
      <p>Signin</p>
      <button onClick={() => login()}>Login</button>
    </Container>
  )
}

export default Signin
