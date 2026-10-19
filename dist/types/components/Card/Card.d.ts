import { type CardProps as BSCardProps } from 'react-bootstrap/Card';
import { type CardImgProps as BSCardImgProps } from 'react-bootstrap/CardImg';
import { type CardLinkProps as BSCardLinkProps } from 'react-bootstrap/CardLink';
export interface CardProps extends BSCardProps {
    ref?: React.Ref<HTMLDivElement>;
}
export declare function Card({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export declare function CardBody({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export declare function CardFooter({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export declare function CardHeader({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export interface CardImgProps extends BSCardImgProps {
    src: string;
    ref?: React.Ref<HTMLDivElement>;
}
export declare function CardImg({ ref, variant, src, ...props }: CardImgProps): import("react").JSX.Element;
export declare function CardImgOverlay({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export interface CardLinkProps extends BSCardLinkProps {
    href: string;
    ref?: React.Ref<HTMLDivElement>;
}
export declare function CardLink({ ref, children, href, ...props }: CardLinkProps): import("react").JSX.Element;
export declare function CardText({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export declare function CardSubtitle({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export declare function CardTitle({ ref, children, ...props }: CardProps): import("react").JSX.Element;
export declare function CardGroup({ ref, children, ...props }: CardProps): import("react").JSX.Element;
