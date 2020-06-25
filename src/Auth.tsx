import React, { useEffect, useContext } from 'react'

import { AuthContext } from './AuthProvider'
import { withRouter } from 'react-router'

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const Auth = (props: any) => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser.user === undefined && currentUser.status !== 'loading') {
      props.history.push('/signin')
      console.log(props.history)
      alert('ログインしてください(>_<)')
    }
    //ここにsignin pageへのリダイレクト作業を入れる
    console.log(currentUser)
    console.log(currentUser.token)
  }, [currentUser])

  return <div>{props.children}</div>
}

export default withRouter(Auth)
