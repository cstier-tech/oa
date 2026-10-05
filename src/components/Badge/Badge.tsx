import React from 'react'
// import BSBadge, { type BadgeProps as BSBadgeProps } from 'react-bootstrap/Badge';

export interface BadgeProps {
    children: React.ReactNode
    className?: string
    variant: 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'warning' | 'dark' | 'light' | 'gray'
    ref?: React.Ref<HTMLSpanElement>
}

export function Badge({ children, className = '', variant, ref, ...props }: BadgeProps) {
    return (
        <span
            ref={ref}
            className={`badge badge-${variant} ${className}`}
            {...props}>
            {children}
        </span>
    )
}
