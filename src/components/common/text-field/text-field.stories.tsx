import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'TextField',
  component: (args) => (
    <input type="text" className="text-field" value={args.content} />
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: '',
      control: 'text',
    },
  },
  args: {
    content: 'Hello World',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
