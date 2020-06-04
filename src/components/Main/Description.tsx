import React from 'react'
import styled from 'styled-components'

const Conatiner = styled.div`
  padding: 4rem 0;
`

const TextContent = styled.p`
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

const ImageContent = styled.div`

`

const MainDescription: React.FC = () => {
  return (
    <Conatiner>
      <TextContent>
        <Text>Support all illustrators</Text>
        <Caption>イラスト共有サイト</Caption>
      </TextContent>
      <ImageContent>
        
      </ImageContent>
    </Conatiner>
  )
}

export default MainDescription
