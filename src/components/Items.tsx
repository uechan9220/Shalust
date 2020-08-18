import React from 'react'
import styled from 'styled-components'

/**
 * comopnents
 */
import Item from './Item'

const Container = styled.div`
  position: relative;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  grid-gap: 1rem;
  @media (max-width: 450px){
    grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  }
`

const NotPostText = styled.p`
  font-size: 7vw;
`

const NotPostContainr = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`

interface ItemsProps {
  datas: {
    content_id: string
    user_id: string
    user_name: string
    icon_url: string
    detail: string
    create_at: string
    title: string
    views: number
    adult: boolean
    image_url: string
    image_index: number
    like_count: number
    user_bookmarked: boolean,
    user_liked: boolean
  }[]
  isInfo?: boolean
}

const Items: React.FC<ItemsProps> = (props: any) => {
  return (
    <Container>
      {console.log(props)}
      {props.datas !== undefined && props.datas !== null ?
        props.datas.map((items: any, index: number) => {
          return <Item item={items} isInfo={props.isInfo} />
        })
        :
        <NotPostContainr>
          <NotPostText>まだ投稿が無いようです。</NotPostText>
        </NotPostContainr>
      }
    </Container>
  )
}

export default Items
