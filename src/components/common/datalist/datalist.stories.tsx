import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'DataList',
  component: () => (
    <div>
      <dl className="datalist">
        <div className="datalist__row">
          <dt className="datalist__title">Title</dt>
          <dd className="datalist__data">Content</dd>
        </div>
      </dl>
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
