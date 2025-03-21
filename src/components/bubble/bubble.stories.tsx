import type { Meta, StoryObj } from '@storybook/react';

import { Bubble } from '@/components/bubble/bubble';

const meta = {
  title: 'Atoms/Bubble',
  component: Bubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: 'String or ReactNode',
      control: 'text',
    },
  },
  args: {
    content: 'Hello World',
  },
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
