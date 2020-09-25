import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../AuthProvider';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dropzone from 'react-dropzone';
import { Button } from '@material-ui/core';
import { useMutation } from 'react-apollo';
import { CreateUserQuery } from '../data/mutation';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

/**
 * styled-componets
 */

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  max-width: 600px;
  padding: 1rem;
`;

const Content = styled.div`
  margin: 2rem 0;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const HoverMask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0; /* マスクを表示しない */
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-transition: all 0.6s ease;
  transition: all 0.6s ease;
`;

const HoverText = styled.div`
  font-size: 130%;
  text-align: center;
  color: #fff;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubTitleUserName = styled(Subtitle)<{ NameValidation: boolean }>`
  color: ${(props) => (props.NameValidation ? '#90CAF9' : '#f50057')};
`;

const SubTitleUserId = styled(Subtitle)<{ IdValidation: boolean }>`
  color: ${(props) => (props.IdValidation ? '#90CAF9' : '#f50057')};
`;

const HeaderImageContainer = styled.div`
  padding-top: 33%;
  position: relative;
  width: 100%;
  height: auto;
  border: 1px solid;
  &:hover {
    & ${HoverMask} {
      opacity: 1;
      padding-top: 13%;
    }
  }
`;

const HeaderGetProps = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const IconImageContainer = styled.div`
  height: 120px;
  width: 120px;
  border: 1px solid;
  padding: 4px;

  &:hover {
    & ${HoverMask} {
      opacity: 1;
      padding-top: 40px;
    }
  }
`;

const IconGetProps = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const IconContent = styled.div`
  height: 100%;
  position: relative;
`;

const Caption = styled.p`
  margin-top: 0.5rem;
  color: rgba(0, 0, 0, 0.5);
`;

const CancelContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;

/**
 * typescript
 */
interface userInfoProps {
  user_id?: string;
  user_name?: string | null;
  last_seen?: string;
  comment?: string;
  icon_image?: any;
  header_image?: any;
  account_id?: string;
}

/**
 * testData
 */
const TestData = [
  {
    user_id: '9wfyKpkMVLdGq0WcIzSc76N4KNx1',
    user_name: 'rin',
    last_seen: '2020-09-25 20:32:01',
    comment: 'aaaaaaaaaaaaaa\nhogehoge\npiyopiyo',
    icon_image: 'http://localhost:9000/mybucket/hoge/icon_sample.jpg',
    header_image: 'http://localhost:9000/mybucket/hoge/image_sample.jpg',
    account_id: 'hoge',
  },
];

const Setting: React.FC = (props: any) => {
  const { currentUser } = useContext(AuthContext);
  const [header, setHeader] = useState<any>([]);
  const [icon, setIcon] = useState<any>([]);
  const [userIdValidation, setUserIdValidation] = useState(true);
  const [userNameValidation, setUserNameValidation] = useState(true);
  // const [createUserQuery] = useMutation(CreateUserQuery);

  /* OldData */
  const [oldHeader, setOldHeader] = useState<string>();
  const [oldIcon, setOldIcon] = useState<string>();
  const [oldNmae, setOldName] = useState<string>();
  const [oldAccountId, setOldAccountId] = useState<string>();
  const [oldComment, setOldComment] = useState<string>();

  useEffect(() => {
    if (currentUser.status === 'in')
      //User情報をここで入れちゃう
      setOldHeader(TestData[0].header_image);
    setOldIcon(TestData[0].icon_image);
    setOldName(TestData[0].user_name);
    setOldAccountId(TestData[0].account_id);
    setOldComment(TestData[0].comment);
    // setOldIcon();
    setUserInfo({
      ...userInfo,
      header_image: TestData[0].header_image,
      user_id: TestData[0].user_id,
      icon_image: TestData[0].icon_image,
      user_name: TestData[0].user_name,
      account_id: TestData[0].account_id,
      comment: TestData[0].comment,
    });
  }, [currentUser]);

  const getNowTime = () => {
    const date = new Date();
    const Y = date.getFullYear();
    const M = ('00' + (date.getMonth() + 1)).slice(-2);
    const D = ('00' + date.getDate()).slice(-2);
    const h = ('00' + date.getHours()).slice(-2);
    const m = ('00' + date.getMinutes()).slice(-2);
    const s = ('00' + date.getSeconds()).slice(-2);

    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
  };
  const [nowTime, setNowTime] = useState(getNowTime());
  const [userInfo, setUserInfo] = useState<userInfoProps>({
    user_id: '',
    user_name: '',
    last_seen: nowTime,
    comment: '',
    icon_image: '',
    header_image: '',
    account_id: '',
  });

  const CreateUserFunction = () => {
    if (
      userIdValidation === false ||
      userNameValidation === false ||
      userInfo.user_name === '' ||
      userInfo.account_id === ''
    ) {
      alert('入力情報を確認してください');
      return;
    }
    console.log(userInfo);

    // //ここが送信の処理
    // createUserQuery({
    //   variables: { userInfo },
    // }).then((res) => {
    //   if (!res.errors) {
    //     console.log(res);
    //     console.log('登録しました');
    //   } else {
    //     console.log(res.errors);
    //   }
    // });

    // リダイレクト処理を書く
  };

  const backValue = (e: any) => {
    const { name } = e.currentTarget;
    console.log(name);
    switch (name) {
      case 'header_image':
        setHeader([oldHeader]);
        setUserInfo({ ...userInfo, [name]: [oldHeader] });
        break;
      case 'icon_image':
        setIcon([oldIcon]);
        setUserInfo({ ...userInfo, [name]: [oldIcon] });
        break;
      case 'user_name':
        setUserInfo({ ...userInfo, [name]: oldNmae });
        break;
      case 'account_id':
        setUserInfo({ ...userInfo, [name]: oldAccountId });
        break;
      case 'comment':
        setUserInfo({ ...userInfo, [name]: oldComment });
        break;
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    let reg = new RegExp(/^[a-zA-Z0-9-_]+$/);
    switch (name) {
      case 'account_id':
        let res = reg.test(value);
        setUserIdValidation(res);
        break;

      case 'user_name':
        value !== ''
          ? setUserNameValidation(true)
          : setUserNameValidation(false);
        break;

      default:
        break;
    }
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleInputIconImage = (e: any) => {
    let firstImage = e[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      setIcon([event.target.result]);
      setUserInfo({ ...userInfo, ['icon_image']: event.target.result });
    };
    reader.readAsDataURL(firstImage);
  };

  const handleInputHeaderImage = (e: any) => {
    let firstImage = e[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      setHeader([event.target.result]);
      setUserInfo({ ...userInfo, ['header_image']: event.target.result });
    };
    reader.readAsDataURL(firstImage);
  };

  return (
    <Container>
      <Section>
        <Title>設定ページ</Title>
        <Content>
          <Subtitle>ヘッダー画像</Subtitle>
          <Dropzone
            onDrop={(acceptedFiles) => handleInputHeaderImage(acceptedFiles)}
            accept='image/*'
          >
            {({ getRootProps, getInputProps }) => (
              <HeaderImageContainer>
                <HeaderGetProps {...getRootProps()}>
                  <input {...getInputProps()} />
                  {/* {console.log(header)} */}
                  <HeaderContent>
                    {header.length > 0 ? (
                      <>
                        {header.map((file: any) => (
                          <Img alt='Preview' src={file} />
                        ))}
                      </>
                    ) : (
                      <Img src={oldHeader} />
                    )}
                    <HoverMask>
                      <HoverText>
                        ヘッダー
                        <br />
                        変更
                      </HoverText>
                    </HoverMask>
                  </HeaderContent>
                </HeaderGetProps>
              </HeaderImageContainer>
            )}
          </Dropzone>
          <Button
            name='header_image'
            onClick={backValue}
            variant='contained'
            color='secondary'
            startIcon={<ArrowBackIcon />}
          >
            元に戻す
          </Button>
        </Content>
        <Content>
          <Subtitle>アイコン画像</Subtitle>
          <Dropzone
            onDrop={(acceptedFiles) => handleInputIconImage(acceptedFiles)}
            accept='image/*'
          >
            {({ getRootProps, getInputProps }) => (
              <IconImageContainer>
                <IconGetProps {...getRootProps()}>
                  <input {...getInputProps()} />

                  <IconContent>
                    {icon.length > 0 ? (
                      <>
                        {icon.map((file: any) => (
                          <Img alt='Preview' src={file} />
                        ))}
                      </>
                    ) : (
                      <Img alt='Preview' src={userInfo.icon_image} />
                    )}
                    <HoverMask>
                      <HoverText>
                        アイコン
                        <br />
                        変更
                      </HoverText>
                    </HoverMask>
                  </IconContent>
                </IconGetProps>
              </IconImageContainer>
            )}
          </Dropzone>
          <Button
            name='icon_image'
            onClick={backValue}
            variant='contained'
            color='secondary'
            startIcon={<ArrowBackIcon />}
          >
            元に戻す
          </Button>
        </Content>
        {/* <p>user_id: {userInfo.user_id}</p> */}
        <Content>
          <SubTitleUserName NameValidation={userNameValidation}>
            名前 (必須)
          </SubTitleUserName>
          {userNameValidation ? (
            <TextField
              name='user_name'
              required
              id='standard-required'
              onChange={handleInputChange}
              value={userInfo.user_name}
              fullWidth
              inputProps={{ maxLength: 20 }}
              helperText={`${userInfo.user_name?.length}/20`}
            />
          ) : (
            <TextField
              name='user_name'
              required
              id='standard-required'
              onChange={handleInputChange}
              value={userInfo.user_name}
              color={'secondary'}
              fullWidth
              inputProps={{ maxLength: 20 }}
              helperText={`${userInfo.user_name?.length}/20`}
            />
          )}

          <Caption>
            全体に表示される名前になります。後から変更も可能です。
          </Caption>
          <Button
            name='user_name'
            onClick={backValue}
            variant='contained'
            color='secondary'
            startIcon={<ArrowBackIcon />}
          >
            元に戻す
          </Button>
        </Content>
        <Content>
          <SubTitleUserId IdValidation={userIdValidation}>
            ユーザID (必須)
          </SubTitleUserId>
          {userIdValidation ? (
            <TextField
              name='account_id'
              required
              id='standard-required'
              onChange={handleInputChange}
              value={userInfo.account_id}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>@</InputAdornment>
                ),
              }}
              inputProps={{ maxLength: 20 }}
              helperText={`${userInfo.account_id?.length}/20`}
            />
          ) : (
            <TextField
              name='account_id'
              required
              id='standard-required'
              onChange={handleInputChange}
              value={userInfo.account_id}
              fullWidth
              color={'secondary'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>@</InputAdornment>
                ),
              }}
              inputProps={{ maxLength: 20 }}
              helperText={`${userInfo.account_id?.length}/20`}
            />
          )}

          <Caption>
            ユーザIDは英数字と’_’(アンダーバー)と’-’(ハイフン)が使えます
          </Caption>
          <Button
            name='account_id'
            onClick={backValue}
            variant='contained'
            color='secondary'
            startIcon={<ArrowBackIcon />}
          >
            元に戻す
          </Button>
        </Content>
        <Content>
          <Subtitle>コメント (任意)</Subtitle>
          <TextField
            name='comment'
            onChange={handleInputChange}
            id='outlined-multiline-static'
            multiline
            defaultValue='自己紹介とかを書きましょう'
            variant='outlined'
            inputProps={{ maxLength: 120 }}
            helperText={`${userInfo.comment?.length}/120`}
            value={userInfo.comment}
            fullWidth
          />
          <Button
            name='comment'
            onClick={backValue}
            variant='contained'
            color='secondary'
            startIcon={<ArrowBackIcon />}
          >
            元に戻す
          </Button>
        </Content>
        <Content>
          <Button
            onClick={() => CreateUserFunction()}
            size='large'
            variant='contained'
            color='primary'
            fullWidth
            style={{ color: '#fff' }}
          >
            ユーザ登録する
          </Button>
          <CancelContainer>
            <Button size='small' variant='text' color='inherit'>
              トップページに戻る
            </Button>
          </CancelContainer>
        </Content>
        {/* <p>icon_url: {currentUser.user?.photoURL}</p> */}
      </Section>
    </Container>
  );
};

export default Setting;
