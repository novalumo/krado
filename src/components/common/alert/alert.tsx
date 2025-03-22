'use client';
import { cn } from '@/lib/cn';
import { FaExclamationCircle } from 'react-icons/fa';

/**
 * Alert
 */
export const Alert = ({
  text,
  className,
}: { text: string; className?: string }) => (
  <div
    className={cn(
      'mb-6 flex items-center gap-3 rounded-lg bg-red-700 p-3 font-bold leading-6 text-white',
      className,
    )}
  >
    <FaExclamationCircle size={'1rem'} className="min-w-[16px]" />
    <p>{text}</p>
  </div>
);
