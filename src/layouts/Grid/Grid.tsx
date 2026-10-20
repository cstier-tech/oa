import BSContainer, {type ContainerProps} from 'react-bootstrap/Container';
import BSRow, {type RowProps} from 'react-bootstrap/Row';
import BSCol, {type ColProps} from 'react-bootstrap/Col';

export function Container({children, ...props}: ContainerProps) {
  return (
    <BSContainer {...props}>
        {children}
    </BSContainer>
  )
}

export function Row({children, ...props}: RowProps) {
  return (
    <BSRow {...props}>
        {children}
    </BSRow>
  )
}

export function Col({children, ...props}: ColProps) {
  return (
    <BSCol {...props}>
        {children}
    </BSCol>
  )
}
