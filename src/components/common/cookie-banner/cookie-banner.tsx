'use client';
import Link from 'next/link';

export const CookieBanner = () => {
  return (
    <div
      className="visible fixed bottom-5 z-50 my-6 block rounded border bg-white p-3 shadow"
      id="cookie"
    >
      <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
        <p className="m-0 text-sm leading-6">
          快適にウェブサイトをご利用いただくため、当サイトはCookie (クッキー)
          を利用しています。
          <br />
          Cookieの使用方法の詳細については、
          <Link href="/privacy">プライバシーポリシー</Link>を参照してください。
        </p>
        <div>
          <button
            className="rounded bg-gray-700 text-white transition-colors delay-[25] hover:bg-gray-500"
            onClick={() => {}}
          >
            同意する
          </button>
          <button
            className="rounded bg-gray-700 text-white transition-colors delay-[25] hover:bg-gray-500"
            onClick={() => {}}
          >
            選択する
          </button>
        </div>
      </div>
    </div>
  );
};
