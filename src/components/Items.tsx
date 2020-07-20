import React from 'react'
import styled from 'styled-components'

/**
 * testData
 */
import { Data } from '../data/Data'

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
  return (
    <Container>
      {Data.map((items: any, index: number) => {
        return <Item item={items} />
      })}
    </Container>
  )
}

export default Items
