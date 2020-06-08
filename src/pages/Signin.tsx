import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import firebase from '../Firebase'
import { AuthContext } from '../Auth'

const Container = styled.div``

const Signin: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    console.log(currentUser)
    firebase.auth().onAuthStateChanged((user: any) => {
      currentUser && props.history.push('/')
    })
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
