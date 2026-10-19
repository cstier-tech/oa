import BSTable, {type TableProps} from 'react-bootstrap/Table'

export function Table({ children, ...props}: TableProps){
    <BSTable {...props}>
        {children}
    </BSTable>
}