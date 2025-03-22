import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@/components/common/box/box';

const meta = {
  title: 'Atoms/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'String or ReactNode',
      control: 'text',
    },
    className: {
      description: 'Class Name',
      control: 'text',
    },
    style: {
      description: 'CSS Style',
      control: 'object',
    },
  },
  args: {
    children: 'Hello World',
    className: '',
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HelloWorld: Story = {};

export const Japanese: Story = {
  args: {
    children: 'こんにちは',
    className: '',
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
};

export const Cyrillic: Story = {
  args: {
    children: 'Привет мир',
    className: '',
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full Width',
    className: '',
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};
