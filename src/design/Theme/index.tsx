import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { THEME_VALUES } from "./settings";

import 'reset-css';
import "@fontsource/roboto";
import "@fontsource/roboto-slab";

interface ThemeProps {
  children: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={THEME_VALUES}>
    {children}
  </ThemeProvider>
);

export default Theme;

