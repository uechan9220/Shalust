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
  @media (max-width: 450px) {
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

const ImageContent = styled.div`
  width: 100%;
  height: 80%;
  border: 1px solid;
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
      padding-top: 50%;
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
  font-size: 130%;
  text-align: center;
  color: #fff;
`;

const RemoveButton = styled.div``;

/**
 * interface
 */

interface ImagePostProps {
  setPostData: any;
  imageFiles: any;
  setImageFiles: any;
}

const ImagePost: React.FC<ImagePostProps> = (props: any) => {
  const [thumbail, setThumbail] = useState(1);
  const [postImages, setPostImages] = useState<any>([]);

  // useEffect(() => {
  //   props.imageFiles.forEach((file: any) => {
  //     URL.revokeObjectURL(file.preview);
  //   });
  // }, [props.imageFiles]);
  const thmbailFunc = (index: number) => {
    setThumbail(index);
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
    console.log(props.imageFiles);
  };

  const removeImage = (item: any) => {
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
                <RemoveButton onClick={() => removeImage(index)}>
                  削除
                </RemoveButton>
                <ThumbailButton
                  index={index + 1}
                  thumbail={thumbail}
                  onClick={() => thmbailFunc(index + 1)}
                >
                  サムネイル
                </ThumbailButton>
              </InfoContent>
            </InfoBox>
            <ImageContent>
              <Img src={item.preview} />
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
                    ドラッグ&ドロップ
                    <br />
                    で追加できます
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
