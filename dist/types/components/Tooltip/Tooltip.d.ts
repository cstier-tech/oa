import type { ReactNode } from 'react';
import type { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';
export interface TooltipProps {
    title: string;
    children: ReactNode;
    placement?: OverlayTriggerProps['placement'];
    id?: string;
}
export declare function Tooltip({ title, children, placement, id }: TooltipProps): import("react").JSX.Element;
