import React from 'react';
import { type ToastProps } from 'react-bootstrap/Toast';
export interface AlertToastProps extends ToastProps {
    variant: 'warning' | 'success' | 'danger';
    ref?: React.Ref<HTMLDivElement>;
}
export declare function AlertToast({ variant, ref, children, ...props }: AlertToastProps): React.JSX.Element;
