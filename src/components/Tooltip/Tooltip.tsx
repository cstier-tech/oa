import { cloneElement, isValidElement, useId } from 'react';
import type { ReactElement, ReactNode } from 'react';
import BSOverlayTrigger from 'react-bootstrap/OverlayTrigger';
import type { OverlayTriggerProps } from 'react-bootstrap/OverlayTrigger';
import BSTooltip from 'react-bootstrap/Tooltip';

type ChildProps = {
    title?: string
    'data-toggle': string
    'data-placement': OverlayTriggerProps['placement']
}

export interface TooltipProps {
    title: string;
    children: ReactNode;
    placement?: OverlayTriggerProps['placement'];
    id?: string;
}

export function Tooltip({ title, children, placement, id }: TooltipProps) {
    const generatedId = useId();
    const tooltipId = id ?? generatedId;

    // OverlayTrigger needs a single element it can attach a ref to,
    // so wrap anything that isn't a valid element (text, fragments, arrays) in a span
    const child: ReactElement<{ title?: string }> = isValidElement(children)
        ? cloneElement(children as ReactElement<ChildProps>, { 
            title,
            'data-toggle': 'tooltip',
            'data-placement': placement
         })
        : <span title={title}>{children}</span>;

    return (
        <BSOverlayTrigger
            placement={placement}
            overlay={<BSTooltip id={tooltipId}>{title}</BSTooltip>}
        >
            {child}
        </BSOverlayTrigger>
    );
}
