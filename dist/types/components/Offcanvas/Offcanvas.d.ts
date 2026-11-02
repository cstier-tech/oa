import type React from "react";
export type Offcanvas = {
    children?: React.ReactNode;
    placement?: 'left' | 'right';
    fullscreen?: boolean;
    shadow?: boolean;
    show?: boolean;
    id?: string;
};
export declare function Offcanvas({ children, placement, shadow, fullscreen, show, id }: Offcanvas): React.JSX.Element;
export type OffcanvasCloser = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export declare function OffcanvasCloser({ onClick }: OffcanvasCloser): React.JSX.Element;
