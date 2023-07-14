import type { Meta, StoryObj } from "@storybook/react";
import Theme from ".";
import { THEME_VALUES } from "./settings";

import ThemeComponentDemo from "./StorybookThemeRenderer";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "design/Theme",
  component: ThemeComponentDemo,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} satisfies Meta<typeof ThemeComponentDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightTheme: Story = {
  args: {
    theme: THEME_VALUES,
  },
};
