import React from 'react';
export interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'warning' | 'dark' | 'light' | 'gray';
    ref?: React.Ref<HTMLSpanElement>;
}
export declare function Badge({ children, className, variant, ref, ...props }: BadgeProps): React.JSX.Element;
