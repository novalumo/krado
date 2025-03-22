import type { Meta, StoryObj } from '@storybook/react';

import { InformationBox } from '@/components/common/information-box/information-box';

const meta = {
  title: 'Molecules/InformationBox',
  component: InformationBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    children:
      'これはトップページなどで使用する情報テキストを表示するためのコンポーネントです。',
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'error', 'warning', 'success'],
      },
    },
  },
} satisfies Meta<typeof InformationBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const English: Story = {
  args: {
    children:
      'This is a component for displaying information text used on the top page.',
  },
};

export const Cyrillic: Story = {
  args: {
    children:
      'Это компонент для отображения информационного текста, используемого на главной странице.',
  },
};

export const Chinese: Story = {
  args: {
    children: '这是用于在主页上显示信息文本的组件。',
  },
};

export const Korean: Story = {
  args: {
    children:
      '이것은 상단 페이지에서 사용하는 정보 텍스트를 표시하는 데 사용되는 구성 요소입니다.',
  },
};

export const ErrorJapanese: Story = {
  args: {
    variant: 'error',
    children: 'エラーが発生しました。',
  },
};

export const WarningJapanese: Story = {
  args: {
    variant: 'warning',
    children: 'このページは日本語のみでご覧いただけます。',
  },
};

export const SuccessJapanese: Story = {
  args: {
    variant: 'success',
    children: 'お問い合わせありがとうございます。',
  },
};
