import React from 'react'
import styled from 'styled-components'

/**
 * comopnents
 */
import Item from './Item'

const Container = styled.div``

const Items: React.FC = () => {
  const Data = [
    {
      id: 1,
      image: 'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      userImage:
        'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
      userName: 'fuga',
      comment: 22,
      like: 22,
      isLike: false,
    },
    {
      id: 2,
      image: 'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      userImage:
        'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
      userName: 'moke',
      comment: 22,
      like: 23,
      isLike: true,
    },
  ]

  return (
    <Container>
      {Data.map((items, index) => {
        return <Item item={items} />
      })}
    </Container>
  )
}

export default Items
