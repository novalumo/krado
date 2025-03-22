import type { Meta, StoryObj } from '@storybook/react';

import { NovalumoLogo } from '@/components/common/logo/logo';

const meta = {
  title: 'Logo',
  component: NovalumoLogo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    variant: 'light',
  },
} satisfies Meta<typeof NovalumoLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  args: {
    variant: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
