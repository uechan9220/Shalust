import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  grid-auto-rows: minmax(1px, 250px);
  position: relative;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  @media (max-width: 465px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #d4d4d4;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  opacity: 0;
  transition: opacity 0.2s;
  cursor: pointer;
`;

const Xmark = styled.svg`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const ImageContent = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid;
  position: relative;
  &:hover {
    & ${RemoveButton} {
      opacity: 0.5;
    }
  }
`;

const InfoBox = styled.div`
  width: 100%;
  height: 20%;
`;

const IndexNumber = styled.p`
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 90%;
`;

const InfoContent = styled.div`
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const ThumbailButton = styled(Button)<{ thumbail: number; index: number }>`
  border: 1px solid !important;
  background-color: ${(props) =>
    props.thumbail === props.index ? '#90CAF9' : null} !important;
  border-color: ${(props) =>
    props.thumbail === props.index ? '#90CAF9' : '#fff'} !important;
  & .MuiButton-label {
    color: #fff;
  }
`;

const DropzoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
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

const PostImageContainer = styled.div`
  min-height: 250px;
  position: relative;
  height: 100%;
  width: 100%;
  &:hover {
    & ${HoverMask} {
      opacity: 1;
    }
  }
`;

const PostGetProps = styled.div`
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

const HoverText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 130%;
  text-align: center;
  color: #fff;
`;

/**
 * interface
 */

interface ImagePostProps {
  setPostData: any;
  imageFiles: any;
  setImageFiles: any;
  setThumbail: any;
  thumbail: any;
}

const ImagePost: React.FC<ImagePostProps> = (props: any) => {
  const [postImages, setPostImages] = useState<any>([]);

  // useEffect(() => {
  //   props.imageFiles.forEach((file: any) => {
  //     URL.revokeObjectURL(file.preview);
  //   });
  // }, [props.imageFiles]);
  const thmbailFunc = (index: number) => {
    props.setThumbail(index);
  };

  const handleInputImage = (e: File[]) => {
    let image = e[0];
    const reader = new FileReader();
    setPostImages([
      ...postImages,
      {
        preview: URL.createObjectURL(image),
      },
    ]);
    reader.onload = (event: any) => {
      props.setImageFiles([
        ...props.imageFiles,
        {
          image: event.target.result,
        },
      ]);
      // console.log(test[0]);
      // setImages({ ...images, image: image });
      //   setHeader([firstImage]);
      //   setUserInfo({ ...userInfo, ['header_image']: event.target.result });
    };
    reader.readAsDataURL(image);
  };

  const removeImage = (item: any) => {
    if (item + 1 === props.thumbail) props.setThumbail(1);
    props.imageFiles.splice(item, 1);
    props.setImageFiles([...props.imageFiles]);
    postImages.splice(item, 1);
    setPostImages([...postImages]);
  };

  return (
    <Container>
      {postImages.map((item: any, index: number) => {
        return (
          <Content>
            <InfoBox>
              <InfoContent>
                <IndexNumber>{index + 1}</IndexNumber>
                <ThumbailButton
                  index={index + 1}
                  thumbail={props.thumbail}
                  onClick={() => thmbailFunc(index + 1)}
                >
                  サムネイル
                </ThumbailButton>
              </InfoContent>
            </InfoBox>
            <ImageContent>
              <RemoveButton onClick={() => removeImage(index)}>
                <Xmark
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8ZM12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
                    fill='black'
                  />
                </Xmark>
              </RemoveButton>
              <Img key={index} src={item.preview} />
            </ImageContent>
          </Content>
        );
      })}
      <DropzoneContainer>
        <Dropzone
          onDrop={(acceptedFiles) => handleInputImage(acceptedFiles)}
          accept='image/*'
        >
          {({ getRootProps, getInputProps }) => (
            <PostImageContainer>
              <PostGetProps {...getRootProps()}>
                <input {...getInputProps()} />
                <p>+</p>
                <HoverMask>
                  <HoverText>
                    クリック
                    <br />
                    or
                    <br />
                    Drug & Drop
                  </HoverText>
                </HoverMask>
              </PostGetProps>
            </PostImageContainer>
          )}
        </Dropzone>
      </DropzoneContainer>
    </Container>
  );
};

export default ImagePost;
