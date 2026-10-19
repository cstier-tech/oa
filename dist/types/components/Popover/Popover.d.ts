import type { ReactNode } from 'react';
import type { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';
export interface PopoverProps {
    title?: string;
    content: string;
    children: ReactNode;
    placement?: OverlayTriggerProps['placement'];
    trigger?: OverlayTriggerProps['trigger'];
    id?: string;
}
export declare function Popover({ title, children, placement, id, content, trigger }: PopoverProps): import("react").JSX.Element;
