import type { Meta, StoryObj } from '@storybook/react';

import { NewsArticleMock } from '@/tests/mocks/news';
import { SimpleNewsCard } from './simple-news-card';

const now = new Date().toISOString();

const meta = {
  title: 'SimpleNewsCard',
  component: SimpleNewsCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    content: NewsArticleMock,
  },
} satisfies Meta<typeof SimpleNewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithThumbnail: Story = {
  args: {
    content: {
      ...meta.args.content,
      category: {
        id: 'release',
        createdAt: now,
        updatedAt: now,
        name: 'ニュースリリース',
      },
    },
  },
};

export const NewsRelease: Story = {
  args: {
    content: {
      ...meta.args.content,
      category: {
        id: 'release',
        createdAt: now,
        updatedAt: now,
        name: 'ニュースリリース',
      },
    },
  },
};

export const Information: Story = {
  args: {
    content: {
      ...meta.args.content,
      category: {
        id: 'info',
        createdAt: now,
        updatedAt: now,
        name: 'お知らせ',
      },
    },
  },
};

export const Media: Story = {
  args: {
    content: {
      ...meta.args.content,
      category: {
        id: 'media',
        createdAt: now,
        updatedAt: now,
        name: 'メディア',
      },
    },
  },
};
