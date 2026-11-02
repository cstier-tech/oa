import type React from "react";
export type Offcanvas = {
    children?: React.ReactNode;
    placement?: 'left' | 'right';
    size?: 'default' | 'lg' | 'fullscreen';
    shadow?: boolean;
    show?: boolean;
    id?: string;
};
export declare function Offcanvas({ children, placement, shadow, size, show, id }: Offcanvas): React.JSX.Element;
export type OffcanvasCloser = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function OffcanvasCloser({ onClick }: OffcanvasCloser): React.JSX.Element;
