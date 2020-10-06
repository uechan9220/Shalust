import React, { useState, Props } from 'react';
import styled from 'styled-components';

/**
 * SVG
 */
import views from '../assets/svg/views.svg';
import Like from '../assets/svg/like.svg';
import Bookmark from '../assets/svg/bookmark.svg';
import { Link } from 'react-router-dom';

const Content = styled.div`
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  border: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
`;

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
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  min-width: 16rem;
  min-height: 16rem;
  line-height: 0;
  @media (max-width: 450px) {
    min-width: 9rem;
    min-height: 9rem;
  }
  &:hover {
    & > ${HoverContent} {
      opacity: 1;
    }
  }
  & > ${HoverContent} {
    line-height: 1;
    opacity: 0;
    transition: opacity 300ms ease;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  min-width: 16rem;
  min-height: 16rem;
  @media (max-width: 450px) {
    min-width: 9rem;
    min-height: 9rem;
  }
`;

const InfoContainer = styled.div`
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 90px;
`;

const UserName = styled.p`
  margin-left: 0.5rem;
  font-weight: bold;
  font-size: 14px;
`;

const ViewContainer = styled.div`
  align-items: center;
  display: flex;
  height: 1rem;
`;

const ViewImage = styled.img`
  height: 14px;
  width: 14px;
`;

const ViewCount = styled.p`
  margin-left: 4px;
  font-size: 9px;
`;

const LikeContainer = styled.div`
  align-items: center;
  display: flex;
  height: 1rem;
  margin-left: 0.5rem;
`;

const LikeImage = styled.svg<onLikeProps>`
  height: 14px;
  width: 14px;
  & > path {
    fill: ${(props: any) => (props.onLike ? '#FA4893' : '#9E9EA7')};
  }
`;

const OnLikeImage = styled.svg<onLikeProps>`
  height: 100%;
  & > path {
    fill: ${(props: any) => (props.onLike ? '#FA4893' : '#9E9EA7')};
  }
`;

const LikeCount = styled.p<onLikeProps>`
  margin-left: 4px;
  font-size: 9px;
  color: ${(props: any) => (props.onLike ? '#FA4893' : '#9E9EA7')};
`;

const InfoContent = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const HoverBookmarkButton = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 34px;
  height: 34px;
`;

const HoverBookmark = styled.svg<onBookmarkProps>`
  width: 16px;
  height: 16px;
  & > path {
    fill: ${(props: any) => (props.onBookmark ? '#55ACEE' : '#9E9EA7')};
  }
`;

const OnBookmark = styled.svg<onBookmarkProps>`
  height: 100%;
  & > path {
    fill: ${(props: any) => (props.onBookmark ? '#55ACEE' : '#9E9EA7')};
  }
`;

const HoverLikeButton = styled.div`
  margin-left: 0.5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 34px;
  height: 34px;
`;

const HoverLike = styled.svg<onLikeProps>`
  width: 16px;
  height: 16px;
  & > path {
    fill: ${(props: any) => (props.onLike ? '#FA4893' : '#9E9EA7')};
  }
`;

const HoverButton = styled.div`
  display: flex;
`;

const IsShowImage = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: end;
  height: 10%;
  align-items: center;
`;

/**
 * interface, type
 */

type onLikeProps = {
  onLike: boolean;
};

type onBookmarkProps = {
  onBookmark: boolean;
};

interface ItemProps {
  item: {
    content_id: string;
    user_id: string;
    user_name: string;
    icon_url: string;
    detail: string;
    create_at: string;
    title: string;
    views: number;
    adult: boolean;
    thumbnail_url: string;
    image_index: number;
    like_count: number;
    user_bookmarked: boolean;
    user_liked: boolean;
  };
  isInfo?: boolean;
  path?: string;
}

const Item: React.FC<ItemProps> = (props: any) => {
  const [like, isLike] = useState(props.item.user_liked);
  const [bookmark, isBookmark] = useState(props.item.user_bookmarked);
  const [likeCount, setLikeCount] = useState(props.item.like_count);

  const likeFunc = () => {
    like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    isLike(!like);
  };

  const bookmarkFunc = () => {
    isBookmark(!bookmark);
  };

  return (
    <Content key={props.item.content_id}>
      {console.log(props)}
      <ImageContainer>
        <Link to={`/${props.path}/${props.item.content_id}`}>
          <Image src={props.item.thumbnail_url} />
        </Link>
        <HoverContent>
          <Title>{props.item.title}</Title>
          <HoverButton>
            <HoverBookmarkButton onClick={() => bookmarkFunc()}>
              <HoverBookmark
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onBookmark={bookmark}
              >
                <path d='M11.3334 2H4.66671C3.93337 2 3.34004 2.6 3.34004 3.33333L3.33337 14L8.00004 12L12.6667 14V3.33333C12.6667 2.6 12.0667 2 11.3334 2ZM11.3334 12L8.00004 10.5467L4.66671 12V3.33333H11.3334V12Z' />
              </HoverBookmark>
            </HoverBookmarkButton>
            <HoverLikeButton onClick={() => likeFunc()}>
              <HoverLike
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onLike={like}
              >
                <path d='M6.99996 12.4542L6.15413 11.6842C3.14996 8.96 1.16663 7.16333 1.16663 4.95833C1.16663 3.16167 2.57829 1.75 4.37496 1.75C5.38996 1.75 6.36413 2.2225 6.99996 2.96917C7.63579 2.2225 8.60996 1.75 9.62496 1.75C11.4216 1.75 12.8333 3.16167 12.8333 4.95833C12.8333 7.16333 10.85 8.96 7.84579 11.69L6.99996 12.4542Z' />
              </HoverLike>
            </HoverLikeButton>
          </HoverButton>
        </HoverContent>
        <IsShowImage>
          {like ? (
            <OnLikeImage
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onLike={like}
            >
              <path d='M6.99996 12.4542L6.15413 11.6842C3.14996 8.96 1.16663 7.16333 1.16663 4.95833C1.16663 3.16167 2.57829 1.75 4.37496 1.75C5.38996 1.75 6.36413 2.2225 6.99996 2.96917C7.63579 2.2225 8.60996 1.75 9.62496 1.75C11.4216 1.75 12.8333 3.16167 12.8333 4.95833C12.8333 7.16333 10.85 8.96 7.84579 11.69L6.99996 12.4542Z' />
            </OnLikeImage>
          ) : null}
          {bookmark ? (
            <OnBookmark
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onBookmark={bookmark}
            >
              <path d='M11.3334 2H4.66671C3.93337 2 3.34004 2.6 3.34004 3.33333L3.33337 14L8.00004 12L12.6667 14V3.33333C12.6667 2.6 12.0667 2 11.3334 2ZM11.3334 12L8.00004 10.5467L4.66671 12V3.33333H11.3334V12Z' />
            </OnBookmark>
          ) : null}
        </IsShowImage>
      </ImageContainer>
      {props.isInfo ? (
        <InfoContainer>
          <UserContainer>
            <UserImage src={props.item.icon_url} />
            <UserName>{props.item.user_name}</UserName>
          </UserContainer>
          <InfoContent>
            <ViewContainer>
              <ViewImage src={views} />
              <ViewCount>{props.item.views}</ViewCount>
            </ViewContainer>
            <LikeContainer onClick={() => likeFunc()}>
              <LikeImage
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onLike={like}
              >
                <path d='M6.99996 12.4542L6.15413 11.6842C3.14996 8.96 1.16663 7.16333 1.16663 4.95833C1.16663 3.16167 2.57829 1.75 4.37496 1.75C5.38996 1.75 6.36413 2.2225 6.99996 2.96917C7.63579 2.2225 8.60996 1.75 9.62496 1.75C11.4216 1.75 12.8333 3.16167 12.8333 4.95833C12.8333 7.16333 10.85 8.96 7.84579 11.69L6.99996 12.4542Z' />
              </LikeImage>
              <LikeCount onLike={like}>{likeCount}</LikeCount>
            </LikeContainer>
          </InfoContent>
        </InfoContainer>
      ) : null}
    </Content>
  );
};

export default Item;
