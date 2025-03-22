import type { Meta, StoryObj } from '@storybook/react';

import { SimpleNewsCard } from './simple-news-card';

const now = new Date().toISOString();

const NewsArticleMock = {
  id: '1',
  title: 'ニュース記事のタイトル',
  publishedAt: now,
  category: { id: '1', name: 'ニュース', createdAt: now, updatedAt: now },
  tags: [
    { id: '1', name: 'タグ1' },
    { id: '2', name: 'タグ2' },
  ],
};

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
