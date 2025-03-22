import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/FormItem',
  component: (args) => (
    <div className="flex flex-col gap-3">
      <div className="form-item">
        <label htmlFor="name">{args.labelText}</label>
        <input id="name" type="text" className="text-field" />
      </div>
      <div className="form-item">
        <label htmlFor="content">{args.labelText}</label>
        <textarea
          name="content"
          id=""
          cols={30}
          rows={10}
          className="text-field"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelText: {
      description: 'Label text',
      control: 'text',
    },
  },
  args: {
    labelText: 'お名前',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
