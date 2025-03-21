import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from '@/components/alert/alert';

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    text: 'このページは日本語のみでご覧いただけます。',
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const English: Story = {
  args: {
    text: 'Sorry, this page is only available in Japanese.',
  },
};

export const Cyrillic: Story = {
  args: {
    text: 'Извините, эта страница доступна только на японском языке.',
  },
};

export const Chinese: Story = {
  args: {
    text: '抱歉，此页面仅提供日语。',
  },
};

export const Korean: Story = {
  args: {
    text: '죄송합니다. 이 페이지는 일본어로만 제공됩니다.',
  },
};
