import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCard } from '@/components/article-card/article-card';

const meta = {
  title: 'Molecules/ArticleCard',
  component: ArticleCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    url: { control: 'text' },
    category: {
      control: 'select',
      defaultValue: 'article',
      options: ['article', 'activity', 'other'],
      description: 'The category of the article',
    },
    isPublic: { control: 'boolean' },
  },
  args: {
    title: 'Article Hero',
    url: 'https://example.com',
    category: 'article',
    isPublic: true,
  },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Article: Story = {};

export const Activity: Story = {
  args: {
    title: 'Activity Hero',
    url: 'https://example.com',
    category: 'activity',
    isPublic: true,
  },
};

export const Other: Story = {
  args: {
    title: 'Other Hero',
    url: 'https://example.com',
    category: 'other',
    isPublic: true,
  },
};
