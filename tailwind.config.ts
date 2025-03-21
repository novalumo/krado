import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{jsx,tsx,css,scss}',
    './stories/**/*.{jsx,tsx,css,scss}',
  ],
  plugins: [],
  // prefix: 'krado-',
} satisfies Config;
