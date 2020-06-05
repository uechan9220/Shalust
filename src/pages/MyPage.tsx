import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div``

const MyPage: React.FC = () => {
  let { id } = useParams()

  return (
    <Container>
      <p>MyPage</p>
      <p>{id}</p>
    </Container>
  )
}

export default MyPage
