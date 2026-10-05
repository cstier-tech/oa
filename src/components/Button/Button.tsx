import React from 'react'
import BSButton, { type ButtonProps as BSButtonProps } from 'react-bootstrap/Button';
import Icon from '../Icon';

export interface ButtonProps extends BSButtonProps {
    ref?: React.Ref<HTMLDivElement>
}

export function Button({ children, ref, ...props }: ButtonProps) {
    return (
        <BSButton
            ref={ref}
            {...props}>
            {children}
        </BSButton>
    )
}

export interface IconButtonProps extends BSButtonProps {
    icon: string
    ref?: React.Ref<HTMLDivElement>
}

export function IconButton({ icon, ref, className = '', ...props }: IconButtonProps) {
    return (
        <BSButton
            className={`btn-icon ${className}`}
            ref={ref}
            {...props}>
            <Icon name={icon} />
        </BSButton>
    )
}

export function CircleButton({ icon, ref, className = '', ...props }: IconButtonProps) {
    return (
        <BSButton
            className={`btn-circle ${className}`}
            ref={ref}
            {...props}>
            <Icon name={icon} />
        </BSButton>
    )
}