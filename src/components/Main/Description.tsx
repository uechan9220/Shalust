import React from 'react'
import styled from 'styled-components'

/**
 * images
 */
import image from '../../assets/images/image.jpg'

const Conatiner = styled.div`
  padding: 4rem 0;
`

const TextContainer = styled.p`
  text-align: center;
  margin-bottom: 4rem;
`

const Text = styled.p`
  font-size: 2rem;
`

const Caption = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CenterImageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
`

const Image = styled.img`
width: 30vw;
`

const MainDescription: React.FC = () => {
  return (
    <Conatiner>
      <TextContainer>
        <Text>Support all illustrators</Text>
        <Caption>イラスト共有サイト</Caption>
      </TextContainer>
      <ImageContainer>
        <ImageContent>
          <Image src={image} />
          <p>文言</p>
        </ImageContent>
        <CenterImageContent>
          <p>文言</p>
          <Image src={image} />
        </CenterImageContent>
        <ImageContent>
          <Image src={image} />
          <p>文言</p>
        </ImageContent>
      </ImageContainer>
    </Conatiner>
  )
}

export default MainDescription
