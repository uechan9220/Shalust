import React from 'react'
import styled, { css } from 'styled-components'

/**
 * comopnents
 */
import Item from './Item'

const Container = styled.div`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 1rem;
`

const Items: React.FC = () => {
  const Data = [
    {
      id: 1,
      image_url:
        'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      comment: 22,
      like: 22,
      isLike: false,
      isBookmark: true,
      User: [
        {
          userImage:
            'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
          userName: 'fuga',
        },
      ],
    },
    {
      id: 2,
      image_url:
        'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
      User: [
        {
          userImage:
            'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
          userName: 'moke',
        },
      ],
    },
    {
      id: 3,
      image_url:
        'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
      User: [
        {
          userImage:
            'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
          userName: 'moke',
        },
      ],
    },
    {
      id: 4,
      image_url:
        'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
      User: [
        {
          userImage:
            'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
          userName: 'moke',
        },
      ],
    },
    {
      id: 5,
      image_url:
        'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
      User: [
        {
          userImage:
            'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
          userName: 'moke',
        },
      ],
    },
    {
      id: 6,
      image_url:
        'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
      User: [
        {
          userImage:
            'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
          userName: 'moke',
        },
      ],
    },
    {
      id: 7,
      image_url:
        'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
      User: [
        {
          userImage:
            'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
          userName: 'moke',
        },
      ],
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
