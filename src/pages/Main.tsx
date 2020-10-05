import React from 'react';
import styled from 'styled-components';

/**
 * components
 */
import TopSection from '../components/Main/TopSection';

/**
 * testData
 */

const Container = styled.div``;
const Content = styled.div``;

const Main: React.FC = () => {
  return (
    <Container>
      <TopSection />
    </Container>
  );
};

export default Main;
