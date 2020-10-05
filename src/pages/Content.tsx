import React, { useState } from 'react';
import styled from 'styled-components';
import Items from '../components/Items';

const Container = styled.div``;

const MainContent = styled.div`
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
  display: flex;
  padding: 1rem;
`;

const MainImageContainer = styled.div`
  flex: 2;
`;

const MainImage = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  @media (max-width: 1024px) {
    padding: 0.5rem;
  }
  padding: 0 0.5rem;
  flex: 1;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0.5rem;
`;

const TagsContainer = styled.div`
  display: flex;
  font-size: 12px;
  margin-bottom: 2rem;
`;

const Tag = styled.p`
  margin-left: 0.5rem;
  cursor: pointer;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButtonContent = styled.div`
  display: flex;
`;

const Detail = styled.p`
  font-size: 18px;
  line-height: 21px;
  margin: 2rem 0;
`;

const UserContainer = styled.div`
  border: dashed #000;
  border-width: 1px 0px 1px 0px;
  padding: 1rem 0;
`;

const UserNameContent = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.img`
  max-width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;

const UserName = styled.p`
  font-size: 18px;
`;

const UserDetail = styled.p`
  white-space: pre-wrap;
  line-height: 28px;
`;

const FollowButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid;
  padding: 0.5rem 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const FollowButton = styled(Button)<onFollowProps>`
  background-color: ${(props: any) => (props.onFollow ? '#55acee' : '#FFF')};
  border-color: ${(props: any) => (props.onFollow ? '#FFF' : '#55acee')};
  color: ${(props: any) => (props.onFollow ? '#FFF' : '#55acee')};
`;

const BookmarkButton = styled(Button)<onBookmarkProps>`
  background-color: ${(props: any) => (props.onBookmark ? '#55acee' : '#FFF')};
  border-color: ${(props: any) => (props.onBookmark ? '#FFF' : '#55acee')};
  color: ${(props: any) => (props.onBookmark ? '#FFF' : '#55acee')};
`;

const Bookmark = styled.svg<onBookmarkProps>`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  & > path {
    fill: ${(props: any) => (props.onBookmark ? '#FFF' : '#55ACEE')};
  }
`;

const LikeButton = styled(Button)<onLikeProps>`
  margin-left: 1rem;
  background-color: ${(props: any) => (props.onLike ? '#EE5555' : '#FFF')};
  border-color: ${(props: any) => (props.onLike ? '#FFF' : '#EE5555')};
  color: ${(props: any) => (props.onLike ? '#FFF' : '#EE5555')};
`;

const Like = styled.svg<onLikeProps>`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  & > path {
    fill: ${(props: any) => (props.onLike ? '#FFF' : '#EE5555')};
  }
`;

const ReportContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

const Report = styled.p`
  cursor: pointer;
`;

const UserPopularityContainer = styled.div`
  margin: 2rem 0;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #000000;
  &:active {
    color: #000000;
  }
`;

const UserPopularityTitle = styled.p`
  margin-bottom: 0.5rem;
  font-size: 24px;
  font-weight: bold;
`;

/**
 * interface
 */

interface ContentProps {
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
    tags: string[];
    user_detail: string;
    follow: boolean;
  };
}

type onBookmarkProps = {
  onBookmark: boolean;
};

type onLikeProps = {
  onLike: boolean;
};

type onFollowProps = {
  onFollow: boolean;
};

const Content: React.FC = () => {
  const Data = [
    {
      adult: false,
      content_id: '14477c2c-eacd-11ea-a19e-0242ac130002',
      create_at: '0001-01-01T00:00:00Z',
      detail: '雪だるまにはジャージを被せる派',
      icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
      image_index: 1,
      thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
      like_count: 0,
      title: 'testt itle',
      user_id: '14358c5b-eacd-11ea-a19e-0242ac130002',
      user_name: 'rin1208',
      views: 0,
      tags: ['イラスト', 'テスト', '神絵師'],
      user_bookmarked: false,
      user_liked: true,
      user_detail:
        '最近絵を描き始めました！！\nいいねがたくさんもらえるように頑張っていきたいと思います！！',
      follow: false,
      illustratio: [
        {
          adult: false,
          commic: false,
          content_id: '13de7446-eacd-11ea-a19e-0242ac130002',
          create_at: '0001-01-01T00:00:00Z',
          detail: '雪だるまにはジャージを被せる派',
          graffiti: false,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
          illustratio: true,
          image_index: 1,
          thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
          like_count: 0,
          rough: false,
          title: 'testt itle',
          user_bookmarked: false,
          user_id: '13c82aed-eacd-11ea-a19e-0242ac130002',
          user_liked: false,
          user_name: 'rin1208',
          views: 0,
        },
        {
          adult: false,
          commic: false,
          content_id: '13de7446-eacd-11ea-a19e-0242ac130002',
          create_at: '0001-01-01T00:00:00Z',
          detail: '雪だるまにはジャージを被せる派',
          graffiti: false,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
          illustratio: true,
          image_index: 1,
          thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
          like_count: 0,
          rough: false,
          title: 'testt itle',
          user_bookmarked: false,
          user_id: '13c82aed-eacd-11ea-a19e-0242ac130002',
          user_liked: false,
          user_name: 'rin1208',
          views: 0,
        },
        {
          adult: false,
          commic: false,
          content_id: '13de7446-eacd-11ea-a19e-0242ac130002',
          create_at: '0001-01-01T00:00:00Z',
          detail: '雪だるまにはジャージを被せる派',
          graffiti: false,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
          illustratio: true,
          image_index: 1,
          thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
          like_count: 0,
          rough: false,
          title: 'testt itle',
          user_bookmarked: false,
          user_id: '13c82aed-eacd-11ea-a19e-0242ac130002',
          user_liked: false,
          user_name: 'rin1208',
          views: 0,
        },
        {
          adult: false,
          commic: false,
          content_id: '13de7446-eacd-11ea-a19e-0242ac130002',
          create_at: '0001-01-01T00:00:00Z',
          detail: '雪だるまにはジャージを被せる派',
          graffiti: false,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
          illustratio: true,
          image_index: 1,
          thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
          like_count: 0,
          rough: false,
          title: 'testt itle',
          user_bookmarked: false,
          user_id: '13c82aed-eacd-11ea-a19e-0242ac130002',
          user_liked: false,
          user_name: 'rin1208',
          views: 0,
        },
      ],
      rough: [
        {
          adult: false,
          commic: false,
          content_id: '13de7446-eacd-11ea-a19e-0242ac130002',
          create_at: '0001-01-01T00:00:00Z',
          detail: '雪だるまにはジャージを被せる派',
          graffiti: false,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
          illustratio: true,
          image_index: 1,
          thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
          like_count: 0,
          rough: false,
          title: 'testt itle',
          user_bookmarked: false,
          user_id: '13c82aed-eacd-11ea-a19e-0242ac130002',
          user_liked: false,
          user_name: 'rin1208',
          views: 0,
        },
        {
          adult: false,
          commic: false,
          content_id: '13de7446-eacd-11ea-a19e-0242ac130002',
          create_at: '0001-01-01T00:00:00Z',
          detail: '雪だるまにはジャージを被せる派',
          graffiti: false,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
          illustratio: true,
          image_index: 1,
          thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
          like_count: 0,
          rough: false,
          title: 'testt itle',
          user_bookmarked: false,
          user_id: '13c82aed-eacd-11ea-a19e-0242ac130002',
          user_liked: false,
          user_name: 'rin1208',
          views: 0,
        },
      ],
      commic: [
        {
          adult: false,
          commic: false,
          content_id: '13de7446-eacd-11ea-a19e-0242ac130002',
          create_at: '0001-01-01T00:00:00Z',
          detail: '雪だるまにはジャージを被せる派',
          graffiti: false,
          icon_url: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
          illustratio: true,
          image_index: 1,
          thumbnail_url: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
          like_count: 0,
          rough: false,
          title: 'testt itle',
          user_bookmarked: false,
          user_id: '13c82aed-eacd-11ea-a19e-0242ac130002',
          user_liked: false,
          user_name: 'rin1208',
          views: 0,
        },
      ],
      graffiti: [],
    },
  ];

  const [like, isLike] = useState(Data[0].user_liked);
  const [bookmark, isBookmark] = useState(Data[0].user_bookmarked);
  const [likeCount, setLikeCount] = useState(Data[0].like_count);
  const [follow, isFollow] = useState(Data[0].follow);

  const likeFunc = () => {
    // 表示してない。
    // like ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    isLike(!like);
    like ? alert('いいねを解除しました') : alert('いいねしました！');
  };

  const bookmarkFunc = () => {
    isBookmark(!bookmark);
    bookmark
      ? alert('ブックマークを解除しました')
      : alert('ブックマークしました！');
  };

  const followFunc = () => {
    isFollow(!follow);
    follow ? alert('フォローを解除しました') : alert('フォローしました！');
  };

  return (
    <Container>
      {Data.map((item, index) => {
        return (
          <>
            <MainContent>
              <MainImageContainer>
                <MainImage src={item.thumbnail_url} />
              </MainImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <TagsContainer>
                  Tags:
                  {item.tags.map((tag, index) => {
                    return <Tag key={index}>{tag}</Tag>;
                  })}
                </TagsContainer>
                <ActionContainer>
                  <ActionButtonContent>
                    <BookmarkButton
                      onClick={() => bookmarkFunc()}
                      onBookmark={bookmark}
                    >
                      <Bookmark
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        onBookmark={bookmark}
                      >
                        <path d='M11.3334 2H4.66671C3.93337 2 3.34004 2.6 3.34004 3.33333L3.33337 14L8.00004 12L12.6667 14V3.33333C12.6667 2.6 12.0667 2 11.3334 2ZM11.3334 12L8.00004 10.5467L4.66671 12V3.33333H11.3334V12Z' />
                      </Bookmark>
                      ブックマーク
                    </BookmarkButton>
                    <LikeButton onLike={like} onClick={() => likeFunc()}>
                      <Like
                        viewBox='0 0 14 14'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        onLike={like}
                      >
                        <path d='M6.99996 12.4542L6.15413 11.6842C3.14996 8.96 1.16663 7.16333 1.16663 4.95833C1.16663 3.16167 2.57829 1.75 4.37496 1.75C5.38996 1.75 6.36413 2.2225 6.99996 2.96917C7.63579 2.2225 8.60996 1.75 9.62496 1.75C11.4216 1.75 12.8333 3.16167 12.8333 4.95833C12.8333 7.16333 10.85 8.96 7.84579 11.69L6.99996 12.4542Z' />
                      </Like>
                      いいね
                    </LikeButton>
                  </ActionButtonContent>
                </ActionContainer>
                <ReportContainer>
                  <ExternalLink
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://forms.gle/96VworLpwGBqLkXq8'
                  >
                    <Report>運営に報告</Report>
                  </ExternalLink>
                </ReportContainer>
                <Detail>{item.detail}</Detail>
                <UserContainer>
                  <UserNameContent>
                    <UserIcon src={item.icon_url} />
                    <UserName>{item.user_name}さん</UserName>
                  </UserNameContent>
                  <UserDetail>{item.user_detail}</UserDetail>
                  <FollowButtonContainer>
                    <FollowButton
                      onFollow={follow}
                      onClick={() => followFunc()}
                    >
                      {follow ? 'フォロー解除' : 'フォローする'}
                    </FollowButton>
                  </FollowButtonContainer>
                </UserContainer>
              </InfoContainer>
            </MainContent>
            <UserPopularityContainer>
              <UserPopularityTitle>
                {item.user_name}さんの人気イラスト
              </UserPopularityTitle>
              <Items
                datas={item.illustratio}
                isInfo={false}
                path={'illustratio'}
              />
            </UserPopularityContainer>
            <UserPopularityContainer>
              <UserPopularityTitle>
                {item.user_name}さんの人気ラフ
              </UserPopularityTitle>
              <Items datas={item.rough} isInfo={false} path={'rough'} />
            </UserPopularityContainer>
            <UserPopularityContainer>
              <UserPopularityTitle>
                {item.user_name}さんの人気マンガ
              </UserPopularityTitle>
              <Items datas={item.commic} isInfo={false} path={'commic'} />
            </UserPopularityContainer>
            <UserPopularityContainer>
              <UserPopularityTitle>
                {item.user_name}さんの人気落書き
              </UserPopularityTitle>
              <Items datas={item.graffiti} isInfo={false} path={'graffiti'} />
            </UserPopularityContainer>
          </>
        );
      })}
    </Container>
  );
};

export default Content;
