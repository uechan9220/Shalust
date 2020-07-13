import React from 'react'
import styled from 'styled-components'

/**
 * SVG
 */
import Comment from '../assets/svg/comment.svg'
import Like from '../assets/svg/like.svg'
import Bookmark from '../assets/svg/bookmark.svg'

const Container = styled.div``

const Content = styled.div`
  height: 16rem;
  width: 16rem;
  display: flex;
  flex-direction: column;
`

const ImageContainer = styled.div`
  width: 100%;
  max-height: 224px;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const InfoContainer = styled.div`
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`

const UserImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 90px;
`

const UserName = styled.p`
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 14px;
`

const CommentContainer = styled.div`
  align-items: center;
  display: flex;
  height: 1rem;
`

const CommentImage = styled.img`
  height: 14px;
  width: 14px;
`

const CommentCount = styled.p`
  margin-left: 4px;
  font-size: 9px;
`

const LikeContainer = styled.div`
  align-items: center;
  display: flex;
  height: 1rem;
  margin-left: 0.5rem;
`

const LikeImage = styled.img`
  height: 14px;
  width: 14px;
`

const LikeCount = styled.p`
  margin-left: 4px;
  font-size: 9px;
`

const InfoContent = styled.div`
  display: flex;
  align-items: center;
`

const HoverContent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    #797979 -7.81%,
    rgba(189, 189, 189, 0) 111.72%
  );
  padding: 0.5rem;

  display: flex;
  align-items: center;
`

const Title = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 11rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const HoverBookmarkButton = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 34px;
  height: 34px;
`

const HoverBookmark = styled.img`
  width: 16px;
  height: 16px;
`

const HoverLikeButton = styled.div`
  margin-left: 0.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 34px;
  height: 34px;
`

const HoverLike = styled.img`
  width: 16px;
  height: 16px;
`

const HoverButton = styled.div`
  display: flex;
`

const Item: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <Image src="https://ca.slack-edge.com/TH9SKRH3N-UH7F80B6C-c0365f443d8f-512" />
          <HoverContent>
            <Title>モーグリーとロアちゃんが二人でお昼中なのだ</Title>
            <HoverButton>
              <HoverBookmarkButton>
                <HoverBookmark src={Bookmark} />
              </HoverBookmarkButton>
              <HoverLikeButton>
                <HoverLike src={Like} />
              </HoverLikeButton>
            </HoverButton>
          </HoverContent>
        </ImageContainer>
        <InfoContainer>
          <UserContainer>
            <UserImage src="https://ca.slack-edge.com/T0G4VRKJA-U51V91129-5340348de13a-512" />
            <UserName>Moke</UserName>
          </UserContainer>
          <InfoContent>
            <CommentContainer>
              <CommentImage src={Comment} />
              <CommentCount>22</CommentCount>
            </CommentContainer>
            <LikeContainer>
              <LikeImage src={Like} />
              <LikeCount>22</LikeCount>
            </LikeContainer>
          </InfoContent>
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default Item
