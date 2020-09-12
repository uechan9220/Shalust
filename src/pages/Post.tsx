import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Button,
} from '@material-ui/core';

/**
 * styled-componets
 */

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ImageSection = styled.div`
  padding: 1rem;
`;

const DetailSection = styled.div`
  min-width: 600px;
  max-width: 600px;
  padding: 1rem;
  @media (max-width: 600px) {
    min-width: 94vw;
  }
`;

const Content = styled.div`
  margin: 2rem 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SubTitlePostTitle = styled(Subtitle)<{ NameValidation: boolean }>`
  color: ${(props) => (props.NameValidation ? '#90CAF9' : '#f50057')};
`;

const SubTitleCategory = styled(Subtitle)<{ categoryValidation: boolean }>`
  color: ${(props) => (props.categoryValidation ? '#90CAF9' : '#f50057')};
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
 * interface
 */

interface imagesProps {
  image?: string;
  index?: number;
}

interface postDataProps {
  title: string;
  detail: string;
  commic: boolean;
  illustratio: boolean;
  rough: boolean;
  graffiti: boolean;
  tags: string[];
  isAgeLimit: boolean;
  images: [imagesProps];
}

const Post: React.FC = () => {
  const [postData, setPostData] = useState<postDataProps>({
    title: '',
    detail: '',
    commic: false,
    illustratio: false,
    rough: false,
    graffiti: false,
    tags: [],
    isAgeLimit: false,
    images: [{}],
  });
  const [postTitleValidation, setPostTitleValidation] = useState(false);
  const [category, setCategory] = useState('');
  const [categoryValidation, setCategotyValidation] = useState(false);
  const [ageLimit, isAgeLimit] = useState(false);
  const [tagName, setTagName] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    switch (name) {
      case 'title':
        value !== ''
          ? setPostTitleValidation(true)
          : setPostTitleValidation(false);
        break;
      case 'tagName':
        setTagName(value);

      default:
        break;
    }
    setPostData({ ...postData, [name]: value });
  };

  const handleCategotyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    switch (event.target.name) {
      case 'illustratio':
        setPostData({
          ...postData,
          [event.target.name]: true,
          commic: false,
          rough: false,
          graffiti: false,
        });
        break;
      case 'commic':
        setPostData({
          ...postData,
          [event.target.name]: true,
          illustratio: false,
          rough: false,
          graffiti: false,
        });
        break;
      case 'rough':
        setPostData({
          ...postData,
          [event.target.name]: true,
          illustratio: false,
          commic: false,
          graffiti: false,
        });
        break;
      case 'graffiti':
        setPostData({
          ...postData,
          [event.target.name]: true,
          commic: false,
          rough: false,
          illustratio: false,
        });
        break;
      default:
        setPostData({
          ...postData,
          illustratio: false,
          commic: false,
          rough: false,
          graffiti: false,
        });
        break;
    }
    setCategotyValidation(true);
    setCategory((event.target as HTMLInputElement).value);
  };

  const changeIsAgeLimit = () => {
    isAgeLimit(!ageLimit);
    setPostData({ ...postData, isAgeLimit: !ageLimit });
  };

  const addTag = () => {
    if (postData.tags.length >= 10) {
      alert('タグは10個までです。');
      return 0;
    }
    if (postData.tags.indexOf(tagName) !== -1) {
      alert('すでに同じのがあります。');
      return 0;
    }
    if (tagName !== '') {
      setPostData({ ...postData, tags: [...postData.tags, tagName] });
    }
  };

  const postDataFunc = () => {
    console.log(postData);
  };

  const handleRemoveItem = (props: number) => {
    postData.tags.splice(props, 1);
    setPostData({
      ...postData,
      tags: [...postData.tags],
    });
    console.log(postData);
  };

  return (
    <Container>
      <ImageSection></ImageSection>
      <DetailSection>
        <Content>
          <SubTitlePostTitle NameValidation={postTitleValidation}>
            タイトル (必須)
          </SubTitlePostTitle>
          {postTitleValidation ? (
            <TextField
              name='title'
              required
              id='standard-required'
              onChange={handleInputChange}
              value={postData.title}
              fullWidth
              inputProps={{ maxLength: 20 }}
              helperText={`${postData.title?.length}/20`}
            />
          ) : (
            <TextField
              name='title'
              required
              id='standard-required'
              onChange={handleInputChange}
              value={postData.title}
              color={'secondary'}
              fullWidth
              inputProps={{ maxLength: 20 }}
              helperText={`${postData.title?.length}/20`}
            />
          )}
        </Content>
        <Content>
          <Subtitle>説明 (任意)</Subtitle>
          <TextField
            name='detail'
            onChange={handleInputChange}
            id='outlined-multiline-static'
            multiline
            variant='outlined'
            inputProps={{ maxLength: 120 }}
            helperText={`${postData.detail?.length}/120`}
            value={postData.detail}
            fullWidth
          />
        </Content>
        <Content>
          <FormControl component='fieldset'>
            <SubTitleCategory categoryValidation={categoryValidation}>
              タイトル (必須)
            </SubTitleCategory>
            <RadioGroup
              aria-label='category'
              name='hoge'
              value={category}
              onChange={handleCategotyChange}
            >
              <FormControlLabel
                name='illustratio'
                value='illustratio'
                control={<Radio color='primary' />}
                label='イラスト'
              />
              <FormControlLabel
                name='rough'
                value='rough'
                control={<Radio color='primary' />}
                label='ラフ'
              />
              <FormControlLabel
                name='commic'
                value='commic'
                control={<Radio color='primary' />}
                label='マンガ'
              />
              <FormControlLabel
                name='graffiti'
                value='graffiti'
                control={<Radio color='primary' />}
                label='落書き'
              />
            </RadioGroup>
          </FormControl>
        </Content>
        <Content>
          {postData.tags.map((item: string, index: number) => {
            return (
              <>
                <p key={index}>・{item}</p>
                <span onClick={() => handleRemoveItem(index)}>x</span>
              </>
            );
          })}
          <TextField
            name='tagName'
            required
            id='standard-required'
            onChange={handleInputChange}
            value={tagName}
            fullWidth
            inputProps={{ maxLength: 20 }}
            helperText={`${tagName.length}/20`}
          />
          <Button
            onClick={() => addTag()}
            size='large'
            variant='contained'
            color='primary'
            style={{ color: '#fff' }}
          >
            タグの追加
          </Button>
        </Content>
        <Content>
          <Subtitle>年齢制限に設定 (任意)</Subtitle>
          <FormControlLabel
            control={
              <Checkbox
                checked={ageLimit}
                onChange={changeIsAgeLimit}
                name='checkedB'
                color='primary'
              />
            }
            label='年齢制限に設定する'
          />
        </Content>
        <Content>
          <Button
            onClick={() => postDataFunc()}
            size='large'
            variant='contained'
            color='primary'
            fullWidth
            style={{ color: '#fff' }}
          >
            投稿する
          </Button>
          <CancelContainer>
            <Button size='small' variant='text' color='inherit'>
              トップページに戻る
            </Button>
          </CancelContainer>
        </Content>
      </DetailSection>
    </Container>
  );
};

export default Post;
