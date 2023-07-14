import React from 'react';
import styled from "styled-components";
import Theme from './design/Theme';

const Container = styled.h1`
  width: 100%;
  border: ${props => `1px solid ${props.theme.colors.primary}`};
  background-color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.white};
`;

interface HeadingProps {
  isHeading: boolean;
}

function App() {
  return (
    <Theme>
      <Container>
        Hello world
      </Container>
    </Theme>
  );
}

export default App;
