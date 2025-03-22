'use client';
import { cn } from '@/lib/cn';
import { useState } from 'react';

export const GoogleMaps = ({
  url,
  variant = 'default',
  width,
  height,
  className,
}: {
  url: string;
  variant?: 'default' | 'grayscale';
  width?: number | string;
  height?: number | string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div
      className={cn(
        'relative',
        variant === 'grayscale' && 'grayscale filter',
        className,
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200" />
      )}
      <iframe
        title="Google Maps"
        src={url}
        width={width || '100%'}
        height={height || '100%'}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};
