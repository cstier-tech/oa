import React from 'react'

export interface IconProps {
    name: string
    variant?: "solid" | "regular" | "brands"
    className?: string
    ref?: React.Ref<HTMLElement>
}

export default function Icon({ name, variant = 'solid', className = '', ...props }: IconProps) {
    return (
        <i className={`fa-${variant} fa-${name} ${className}`} aria-hidden="true" {...props}></i>
    )
}
