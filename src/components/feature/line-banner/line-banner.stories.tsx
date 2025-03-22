import type { Meta, StoryObj } from '@storybook/react';

import { LineBanner } from '@/components/feature/line-banner/line-banner';

const meta = {
  title: 'LineBanner',
  component: LineBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LineBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Japanese: Story = {
  args: {
    linkUrl: 'https://line.me/R/ti/p/%40novalumo',
    imageUrl:
      'https://qr-official.line.me/gs/M_novalumo_GW.png?from=page&searchId=novalumo',
  },
};
