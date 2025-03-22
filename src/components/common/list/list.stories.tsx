import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'List',
  component: () => (
    <div>
      <ul className="list--unordered">
        <li>Item</li>
        <li>Item</li>
      </ul>
      <ol className="list--ordered">
        <li>Item</li>
        <li>Item</li>
      </ol>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
