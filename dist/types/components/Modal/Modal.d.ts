import React from 'react';
import { type ModalProps as BSModalProps } from 'react-bootstrap/Modal';
export interface ModalProps extends BSModalProps {
    ref?: React.Ref<HTMLDivElement>;
}
export declare function Modal({ ref, children, ...props }: ModalProps): React.JSX.Element;
export declare function ModalHeader({ ref, children, ...props }: ModalProps): React.JSX.Element;
export declare function ModalTitle({ ref, children, ...props }: ModalProps): React.JSX.Element;
export declare function ModalBody({ ref, children, ...props }: ModalProps): React.JSX.Element;
export declare function ModalFooter({ ref, children, ...props }: ModalProps): React.JSX.Element;
