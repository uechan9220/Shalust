import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { useQuery } from 'react-apollo';
import { myUserQuery } from '../data/queries';
import firebase from '../Firebase';

const Container = styled.div`
  position: fixed;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
`;

const Title = styled.p`
  color: #000;
  font-weight: bold;
  font-family: cursive;
  display: inline-block;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  &:active {
    color: #000000;
  }
`;

const Content = styled.div`
  height: 2.2rem;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderUserContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Login = styled.p`
  color: #fff;
  background-color: #ea4c89;
  margin-left: 0.5rem;
  display: inline-block;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`;

const Signin = styled.p`
  color: #000;
  margin-left: 0.5rem;
  display: inline-block;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`;

const LogoutButton = styled.p`
  color: #000;
  margin-left: 0.5rem;
  display: inline-block;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
`;

const UserIcon = styled.img`
  height: 100%;
  width: 100%;
`;

const UserName = styled.p`
  font-size: 18px;
  margin: 0 0.5rem;
`;

const DownArrowSVG = styled.svg`
  width: 24px;
  height: 24px;
`;

const HeaderUserIconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const UserIconContainer = styled.div`
  width: 10rem;
  height: 10rem;
`;

const HoverContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 4.2rem;
  background-color: #fff;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  opacity: 1;
`;

const HoverUserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 1rem;
`;

const LoginContainer = styled.div``;

const UserId = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.5rem;
`;

const FollowFollowerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1rem 0;
`;

const FollowFollowerContent = styled.div``;

const FollowFollowerText = styled.p`
  font-weight: bold;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const Header: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext);

  // useStateのところに currentUser.user.email を入れたい
  const [userEmail, setUserEmail] = useState('example@example.com');
  const { loading, error, data } = useQuery(myUserQuery, {
    variables: { email: userEmail },
  });
  const [menuCheck, isMenuCheck] = useState(false);

  const menuCheckFunc = () => {
    isMenuCheck(!menuCheck);
  };

  const logout = () => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('ログアウトしました');
          props.history.push('/signin');
        })
        .catch((error) => {
          console.log(`ログアウト時にエラーが発生しました (${error})`);
        });
    });
  };

  return (
    <Container>
      {menuCheck ? <Overlay onClick={() => menuCheckFunc()}></Overlay> : null}
      <Content>
        {/* {console.log(data)} */}
        <Link to='/'>
          <Title>Shalust</Title>
        </Link>
        {currentUser.user ? (
          <HeaderUserContent onClick={() => menuCheckFunc()}>
            {/* {console.log(currentUser.userData)} */}
            <HeaderUserIconContainer>
              <UserIcon src={currentUser.userData?.icon_url} />
            </HeaderUserIconContainer>
            <UserName>{currentUser.userData?.user_name}さん</UserName>
            <DownArrowSVG
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z'
                fill='black'
              />
            </DownArrowSVG>
          </HeaderUserContent>
        ) : (
          <LoginContainer>
            <Link to='/signin'>
              <Signin>Sign in</Signin>
            </Link>
            <Link to='/login'>
              <Login>Login</Login>
            </Link>
          </LoginContainer>
        )}
      </Content>
      {currentUser.user && menuCheck ? (
        <HoverContainer>
          <UserIconContainer>
            <UserIcon src={currentUser.userData?.icon_url} />
          </UserIconContainer>
          <HoverUserName>{currentUser.userData?.user_name}</HoverUserName>
          <UserId>@{currentUser.userData?.user_id}</UserId>
          <FollowFollowerContainer>
            <FollowFollowerContent>
              <FollowFollowerText>
                {currentUser.userData?.follow}フォロー中
              </FollowFollowerText>
            </FollowFollowerContent>
            <FollowFollowerContent>
              <FollowFollowerText>
                {currentUser.userData?.follower}フォロワー
              </FollowFollowerText>
            </FollowFollowerContent>
          </FollowFollowerContainer>
        </HoverContainer>
      ) : null}
    </Container>
  );
};

export default Header;
