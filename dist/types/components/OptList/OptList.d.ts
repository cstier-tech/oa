import { type ListGroupProps } from 'react-bootstrap/ListGroup';
import { type FormCheckInputProps } from 'react-bootstrap/FormCheckInput';
import type React from 'react';
export declare function OptList({ className, children, ...props }: ListGroupProps): React.JSX.Element;
type OptItemProps = Omit<FormCheckInputProps, 'type'> & {
    label: React.ReactNode;
    type?: 'radio' | 'checkbox';
    children?: React.ReactNode;
    active?: boolean;
    expanded?: boolean;
};
export declare function OptItem({ children, id, label, className, checked, type, active, expanded, ...props }: OptItemProps): React.JSX.Element;
type OptContentProps = React.HTMLAttributes<HTMLDivElement> & {
    isForm?: boolean;
    formClassName?: string;
};
export declare function OptContent({ isForm, className, formClassName, children, ...props }: OptContentProps): React.JSX.Element;
export {};
