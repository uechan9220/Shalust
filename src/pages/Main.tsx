import React from 'react'
import styled from 'styled-components'

/**
 * components
 */
import MainTitle from '../components/Main/Title'

const Container = styled.div`
  
`

const Main: React.FC = () => {
  return (
    <Container>
      <MainTitle />
      <h1>Main</h1>
    </Container>
  )
}

export default Main