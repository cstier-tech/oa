import React from 'react'
import Toast, { type ToastProps } from 'react-bootstrap/Toast';
import { Alert } from '../Alert'
import Icon from '../Icon';

export interface AlertToastProps extends ToastProps {
    variant: 'warning' | 'success' | 'danger'
    ref?: React.Ref<HTMLDivElement>
}

export function AlertToast({ variant, ref, children, ...props }: AlertToastProps) {
    return (
        <Toast ref={ref} {...props} className='border-0 position-absolute' delay={5000} autohide style={{left: '16px', bottom: '0px', zIndex: '2000'}}>
            <Alert variant={variant}>
                {children}
                <Icon name='close' style={{right: '10px', top: '12px', position: 'absolute', fontSize: '10px'}}/>
            </Alert>
        </Toast>
    )
}
