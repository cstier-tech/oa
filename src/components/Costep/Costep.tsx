import React from 'react'

export type CostepStatus = 'active' | 'inactive' | 'visited'

export interface CostepsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    ref?: React.Ref<HTMLDivElement>
}

export interface CostepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'> {
    label: React.ReactNode
    icon?: React.ReactNode
    status?: CostepStatus
    step?: number | string
    href?: string
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
    colClassName?: string
    ref?: React.Ref<HTMLDivElement>
}

export function Costeps({ children, className = '', ref, ...props }: CostepsProps) {
    return (
        <div ref={ref} className={`costeps row no-gutters${className}`} {...props}>
            {children}
        </div>
    )
}

export function Costep({
    label,
    icon,
    status = 'inactive',
    step,
    href,
    onClick,
    colClassName = 'col-2',
    className = '',
    ref,
    ...props
}: CostepProps) {
    const isInactive = status === 'inactive'

    return (
        <div
            ref={ref}
            className={`${colClassName} costep ${status} ${className}`}
            data-step={step}
            {...props}>
            <a
                className="costep-link"
                href={isInactive ? undefined : href}
                onClick={isInactive ? undefined : onClick}
                aria-current={status === 'active' ? 'step' : undefined}
                aria-disabled={isInactive || undefined}>
                <i className="costep-icon" aria-hidden="true">{icon}</i>
                <span className="costep-label">{label}</span>
            </a>
        </div>
    )
}
