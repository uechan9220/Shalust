import React, { useState, useEffect, useRef, createContext } from 'react'
import { Redirect } from 'react-router-dom'
import firebase from './Firebase'
import { User } from 'firebase'

// import LoadingOverlay from 'react-loading-overlay'

// Contextの型を用意
interface IAuthContext {
  currentUser: User | null | undefined
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const AuthContext = createContext<IAuthContext>({
  currentUser: undefined,
})

const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  )

  useEffect(() => {
    // if (currentUser === undefined) history.push('/signin')
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
