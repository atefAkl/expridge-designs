import React from 'react';
import { cn } from '@/utils/cn';

/**
 * Standard container component with responsive max-width and horizontal padding
 */
export function Container({ children, className = '', ...props }) {
  return (
    <div
      className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
