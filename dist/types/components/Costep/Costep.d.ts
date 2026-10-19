import React from 'react';
export type CostepStatus = 'active' | 'inactive' | 'visited';
export interface CostepsProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    ref?: React.Ref<HTMLDivElement>;
}
export interface CostepProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'> {
    label: React.ReactNode;
    icon?: React.ReactNode;
    status?: CostepStatus;
    step?: number | string;
    href?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    colClassName?: string;
    ref?: React.Ref<HTMLDivElement>;
}
export declare function Costeps({ children, className, ref, ...props }: CostepsProps): React.JSX.Element;
export declare function Costep({ label, icon, status, step, href, onClick, colClassName, className, ref, ...props }: CostepProps): React.JSX.Element;
