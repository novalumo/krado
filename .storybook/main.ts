import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    // '@storybook/addon-a11y',
    // '@storybook/addon-actions',
    // '@storybook/addon-controls',
    // '@storybook/addon-designs',
    // '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
    // '@storybook/addon-measure',
    '@storybook/addon-onboarding',
    // '@storybook/addon-outline',
    // '@storybook/addon-storysource',
    '@storybook/addon-styling',
    // '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
