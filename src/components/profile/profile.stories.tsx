import type { Meta, StoryObj } from '@storybook/react';

import { Profile } from '@/components/profile/profile';

const meta = {
  title: 'Organisms/Profile',
  component: Profile,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'CEO',
    name: 'John Doe',
    aka: 'John',
    links: [],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageUrl: 'https://placehold.jp/500x500.png',
    imageAlt: 'John Doe',
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
