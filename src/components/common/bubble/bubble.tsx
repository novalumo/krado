'use client';
import { cn } from '@/lib/cn';

/**
 * Bubble Component
 */
export const Bubble = ({
  direction = 'top-left',
  content,
  className,
}: {
  direction?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
  content: string;
  className?: string;
}) => {
  const directionStyles = {
    'top-left': 'before:top-[-1rem] before:left-4',
    'top-right': 'before:top-[-1rem] before:right-4',
    'top-center': 'before:top-[-1rem] before:left-1/2 before:-translate-x-1/2',
    'bottom-left': 'before:bottom-[-1rem] before:left-4',
    'bottom-right': 'before:bottom-[-1rem] before:right-4',
    'bottom-center':
      'before:bottom-[-1rem] before:left-1/2 before:-translate-x-1/2',
  };

  const isTop = direction.startsWith('top');

  return (
    <div
      className={cn(
        'relative drop-shadow-lg',
        'before:content-[""] before:absolute before:z-0 before:bg-white before:shadow',
        'before:w-8 before:h-6',
        isTop
          ? 'before:[clip-path:polygon(50%_0,100%_100%,0_100%)]'
          : 'before:[clip-path:polygon(0_0,100%_0,50%_100%)]',
        directionStyles[direction],
        className,
      )}
    >
      <div className="relative z-10 rounded-lg bg-white p-5">{content}</div>
    </div>
  );
};
