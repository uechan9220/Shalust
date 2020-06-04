import React from 'react'
import styled from 'styled-components'

/**
 * components
 */
import Title from '../components/Main/Title'
import Description from '../components/Main/Description'

const Container = styled.div``

const Main: React.FC = () => {
  return (
    <Container>
      <Title />
      <Description />
      <h1>Main</h1>
    </Container>
  )
}

export default Main
