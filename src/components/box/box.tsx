'use client';
import { cn } from '@/lib/cn';
import type { CSSProperties, ElementType, ReactNode } from 'react';

/**
 * Box Component
 */
export const Box = ({
  as: CustomTag = 'div',
  children,
  className,
  style,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) => (
  <CustomTag className={cn('p-8 bg-white rounded-lg', className)} style={style}>
    {children}
  </CustomTag>
);
