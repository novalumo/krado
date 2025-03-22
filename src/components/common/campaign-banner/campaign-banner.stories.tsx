import type { Meta, StoryObj } from '@storybook/react';

import { CampaignBanner } from '@/components/common/campaign-banner/campaign-banner';

const meta = {
  title: 'CampaignBanner',
  component: CampaignBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children: '🎉 キャンペーンバナー',
  },
} satisfies Meta<typeof CampaignBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Japanese: Story = {
  name: '日本語',
};

export const English: Story = {
  name: '英語',
  args: {
    children: '🎉 Campaign Banner',
  },
};

export const Cyrillic: Story = {
  name: 'キリル文字',
  args: {
    children: '🎉 Кампейн Баннер',
  },
};
