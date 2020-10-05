import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import vectorBackground from '../../assets/images/vectorBackground.jpg';

const Container = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const OverviewContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Title = styled.p`
  font-size: 2.625rem;
  font-weight: 700;
  line-height: 1.25;
  white-space: pre-wrap;
`;

const Detail = styled.p`
  margin-top: 1rem;
  white-space: pre-wrap;
  line-height: 1.25;
`;

const ImageContent = styled.div`
  width: 40%;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const CustomButton = styled.button`
  color: #fff;
  padding: 2rem 8rem;
  background-color: #aba1cd;
  border: 0;
  outline: 0;
  font-family: 'Ubuntu', sans-serif;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

const LikeButton = styled.svg`
  cursor: pointer;
`;

const Explosion = styled.circle`
  transform-origin: 250px 250px;
  transform: scale(0.02);
  stroke: rgba(221, 70, 136, 1);
  fill: none;
  opacity: 0;
  stroke-width: 1;
  transform-origin: 250px 250px;
`;

const ParticleLayer = styled.g`
  opacity: 0;

  circle {
    opacity: 0;
    transform-origin: 250px 250px;
  }
`;

const Heart = styled.path`
  fill: rgba(6, 6, 6, 0.24);
  transform: scale(0.8);
  transform-origin: 250px 250px;
`;

const DescriptionContent = styled.div``;
const ButtonContent = styled.div``;

const TopSection: React.FC = () => {
  const title = '未来は僕らの手の中';
  const detail =
    '私たちはたくさんの絵師さん方のアウトプット出来る場としてサービスを始めました。\nイラストやマンガだけではなく、ラフや落書きを用意させていただきました。\nノートの端っこに書いた落書きや、途中経過の絵などなんでも投稿してください。\nこれから絵師を目指している方や少しでも絵に興味ある方たちを全力で応援いたします。';

  return (
    <Container>
      <OverviewContent>
        <DescriptionContent>
          <Title>{title}</Title>
          <Detail>{detail}</Detail>
        </DescriptionContent>
        <ButtonContent>
          <CustomButton>β版を利用してみる</CustomButton>
        </ButtonContent>
      </OverviewContent>
      <ImageContent>
        <Image src={vectorBackground} />
      </ImageContent>
    </Container>
  );
};

export default TopSection;
