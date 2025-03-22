import type { Meta, StoryObj } from '@storybook/react';

import { HomeHeading } from '@/components/common/home-heading/home-heading';

const meta = {
  title: 'HomeHeading',
  component: HomeHeading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    main: {
      description: 'Left title',
      control: 'text',
    },
    sub: {
      description: 'Right title',
      control: 'text',
    },
  },
  args: {
    main: 'News',
    sub: 'ニュース',
  },
} satisfies Meta<typeof HomeHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnglishJapanese: Story = {};

export const JapaneseEnglish: Story = {
  args: {
    main: 'ニュース',
    sub: 'News',
  },
};

export const CyrillicEnglish: Story = {
  args: {
    main: 'Новости',
    sub: 'News',
  },
};
