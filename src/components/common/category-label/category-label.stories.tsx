import type { Meta, StoryObj } from '@storybook/react';

import { CategoryLabel } from './category-label';

const meta = {
  title: 'CategoryLabel',
  component: CategoryLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    modifier: {
      control: {
        type: 'select',
        options: ['release', 'info', 'media', 'blog'],
      },
    },
    label: {
      control: {
        type: 'text',
        options: ['ニュースリリース', 'お知らせ', 'メディア', 'ブログ'],
      },
    },
  },
  args: {
    modifier: 'release',
    label: 'ニュースリリース',
  },
} satisfies Meta<typeof CategoryLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NewsRelease: Story = {};

export const Info: Story = {
  args: {
    modifier: 'info',
    label: 'お知らせ',
  },
};

export const Media: Story = {
  args: {
    modifier: 'media',
    label: 'メディア',
  },
};

export const Blog: Story = {
  args: {
    modifier: 'blog',
    label: 'ブログ',
  },
};
