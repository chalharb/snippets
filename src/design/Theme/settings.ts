export interface ThemeValues {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    white: string;
  };

  fonts: {
    body: string;
    heading: string;
  };
}

export const THEME_VALUES: ThemeValues = {
  colors: {
    primary: "#FFA500",
    secondary: "#003366",
    background: "#F5F5F5",
    text: "#333333",
    white: "#FFFFFF",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "'Roboto Slab', sans-serif",
  },
};
