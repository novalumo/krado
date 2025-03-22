'use client';
import { cn } from '@/lib/cn';
/**
 * Avatar Component
 */
export const Avatar = ({
  url,
  variant = 'blue',
  className,
}: {
  url: string;
  variant?: 'blue' | 'green' | 'red' | 'yellow';
  className?: string;
}) => {
  const variantStyles = {
    blue: 'border-blue-500 bg-blue-500',
    green: 'border-green-500 bg-green-500',
    red: 'border-red-500 bg-red-500',
    yellow: 'border-yellow-500 bg-yellow-500',
  };

  return (
    <div
      className={cn(
        'relative inline-block rounded-full overflow-hidden border-4 border-transparent shadow-lg',
        variantStyles[variant],
        className,
      )}
    >
      <img src={url} alt="Avatar" className="h-full w-full object-cover" />
    </div>
  );
};
