import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "design/atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Default",
    disabled: false,
  },
  parameters: {
    jest: ["Button.test.tsx"],
  }
};

export const Primary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Primary",
    variant: "primary",
    disabled: false,
  },
  parameters: {
    jest: ["Button.test.tsx"],
  }
};

export const Secondary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Secondary",
    variant: "secondary",
    disabled: false,
  },
  parameters: {
    jest: ["Button.test.tsx"],
  }
};

export const Outline: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Outline",
    variant: "outline",
    disabled: false,
  },
  parameters: {
    jest: ["Button.test.tsx"],
  }
};

export const Disabled: Story = {
  render: (args) => <Button {...args} />,
  args: {
    children: "Disabled",
    disabled: true,
  },
  parameters: {
    jest: ["Button.test.tsx"],
  }
};
