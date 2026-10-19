import React from 'react';
import { type ButtonProps as BSButtonProps } from 'react-bootstrap/Button';
export interface ButtonProps extends BSButtonProps {
    dataToggle?: string;
    dataPlacement?: string;
    ref?: React.Ref<HTMLDivElement>;
}
export declare function Button({ children, ref, ...props }: ButtonProps): React.JSX.Element;
export interface IconButtonProps extends BSButtonProps {
    icon: string;
    ref?: React.Ref<HTMLDivElement>;
}
export declare function IconButton({ icon, ref, className, ...props }: IconButtonProps): React.JSX.Element;
export declare function CircleButton({ icon, ref, className, ...props }: IconButtonProps): React.JSX.Element;
