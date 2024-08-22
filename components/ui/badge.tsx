import React from 'react';
import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'solid', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-block px-2 py-1 text-xs font-semibold rounded-full",
        variant === 'solid' ? "bg-blue-500 text-white" : "border border-blue-500 text-blue-500",
        className
      )}
    >
      {children}
    </span>
  );
}
