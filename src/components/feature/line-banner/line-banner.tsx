'use client';

import { cn } from '@/lib/cn';

type Props = {
  className?: string;
  linkUrl: string;
  imageUrl: string;
};

export const LineBanner = ({ className, linkUrl, imageUrl }: Props) => (
  <div
    className={cn(
      'bg-brand-line text-white overflow-hidden rounded-lg px-4 py-3',
      className,
    )}
  >
    <div className="flex justify-center items-center gap-5">
      <div className="font-bold">
        <span className="inline-block">LINE からの</span>
        <span className="inline-block">お問い合わせも</span>
        <span className="inline-block">可能です</span>
      </div>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0"
      >
        <img
          src={imageUrl}
          alt="LINE"
          className="w-12 h-12 hover:scale-150 transition-transform duration-300"
        />
      </a>
    </div>
  </div>
);
