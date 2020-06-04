import React from 'react'
import styled from 'styled-components'

/**
 * images
 */
import BackgroundImage from '../assets/images/art-materials-1920.jpg'

const Container = styled.div`
  height: 100vh;
  background: #ddd url(${BackgroundImage}) no-repeat center center;
  background-size: cover;
  display: flex;
`

const TitleContent = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  font-weight: bold;
  color: #000;
  font-size: 5rem;
  font-family: cursive;
  @media (max-width: 700px) {
    font-size: 3rem;
  }
  @media (max-width: 440px) {
    font-size: 2rem;
  }
`

const MainTitle: React.FC = () => {
  return (
    <Container>
      <TitleContent>
        <Title>Illustgram</Title>
      </TitleContent>
    </Container>
  )
}

export default MainTitle
