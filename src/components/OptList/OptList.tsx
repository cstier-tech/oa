import BSListGroup, { type ListGroupProps } from 'react-bootstrap/ListGroup'
import BSListGroupItem from 'react-bootstrap/ListGroupItem'
import BSFormCheck from 'react-bootstrap/FormCheck'
import BSFormCheckInput, { type FormCheckInputProps } from 'react-bootstrap/FormCheckInput'
import BSFormCheckLabel from 'react-bootstrap/FormCheckLabel'
import type React from 'react'
import { Collapse } from '../Collapse'

export function OptList({ className, children, ...props }: ListGroupProps) {
    const classes = ['opt-list', className].filter(Boolean).join(' ')
    return (
        <BSListGroup className={classes} {...props}>
            {children}
        </BSListGroup>
    )
}

type OptItemProps = Omit<FormCheckInputProps, 'type'> & {
    label: React.ReactNode
    type?: 'radio' | 'checkbox'
    children?: React.ReactNode
    active?: boolean
    expanded?: boolean
}

export function OptItem({ children, id, label, className, checked, type = 'radio', active = checked, expanded = checked ?? true, ...props }: OptItemProps) {
    const classes = ['opt-control', className].filter(Boolean).join(' ')
    return (
        <BSListGroupItem className='opt-list-item' active={active}>
            <BSFormCheck id={id} className={classes}>
                <BSFormCheckInput type={type} checked={checked} {...props} />
                <BSFormCheckLabel>
                    <span className='opt-name'>{label}</span>
                </BSFormCheckLabel>
            </BSFormCheck>
            {children && (
                <Collapse in={expanded}>
                    <div>{children}</div>
                </Collapse>
            )}
        </BSListGroupItem>
    )
}

type OptContentProps = React.HTMLAttributes<HTMLDivElement> & {
    isForm?: boolean
    formClassName?: string
}

export function OptContent({ isForm = false, className, formClassName, children, ...props }: OptContentProps) {
    const classes = ['opt-info', className].filter(Boolean).join(' ')
    const formClasses = ['opt-form', formClassName].filter(Boolean).join(' ')
    return (
        <div className={classes} {...props}>
            {isForm ? <div className={formClasses}>{children}</div> : children}
        </div>
    )
}
