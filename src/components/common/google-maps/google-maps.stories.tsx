import type { Meta, StoryObj } from '@storybook/react';

import { GoogleMaps } from '@/components/common/google-maps/google-maps';

const URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1184.155311143166!2d139.7664336846718!3d35.68147332142848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1704524256525!5m2!1sen!2sjp';

const meta = {
  title: 'GoogleMaps',
  component: GoogleMaps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    url: {
      description: 'Google Maps URL',
      control: 'text',
      defaultValue: URL,
    },
    variant: {
      description: 'Variant',
      control: 'select',
      options: ['default', 'grayscale'],
      defaultValue: 'default',
    },
    width: {
      description: 'Width',
      control: 'text',
      defaultValue: '560px',
    },
    height: {
      description: 'Height',
      control: 'text',
      defaultValue: '420px',
    },
  },
  args: {
    url: URL,
    width: '560px',
    height: '420px',
  },
} satisfies Meta<typeof GoogleMaps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WideScreen: Story = {
  args: {
    width: '700px',
    height: '394px',
  },
};

export const GrayScale: Story = {
  args: {
    variant: 'grayscale',
  },
};
