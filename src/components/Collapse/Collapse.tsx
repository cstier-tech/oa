import BSCollapse, {type CollapseProps} from 'react-bootstrap/Collapse'

export function Collapse({children, ...props}: CollapseProps) {
  return (
    <BSCollapse dimension='height' {...props}>
        {children}
    </BSCollapse>
  )
}
