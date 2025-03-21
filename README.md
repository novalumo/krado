# Krado UI - 社内向けコンポーネントライブラリ

シンプルで使いやすい社内向け React コンポーネントライブラリです。

## インストール

```bash
# bun
bun add @novalumo/krado

# npm
npm install @novalumo/krado

# yarn
yarn add @novalumo/krado

# pnpm
pnpm add @novalumo/krado
```

## 使い方

### コンポーネントのインポート

```tsx
import { Button } from "@novalumo/krado";
import "@novalumo/krado/styles.css"; // スタイルのインポート
```

### ボタンコンポーネント

```tsx
<Button>標準ボタン</Button>
<Button variant="primary">プライマリボタン</Button>
<Button variant="secondary">セカンダリボタン</Button>
<Button variant="outline">アウトラインボタン</Button>
<Button variant="ghost">ゴーストボタン</Button>

<Button size="sm">小さいボタン</Button>
<Button size="md">中サイズボタン</Button>
<Button size="lg">大きいボタン</Button>

<Button disabled>無効状態ボタン</Button>
<Button fullWidth>幅いっぱいのボタン</Button>
```

## 開発

### セットアップ

```bash
# クローン
git clone https://github.com/novalumo/krado.git
cd krado

# 依存関係のインストール
bun install

# 開発サーバーの起動
bun run dev
```

### ビルド

```bash
bun run build
```

### リント

```bash
bun run lint
```

## ライセンス

社内専用
