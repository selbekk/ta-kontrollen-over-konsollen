import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  object-fit: cover;
`;
const ContentLayover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
`;

const FullPageVideoBackground = props => (
  <Container>
    <Video src={props.src} autoPlay loop muted />
    <ContentLayover>{props.children}</ContentLayover>
  </Container>
);

export default FullPageVideoBackground;
