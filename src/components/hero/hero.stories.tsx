import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from '@/components/hero/hero';

const meta = {
  title: 'Atoms/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    main: {
      description: 'Main title',
      control: 'text',
      defaultValue: 'Title',
    },
    sub: {
      description: 'Sub title',
      control: 'text',
      defaultValue: 'Sub Hero',
    },
  },
  args: {
    main: 'Company',
    sub: '会社情報',
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EnglishJapanese: Story = {};

export const JapaneseEnglish: Story = {
  args: {
    main: '会社情報',
    sub: 'Company',
  },
};

export const CyrillicEnglish: Story = {
  args: {
    main: 'Компания',
    sub: 'Company',
  },
};
