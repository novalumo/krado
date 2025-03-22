import type { Meta, StoryObj } from '@storybook/react';

import { Hamburger } from '@/components/hamburger/hamburger';

const meta = {
  title: 'Atoms/Hamburger',
  component: Hamburger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
