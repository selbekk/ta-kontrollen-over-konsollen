import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { colors, fonts } from '@bekk/mdx-deck-theme';
import BekkLogo from './BekkLogo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding: 20px 80px;
`;
const TopContent = styled.header`
  align-items: center;
  display: flex;
  font-family: ${fonts.sansSerif};
  font-weight: 300;
  font-size: 32px;
  justify-content: space-between;
`;
const Logo = styled(BekkLogo)`
  width: 100px;
`;
const MainContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;
const Title = styled.h1`
  font-family: ${fonts.serif};
  font-weight: 400;
  font-size: 80px;
  margin: 1em 0 0 0;
`;
const Meta = styled.p`
  color: ${colors.greyLight};
  font-family: ${fonts.sansSerif};
  font-weight: 300;
  font-size: 32px;
`;

const CoverSlide = props => (
  <Container style={{ color: props.textColor }}>
    <TopContent>
      <Logo />
      <div style={{ flex: 1 }}>{props.where}</div>
      <div>{props.date}</div>
    </TopContent>
    <MainContent>
      <Title>{props.title}</Title>
      <Meta>{props.presentedBy}</Meta>
    </MainContent>
  </Container>
);

CoverSlide.propTypes = {
  where: string.isRequired,
  date: string.isRequired,
  title: string.isRequired,
  presentedBy: string.isRequired,
  textColor: string,
};

export default CoverSlide;
