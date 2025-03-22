import type { Meta, StoryObj } from '@storybook/react';

import { NewsCard } from '@/components/news-card/news-card';
import { NewsArticleMock } from '@/tests/mocks/news';

const now = new Date().toISOString();

const meta = {
  title: 'Molecules/NewsCard',
  component: NewsCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    content: NewsArticleMock,
    showThumbnail: false,
    showCategory: true,
    showTags: false,
  },
} satisfies Meta<typeof NewsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithThumbnail: Story = {
  args: {
    showThumbnail: true,
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
