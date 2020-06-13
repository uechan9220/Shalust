import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div``

const Tag: React.FC = (props: any) => {
  let { tag } = useParams()
  
  return (
    <Container>
      <p>{tag}</p>
    </Container>
  )
}

export default Tag
