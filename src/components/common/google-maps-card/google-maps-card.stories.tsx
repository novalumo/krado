import type { Meta, StoryObj } from '@storybook/react';

import { GoogleMapsCard } from '@/components/common/google-maps-card/google-maps-card';

const URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1184.155311143166!2d139.7664336846718!3d35.68147332142848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1704524256525!5m2!1sen!2sjp';

const meta = {
  title: 'GoogleMapsCard',
  component: () => (
    <GoogleMapsCard url={URL} className="w-full">
      <h1 className="text-3xl font-bold">HQ</h1>
      <p>Chiyoda City, Tokyo, Japan</p>
    </GoogleMapsCard>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Button content',
      control: 'text',
      defaultValue: '',
    },
    url: {
      description: 'Google Maps URL',
      control: 'text',
      defaultValue: URL,
    },
  },
  args: {
    children: (
      <>
        <h1>Hello</h1>
      </>
    ),
    url: URL,
  },
} satisfies Meta<typeof GoogleMapsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
