import React, { useState, useEffect, useRef, createContext } from 'react'
import { Redirect } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import firebase from './Firebase'
import { User } from 'firebase'

// import LoadingOverlay from 'react-loading-overlay'

// Contextの型を用意
interface IAuthContext {
  currentUser: AuthProps
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const AuthContext = createContext<IAuthContext>({
  currentUser: { status: 'loading' },
})

interface AuthProps {
  status: string
  user?: User
  token?: string
}

const AuthProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState<AuthProps>({
    status: 'loading',
  })

  useEffect(() => {
    // if (currentUser === undefined) history.push('/signin')
    firebase.auth().onAuthStateChanged(async (user: any) => {
      if (user) {
        const token = await user.getIdToken()
        const idTokenResult = await user.getIdTokenResult()
        const hasuraClaim = idTokenResult.claims['https://hasura.io/jwt/claims']
        const db = firebase.database()

        if (hasuraClaim) {
          setCurrentUser({ status: 'in', user, token })
        } else {
          // Check if refresh is required.
          const metadataRef = db.ref('metadata/' + user.uid + '/refreshTime')

          metadataRef.on('value', async () => {
            // Force refresh to pick up the latest custom claims changes.
            const token = await user.getIdToken(true)
            setCurrentUser({ status: 'in', user, token })
          })
          console.log(currentUser)
        }
      } else {
        setCurrentUser({ status: 'out' })
      }
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
