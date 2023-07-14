import React from "react";
import styled from "styled-components";
import { ThemeValues } from "./settings";

interface ThemeProps {
  theme: ThemeValues;
}

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 15px;

  & > div {
    width: 100px;
  }
`;

const ColorBox = styled.div`
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
`;

const ThemeComponentDemo: React.FC<ThemeProps> = ({
  theme,
}) => (
  <div>
    <h2>Colors</h2>
    <div>
      {Object.entries(theme.colors).map(([colorName, colorValue]) => (
        <ColorWrapper>
          <div>
            {colorName}
          </div>
          <ColorBox key={colorName} color={colorValue} />
        </ColorWrapper>
      ))}
    </div>
  </div>
);

export default ThemeComponentDemo;
