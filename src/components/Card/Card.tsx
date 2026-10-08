import BSCard, { type CardProps as BSCardProps} from 'react-bootstrap/Card';
import BSCardBody from 'react-bootstrap/CardBody'
import BSCardFooter from 'react-bootstrap/CardFooter'
import BSCardHeader from 'react-bootstrap/CardHeader'
import BSCardImg, { type CardImgProps as BSCardImgProps} from 'react-bootstrap/CardImg'
import BSCardImgOverlay from 'react-bootstrap/CardImgOverlay'
import BSCardLink, { type CardLinkProps as BSCardLinkProps} from 'react-bootstrap/CardLink'
import BSCardSubtitle from 'react-bootstrap/CardSubtitle'
import BSCardText from 'react-bootstrap/CardText'
import BSCardTitle from 'react-bootstrap/CardTitle'
import BSCardGroup from 'react-bootstrap/CardGroup'

export interface CardProps extends BSCardProps {
    ref?: React.Ref<HTMLDivElement>
}

export function Card({ref, children, ...props}: CardProps) {
  return (
    <BSCard ref={ref} {...props}>
        {children}
    </BSCard>
  )
}


export function CardBody({ref, children, ...props}: CardProps) {
  return (
    <BSCardBody ref={ref} {...props}>
        {children}
    </BSCardBody>
  )
}


export function CardFooter({ref, children, ...props}: CardProps) {
  return (
    <BSCardFooter ref={ref} {...props}>
        {children}
    </BSCardFooter>
  )
}


export function CardHeader({ref, children, ...props}: CardProps) {
  return (
    <BSCardHeader ref={ref} {...props}>
        {children}
    </BSCardHeader>
  )
}

export interface CardImgProps extends BSCardImgProps {
    src: string
    ref?: React.Ref<HTMLDivElement>
}

export function CardImg({ref, variant, src, ...props}: CardImgProps) {
  return (
    <BSCardImg variant={variant} src={src} ref={ref}  {...props} />
  )
}


export function CardImgOverlay({ref, children, ...props}: CardProps) {
  return (
    <BSCardImgOverlay ref={ref} {...props}>
        {children}
    </BSCardImgOverlay>
  )
}


export interface CardLinkProps extends BSCardLinkProps {
    href: string
    ref?: React.Ref<HTMLDivElement>
}

export function CardLink({ref, children, href, ...props}: CardLinkProps) {
  return (
    <BSCardLink href={href} ref={ref} {...props}>
        {children}
    </BSCardLink>
  )
}

export function CardText({ref, children, ...props}: CardProps) {
  return (
    <BSCardText ref={ref} {...props}>
        {children}
    </BSCardText>
  )
}

export function CardSubtitle({ref, children, ...props}: CardProps) {
  return (
    <BSCardSubtitle ref={ref} {...props}>
        {children}
    </BSCardSubtitle>
  )
}

export function CardTitle({ref, children, ...props}: CardProps) {
  return (
    <BSCardTitle ref={ref} {...props}>
        {children}
    </BSCardTitle>
  )
}

export function CardGroup({ref, children, ...props}: CardProps) {
  return (
    <BSCardGroup ref={ref} {...props}>
        {children}
    </BSCardGroup>
  )
}