import BSPagination, { type PaginationProps } from 'react-bootstrap/Pagination';
import BSPageItem, { type PageItemProps } from 'react-bootstrap/PageItem';

export function Pagination({ children, ...props }: PaginationProps) {
    return (
        <BSPagination {...props}>
            {children}
        </BSPagination>
    )
}

export function PageItem({ children, ...props }: PageItemProps) {
    return (
        <BSPageItem {...props}>
            {children}
        </BSPageItem>
    )
}
