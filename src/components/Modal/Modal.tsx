import React from 'react'
import BSModal, {type ModalProps as BSModalProps} from 'react-bootstrap/Modal';
import BSModalHeader from 'react-bootstrap/ModalHeader';
import BSModalTitle from 'react-bootstrap/ModalTitle';
import BSModalBody from 'react-bootstrap/ModalBody';
import BSModalFooter from 'react-bootstrap/ModalFooter';

export interface ModalProps extends BSModalProps {
    ref?: React.Ref<HTMLDivElement>
}

export function Modal({ref, children, ...props}: ModalProps) {
  return (
    <BSModal ref={ref} {...props}>
        {children}
    </BSModal>
  )
}

export function ModalHeader({ref, children, ...props}: ModalProps) {
  return (
    <BSModalHeader ref={ref} {...props}>
        {children}
    </BSModalHeader>
  )
}

export function ModalTitle({ref, children, ...props}: ModalProps) {
  return (
    <BSModalTitle ref={ref} {...props}>
        {children}
    </BSModalTitle>
  )
}

export function ModalBody({ref, children, ...props}: ModalProps) {
  return (
    <BSModalBody ref={ref} {...props}>
        {children}
    </BSModalBody>
  )
}


export function ModalFooter({ref, children, ...props}: ModalProps) {
  return (
    <BSModalFooter ref={ref} {...props}>
        {children}
    </BSModalFooter>
  )
}
