import type { Meta, StoryObj } from '@storybook/react';

import { LineBanner } from '@/components/line-banner/line-banner';

const meta = {
  title: 'Atoms/LineBanner',
  component: LineBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LineBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Japanese: Story = {};
