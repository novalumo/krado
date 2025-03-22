import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@/components/tag/tag';

const meta = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    id: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
  },
  args: { id: '', name: 'Tag' },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
