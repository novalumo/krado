import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/button/button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      description: 'Tag name',
      control: {
        type: 'select',
        options: ['button', 'a'],
      },
      defaultValue: 'button',
    },
    variant: {
      description: 'Button variant',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
      },
      defaultValue: 'primary',
    },
    children: {
      description: 'Button content',
      control: 'text',
      defaultValue: 'Button',
    },
    href: {
      description: 'Link href',
      control: 'text',
      defaultValue: null,
    },
  },
  args: {
    as: 'button',
    variant: 'primary',
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const ExternalLink: Story = {
  args: {
    as: 'a',
    children: 'Button',
    href: 'https://example.com',
  },
};
