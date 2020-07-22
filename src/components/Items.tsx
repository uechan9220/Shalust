import React from 'react'
import styled from 'styled-components'

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

interface ItemsProps {
  datas: {
    id: number
    image_url: string
    title: string
    comment: number
    like: number
    isLike: boolean
    isBookmark: boolean
    User: {
      userImage: string
      userName: string
    }[]
  }[]
}

const Items: React.FC<ItemsProps> = (props: any) => {
  return (
    <Container>
      {props.datas.map((items: any, index: number) => {
        return <Item item={items} />
      })}
    </Container>
  )
}

export default Items
