'use client';
import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

const variantStyles = {
  default: 'w-full px-3 py-14 text-center font-bold',
  prominent: 'bg-gray-200 text-gray-800',
  error: 'bg-red-700 text-white',
  warning: 'bg-yellow-700 text-white',
  success: 'bg-green-700 text-white',
};

export const InformationBox = ({
  children,
  variant = 'default',
  className,
}: {
  children: ReactNode;
  variant?: 'default' | 'prominent' | 'error' | 'warning' | 'success';
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'w-full px-3 py-14 text-center font-bold',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </div>
  );
};
