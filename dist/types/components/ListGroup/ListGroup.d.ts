import { type ListGroupProps } from 'react-bootstrap/ListGroup';
import { type ListGroupItemProps } from 'react-bootstrap/ListGroupItem';
export type ListItem = {
    id: string;
    label: string;
};
export declare function ListGroup({ children, ...props }: ListGroupProps): import("react").JSX.Element;
export declare function ListGroupItem({ children, ...props }: ListGroupItemProps): import("react").JSX.Element;
