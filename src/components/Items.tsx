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
  @media (max-width: 450px){
    grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  }
`

interface ItemsProps {
  datas: {
    id: number
    image_url: string
    title: string
    views: number
    like: number
    isLike: boolean
    isBookmark: boolean
    User: {
      userImage: string
      userName: string
    }[]
  }[]
  isInfo?: boolean
}

const Items: React.FC<ItemsProps> = (props: any) => {
  return (
    <Container>
      {props.datas.map((items: any, index: number) => {
        return <Item item={items} isInfo={props.isInfo} />
      })}
    </Container>
  )
}

export default Items
