import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/components/common/avatar/avatar';

const meta = {
  title: 'Avatar',
  component: (args) => (
    <div className="w-[240px]">
      <Avatar {...args} />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      description: 'URL of the image',
      control: 'text',
    },
    variant: {
      description: 'Color of the avatar',
      control: {
        type: 'select',
        options: ['blue', 'green', 'red', 'yellow'],
      },
    },
  },
  args: {
    url: 'https://www.siraken.net/img/shirasawa_kento_dark.webp',
    variant: 'blue',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
