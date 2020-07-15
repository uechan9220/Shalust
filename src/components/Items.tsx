import React from 'react'
import styled, { css } from 'styled-components'

/**
 * comopnents
 */
import Item from './Item'

/* media Queryの実装を修正必要 */
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    justify-content: space-around;
  }
  @media (min-width: 1349px) {
    & > div:nth-child(4n + 2):last-child {
      margin-right: 44rem;
    }
  }
  @media (min-width: 1349px) {
    & > div:nth-child(4n + 3):last-child {
      margin-right: 22rem;
    }
  }
  @media (min-width: 962px) {
    & > div:nth-child(3n + 1):last-child {
      margin-right: 22rem;
    }
  }
`

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
      isBookmark: true,
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
      isBookmark: false,
    },
    {
      id: 3,
      image: 'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      userImage:
        'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
      userName: 'moke',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
    },
    {
      id: 4,
      image: 'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      userImage:
        'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
      userName: 'moke',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
    },
    {
      id: 5,
      image: 'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      userImage:
        'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
      userName: 'moke',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
    },
    {
      id: 6,
      image: 'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      userImage:
        'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
      userName: 'moke',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
    },
    {
      id: 7,
      image: 'https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512',
      title: 'モーグリーとロアちゃんが二人でお昼中なのだ',
      userImage:
        'https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512',
      userName: 'moke',
      comment: 22,
      like: 23,
      isLike: true,
      isBookmark: false,
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
