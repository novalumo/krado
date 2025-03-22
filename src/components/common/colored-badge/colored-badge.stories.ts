import { ColoredBadge } from '@/components/common/colored-badge/colored-badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'ColoredBadge',
  component: ColoredBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    badge: {
      control: 'select',
      defaultValue: 'article',
      options: ['article', 'activity', 'other'],
      description: 'The category of the article',
    },
  },
  args: {
    badge: 'article',
  },
} satisfies Meta<typeof ColoredBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {};

export const Activity: Story = {
  args: {
    badge: 'activity',
  },
};

export const Other: Story = {
  args: {
    badge: 'other',
  },
};
