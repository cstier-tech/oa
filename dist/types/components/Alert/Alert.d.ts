import React from 'react';
import { type AlertProps as BSAlertProps } from 'react-bootstrap/Alert';
export interface AlertProps extends BSAlertProps {
    ref?: React.Ref<HTMLDivElement>;
}
export declare function Alert({ children, ref, ...props }: AlertProps): React.JSX.Element;
