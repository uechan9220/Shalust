import React, { useContext, useEffect, useState } from 'react';
import { useMutation } from 'react-apollo';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../AuthProvider';
import PostContent from '../components/PostContent';
/* testData */
import { ManagementData } from '../data/Data';
import {
  PostManagementCommicQuery,
  PostManagementGraffitiQuery,
  PostManagementIllustratioQuery,
  PostManagementRoughQuery,
} from '../data/mutation';

/**ZZ
 * interface
 */

interface ParamsProps {
  content: string;
}

interface SelectProps {
  index: number;
}

interface NavbarProps {
  selectNumber: number;
  tagName?: string;
}

const Container = styled.div`
  padding: 1rem;
`;

/**
 * animation function
 */
const getAnimation = (index: number) => {
  return `
    & > a:nth-child(${index}) {
    color: rgba(0, 0, 0, 0.88);
    border-top: 4px solid rgb(0, 150, 250);
  }
  `;
};

const Nav = styled.nav<Pick<SelectProps, 'index'>>`
  display: flex;
  -webkit-box-pack: start;
  justify-content: start;
  margin-bottom: 2rem;
  @media (max-width: 450px) {
    overflow-x: hidden;
    overflow-y: hidden;
    white-space: nowrap;
    height: 48px;
    text-align: center;
  }
  & > a:hover:nth-child(n + 1) {
    color: rgba(0, 0, 0, 0.88);
  }
  ${({ index }) => getAnimation(index)};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 46px;
  padding: 0 1.5rem;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.16);
  cursor: pointer;
  box-sizing: border-box;
  white-space: nowrap;
  text-decoration: none;
  border-top: 4px solid transparent;
  transition: color 0.2s ease 0s;
  @media (max-width: 450px) {
    -webkit-box-flex: 1;
    flex: 1 0;
    justify-content: center;
    padding: 0;
  }
`;

const NavText = styled.p``;

const NavContainer = styled.div``;

const PostManagement: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  let { content } = useParams<ParamsProps>();
  const [path, setPath] = useState('illustratio');
  const [selectNumber, setSelectNumber] = useState(1);
  const [loading, isLoading] = useState(false);
  const [postManagementIllustratioQuery] = useMutation(
    PostManagementIllustratioQuery
  );
  const [postManagementCommicQuery] = useMutation(PostManagementCommicQuery);
  const [postManagementRoughQuery] = useMutation(PostManagementRoughQuery);
  const [postManagementGraffitiQuery] = useMutation(
    PostManagementGraffitiQuery
  );

  const [Data, setData] = useState([]);

  useEffect(() => {
    console.log(currentUser.status);
    if (currentUser.status === 'in') {
    }
  }, [currentUser]);

  useEffect(() => {
    content !== undefined ? setPath(content) : setPath('illustratio');
    // let userId = { user_id: currentUser.user?.uid };
    let userId = { user_id: 'd376e021-0717-11eb-87ca-0242ac140002' };
    isLoading(true);

    switch (content) {
      case 'illustratio':
        setSelectNumber(1);
        postManagementIllustratioQuery({
          variables: { userId },
        }).then((res) => {
          if (!res.errors) {
            console.log(res);
            setData(res.data.postManagementIllustratio);
            isLoading(false);
          } else {
            console.log(res.errors);
          }
        });
        break;
      case 'rough':
        setSelectNumber(2);
        postManagementRoughQuery({
          variables: { userId },
        }).then((res) => {
          if (!res.errors) {
            console.log(res);
            setData(res.data.postManagementRough);
            isLoading(false);
          } else {
            console.log(res.errors);
          }
        });
        break;
      case 'commic':
        setSelectNumber(3);
        postManagementCommicQuery({
          variables: { userId },
        }).then((res) => {
          if (!res.errors) {
            console.log(res);
            setData(res.data.postManagementCommic);
            isLoading(false);
          } else {
            console.log(res.errors);
          }
        });
        break;
      case 'graffiti':
        setSelectNumber(4);
        postManagementGraffitiQuery({
          variables: { userId },
        }).then((res) => {
          if (!res.errors) {
            console.log(res);
            setData(res.data.postManagementGraffiti);
            isLoading(false);
          } else {
            console.log(res.errors);
          }
        });
        break;
      default:
        setSelectNumber(1);
        postManagementIllustratioQuery({
          variables: { userId },
        }).then((res) => {
          if (!res.errors) {
            console.log(res);
            setData(res.data.postManagementIllustratio);
            isLoading(false);
          } else {
            console.log(res.errors);
          }
        });
        break;
    }
  }, [content]);

  return (
    <Container>
      <NavContainer>
        <Nav index={selectNumber}>
          <StyledLink to={`/post_management/illustratio`}>
            <NavText>イラスト</NavText>
          </StyledLink>

          <StyledLink to={`/post_management/rough`}>
            <NavText>ラフ</NavText>
          </StyledLink>

          <StyledLink to={`/post_management/commic`}>
            <NavText>マンガ</NavText>
          </StyledLink>

          <StyledLink to={`/post_management/graffiti`}>
            <NavText>落書き</NavText>
          </StyledLink>
        </Nav>
      </NavContainer>
      <>
        {loading ? (
          <p>loading</p>
        ) : (
          <>
            {Data.map((items, index) => {
              return (
                <>
                  {Object.keys(items).length > 1 ? (
                    <PostContent key={index} items={items} />
                  ) : null}
                </>
              );
            })}
          </>
        )}
      </>
    </Container>
  );
};

export default PostManagement;
