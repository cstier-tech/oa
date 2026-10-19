import BSListGroup, { type ListGroupProps } from 'react-bootstrap/ListGroup'
import BSListGroupItem, { type ListGroupItemProps } from 'react-bootstrap/ListGroupItem'

export type ListItem = {
    id: string
    label: string
}

export function ListGroup({ children, ...props }: ListGroupProps) {

    return (
        <BSListGroup {...props}>
            {children}
        </BSListGroup>
    )
}

export function ListGroupItem({ children, ...props }: ListGroupItemProps) {
    return (
        <BSListGroupItem {...props}>
            {children}
        </BSListGroupItem>
    )
}