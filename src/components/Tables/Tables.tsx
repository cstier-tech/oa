import BSTable, {type TableProps} from 'react-bootstrap/Table'

export function Table({ children, ...props}: TableProps){
    return (
        <BSTable {...props}>
            {children}
        </BSTable>
    )
}