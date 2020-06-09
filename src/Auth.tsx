import React, { useEffect, useContext } from 'react'

import { AuthContext } from './AuthProvider'

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
const Auth = (props: any) => {
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser === null) alert('何もないよ')
    //ここにsignin pageへのリダイレクト作業を入れる
    console.log(currentUser)
  }, [currentUser])

  return (
    <>
      {props.children}
    </>
  )
}

export { Auth }
